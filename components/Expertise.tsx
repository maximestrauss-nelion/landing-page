import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Expertise: React.FC = () => {
  const pharmaSolutions = [
    "Optimisation de la marge hors-médicament",
    "Développement des nouvelles missions (vaccination, entretiens)",
    "Réorganisation du back-office et gain de temps",
    "Merchandising stratégique et parcours patient",
    "Formation de l'équipe au conseil associé",
    "Pilotage des achats et gestion de stock"
  ];

  return (
    <section id="expertise" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nelion-dark mb-4">
            Des solutions concrètes pour votre officine
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Nous activons les leviers de croissance spécifiques à la pharmacie d'aujourd'hui.
          </p>
        </div>

        {/* Content Display */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-5xl mx-auto">
          <div className="h-2 w-full bg-pharma"></div>
          
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text & List */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-pharma-dark">
                Performance Officinale
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-justify">
                Transformez votre officine en un espace de santé performant pour sécuriser votre rentabilité tout en améliorant la qualité de service patient.
              </p>
              <ul className="space-y-4">
                {pharmaSolutions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-pharma" />
                    <span className="font-medium text-slate-700 text-justify">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Visual */}
            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden shadow-inner">
               <img 
                 src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800" 
                 alt="Pharmacie moderne"
                 className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-pharma-dark/80 to-transparent flex items-end p-8">
                 <p className="text-white font-medium text-lg italic">
                   "Une approche pragmatique pour des résultats mesurables."
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;