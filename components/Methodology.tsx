import React from 'react';
import { Search, Target, FileSpreadsheet, Users, BarChart3 } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    { icon: Search, title: "Analyse", desc: "Audit complet de l'existant (chiffres, équipe, flux)." },
    { icon: Target, title: "Identification", desc: "Détection des leviers de croissance prioritaires." },
    { icon: FileSpreadsheet, title: "Plan d'actions", desc: "Feuille de route précise et chiffrée." },
    { icon: Users, title: "Accompagnement", desc: "Mise en œuvre terrain avec vos équipes." },
    { icon: BarChart3, title: "Mesure", desc: "Suivi des KPI et ajustements continus." },
  ];

  return (
    <section id="methode" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nelion-accent font-bold uppercase tracking-wider text-sm">La Méthode Nelion</span>
          <h2 className="text-3xl md:text-4xl font-bold text-nelion-dark mt-2 mb-6">
            Transformer votre pharmacie en une structure<br /> 
            plus rentable, plus fluide et plus sereine.
          </h2>
        </div>

        {/* Process Steps - Responsive */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:border-nelion-accent transition-colors duration-300 shadow-sm relative z-10">
                  <step.icon size={32} className="text-nelion-dark group-hover:text-nelion-accent transition-colors" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-nelion-dark text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-nelion-dark mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Benefit */}
        <div className="mt-16 text-center bg-slate-50 rounded-2xl p-8 border border-slate-100 max-w-3xl mx-auto relative z-10 shadow-sm">
          <p className="text-xl font-medium text-slate-700">
            Résultat attendu : <span className="text-nelion-dark font-bold">Gain financier, Sérénité, Maîtrise</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology;