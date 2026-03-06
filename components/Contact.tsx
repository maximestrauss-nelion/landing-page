import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import LeadForm from './LeadForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-nelion-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pharma rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nelion-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contactez-nous</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous solliciter pour un premier échange gratuit et sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pharma/20 p-3 rounded-lg text-pharma">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-1">Email</p>
                    <a href="mailto:contact@nelion.fr" className="text-white hover:text-pharma transition-colors text-lg">
                      contact@nelion.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-nelion-accent/20 p-3 rounded-lg text-nelion-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-1">Téléphone</p>
                    <a href="tel:+33638397886" className="text-white hover:text-nelion-accent transition-colors text-lg">
                      +33 6 38 39 78 86
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-1">Localisation</p>
                    <p className="text-white text-lg">
                      Interventions dans toute la France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pharma/20 to-nelion-accent/20 p-8 rounded-2xl border border-white/10">
              <h3 className="text-white font-bold mb-2">Pourquoi nous contacter ?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Chaque officine est unique. Notre approche personnalisée commence par une écoute attentive de vos problématiques spécifiques pour vous proposer la solution la plus adaptée à vos objectifs de croissance et de sérénité.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Réserver votre accompagnement</h3>
            <p className="text-slate-400 text-sm mb-6">Réponse garantie sous 24h ouvrées.</p>
            <LeadForm submissionType="reservation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
