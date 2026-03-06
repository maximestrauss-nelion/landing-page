import React from 'react';
import { Award, Briefcase, TrendingUp } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <section className="py-20 bg-nelion-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 text-center">Pourquoi nous faire confiance ?</h2>
        <p className="text-slate-300 text-lg mb-10 leading-relaxed text-center">
          Notre expertise ne vient pas de la théorie, mais de 18 années passées sur le terrain au sein de réseaux nationaux leaders. Nous avons vu ce qui fonctionne, ce qui échoue, et comment activer la croissance.
        </p>
        
        {/* Bordered Box for List Items */}
        <div className="border-2 border-nelion-accent/60 rounded-lg p-6 md:p-8">
          <div className="flex flex-col gap-8 max-w-lg mx-auto">
            <div className="flex gap-5 items-center">
              <div className="bg-slate-700/50 p-4 rounded-xl h-fit shrink-0">
                <Award className="text-nelion-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Coaching Dirigeants</h4>
                <p className="text-slate-400 text-sm">Accompagnement stratégique de titulaires et gérants.</p>
              </div>
            </div>
            
            <div className="flex gap-5 items-center">
              <div className="bg-slate-700/50 p-4 rounded-xl h-fit shrink-0">
                <Briefcase className="text-nelion-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Animation Réseau</h4>
                <p className="text-slate-400 text-sm">Expérience sur un parc de plus de 500 points de vente.</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="bg-slate-700/50 p-4 rounded-xl h-fit shrink-0">
                <TrendingUp className="text-nelion-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Créateur de Services</h4>
                <p className="text-slate-400 text-sm">Déploiement de concepts rentables et duplicables.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-8 border-2 border-optic-light rounded-sm p-8 text-center">
          <p className="text-xl md:text-2xl font-serif italic text-white leading-relaxed">
            "Ce que nous avons fait pour des réseaux nationaux, nous le faisons désormais pour vous, en direct."
          </p>
        </div>

      </div>
    </section>
  );
};

export default Trust;