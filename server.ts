import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  console.log("Starting server...");
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("Current directory:", process.cwd());

  app.use(cors());
  app.use(express.json());

  // Request logger
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      env: process.env.NODE_ENV,
      time: new Date().toISOString()
    });
  });

  // API Route for Leads
  app.post("/api/leads", async (req, res) => {
    const { lastName, firstName, pharmacyName, phone, email, need, submissionType, offerName } = req.body;

    try {
      // Envoyer un email
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const isReservation = submissionType === 'reservation';
        let subject = isReservation ? "Nouvelle réservation accompagnement" : "NELION - demande de nouvel audit";
        
        if (offerName) {
          subject = `NELION - Réservation [${offerName}]`;
        }

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: "contact@nelion.fr",
          subject: subject,
          text: `
            ${isReservation ? `Nouvelle réservation d'accompagnement : ${offerName || 'Standard'}` : "Nouveau prospect Nelion Consulting !"}
            
            Détails :
            - Nom : ${lastName} ${firstName}
            - Pharmacie : ${pharmacyName}
            - Téléphone : ${phone}
            - Email : ${email}
            - Besoin : ${need}
            - Type : ${submissionType || 'audit'}
            ${offerName ? `- Offre choisie : ${offerName}` : ""}
            
            Date : ${new Date().toLocaleString("fr-FR")}
          `,
        };

        await transporter.sendMail(mailOptions);
      } else {
        console.warn("Email credentials missing. Skipping email notification.");
      }

      res.status(200).json({ success: true, message: "Lead processed successfully" });
    } catch (error) {
      console.error("Error processing lead:", error);
      res.status(500).json({ success: false, message: "Error processing lead" });
    }
  });

  const distPath = path.resolve(__dirname, "dist");
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    console.log(`Serving production build from: ${distPath}`);
    app.use(express.static(distPath));
    
    // SPA Fallback for production
    app.get("*path", (req, res) => {
      if (req.url.startsWith('/api')) return res.status(404).json({ error: "API route not found" });
      
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Build not found. Please run npm run build.");
      }
    });
  } else {
    console.log("Starting Vite in middleware mode...");
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false 
      },
      appType: "spa",
    });
    
    app.use(vite.middlewares);
    
    // The Vite middleware handles SPA fallback automatically with appType: 'spa'
    // but we can add an explicit one just in case for non-asset requests
    app.use("*path", async (req, res, next) => {
      const url = req.originalUrl;
      if (url.startsWith('/api')) return next();
      
      try {
        let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
