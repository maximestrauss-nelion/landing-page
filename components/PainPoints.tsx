import React from 'react';
import { AlertCircle, Pill } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-nelion-dark mb-4">A qui s'adresse cet accompagnement ?</h2>
          <div className="w-20 h-1 bg-nelion-accent mx-auto"></div>
        </div>

        <div className="flex justify-center mb-16">
          {/* Pharmacien Profile */}
          <div className="flex flex-col items-center p-10 bg-slate-50 rounded-2xl border border-slate-100 shadow-lg max-w-2xl text-center relative z-10">
            <div className="w-20 h-20 bg-pharma/10 rounded-full flex items-center justify-center mb-6 text-pharma">
              <Pill size={40} />
            </div>
            <h3 className="text-2xl font-bold text-nelion-dark mb-4">Titulaires de Pharmacie</h3>
            <p className="text-slate-600 text-lg">
              Qui souhaitent sortir de l'opérationnel pur pour piloter une véritable entreprise de santé rentable, sans sacrifier leur éthique ni leur vie personnelle.
            </p>
          </div>
        </div>

        {/* Empathy Checklist */}
        <div className="bg-nelion-dark text-white rounded-3xl p-8 md:p-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <AlertCircle className="text-nelion-accent" />
              Si vous avez l’impression que...
            </h3>
            <ul className="space-y-4">
              {[
                "Votre officine a un potentiel inexploité mais vous ne savez pas par où commencer.",
                "Votre marge s'effrite malgré un chiffre d'affaires correct.",
                "Votre équipe manque de méthode commerciale ou d'autonomie au comptoir.",
                "Vous passez trop de temps à éteindre des feux (administratif, plannings) plutôt qu'à développer votre affaire."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px] h-5 rounded-full border border-nelion-accent flex items-center justify-center">
                    <div className="w-2 h-2 bg-nelion-accent rounded-full"></div>
                  </div>
                  <span className="text-lg text-slate-200 text-justify">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;