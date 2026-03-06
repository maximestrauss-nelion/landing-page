import React from 'react';
import { Check } from 'lucide-react';

const Offers: React.FC = () => {
  return (
    <section id="offres" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-nelion-dark mb-4">Formules d'accompagnement</h2>
          <p className="text-slate-600">Des solutions adaptées à votre niveau de maturité et vos objectifs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Bilan sérénité (Standard) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-shadow duration-300 order-1 h-full">
            <h3 className="text-xl font-bold text-nelion-dark mb-2">Bilan sérénité Officine</h3>
            <p className="text-slate-500 text-sm mb-6 min-h-[40px] text-justify">Pour identifier immédiatement les leviers de croissance.</p>
            <div className="mb-6">
               <div className="text-xs font-bold text-nelion-accent uppercase tracking-wider mb-1">Prix de lancement</div>
               <div className="flex items-baseline gap-2">
                 <span className="text-slate-400 text-xl line-through decoration-slate-400/50">990 €</span>
                 <span className="text-4xl font-bold text-nelion-dark">490 €</span>
                 <span className="text-slate-400 text-lg font-medium">TTC</span>
               </div>
               <div className="text-sm text-nelion-accent font-semibold mt-1">Identifier les "Quick Wins"</div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Audit Flash
              </li>
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> 1 session de conseil de 2h
              </li>
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> <span className="font-bold text-nelion-dark">Plan d'action écrit</span>
              </li>
            </ul>
            <a href="/reservation?offer=Bilan+sérénité" target="_blank" rel="noreferrer" className="w-full py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:border-nelion-dark hover:text-nelion-dark transition-colors text-center">
              Réserver votre audit
            </a>
            <p className="text-[10px] text-slate-400 mt-3 text-center leading-tight">
              Cliquez pour réserver (30 sec). Nous vous rappelons sous 24h.
            </p>
          </div>

          {/* Card 2: Coaching (Recommended) */}
          <div className="bg-nelion-dark rounded-2xl shadow-xl border border-nelion-dark p-8 flex flex-col relative order-2 h-full z-10">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nelion-accent text-white text-xs font-bold px-4 py-1 rounded shadow-sm uppercase tracking-wide">
              Offre Recommandée
            </div>
            <h3 className="text-xl font-bold text-white mb-2 mt-4">Coaching Officine</h3>
            <p className="text-slate-300 text-sm mb-6 min-h-[40px] text-justify">Une transformation réelle de vos méthodes et résultats.</p>
            
            <div className="mb-6">
               <div className="text-lg font-bold text-white">Bilan sérénité Officine</div>
               <div className="text-3xl font-bold text-white mt-1">+ 3 mois</div>
               <div className="text-sm text-slate-400 mt-1 mb-6">Accompagnement soutenu</div>
               
               <div className="space-y-3 pt-4 border-t border-slate-700">
                 <div className="flex justify-between items-center">
                   <div className="flex flex-col">
                     <span className="text-slate-300 text-sm font-medium">Solo dirigeant</span>
                     <span className="text-[10px] text-nelion-accent font-bold uppercase tracking-wider">Prix de lancement</span>
                   </div>
                   <div className="text-right whitespace-nowrap">
                     <span className="text-slate-500 text-sm line-through mr-2">799 €</span>
                     <span className="text-white font-bold text-lg">499 €</span>
                     <span className="text-xs text-slate-400">/mois TTC</span>
                   </div>
                 </div>
                 <div className="flex justify-between items-center">
                   <div className="flex flex-col">
                     <span className="text-slate-300 text-sm font-medium leading-tight mr-2">Dirigeant +<br/>équipe</span>
                     <span className="text-[10px] text-nelion-accent font-bold uppercase tracking-wider">Prix de lancement</span>
                   </div>
                   <div className="text-right whitespace-nowrap">
                     <span className="text-slate-500 text-sm line-through mr-2">999 €</span>
                     <span className="text-white font-bold text-lg">799 €</span>
                     <span className="text-xs text-slate-400">/mois TTC</span>
                   </div>
                 </div>
               </div>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex gap-3 text-sm text-slate-200 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> 1h de coaching par semaine en visio
              </li>
              <li className="flex gap-3 text-sm text-slate-200 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Hotline permanente par Whatsapp
              </li>
              <li className="flex gap-3 text-sm text-slate-200 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Tableau de bord personnalisé
              </li>
              <li className="flex gap-3 text-sm text-slate-200 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Accès aux outils digitaux Nelion IA pendant la durée de l'accompagnement
              </li>
            </ul>
            <a href="/reservation?offer=Coaching" target="_blank" rel="noreferrer" className="w-full py-4 bg-nelion-accent text-white font-bold rounded-xl hover:bg-amber-600 transition-colors text-center shadow-lg block">
              Réserver votre accompagnement
            </a>
            <p className="text-[10px] text-slate-400 mt-3 text-center leading-tight">
              Cliquez pour réserver (30 sec). Nous vous rappelons sous 24h.
            </p>
          </div>

          {/* Card 3: Suivi Annuel */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-lg transition-shadow duration-300 order-3 h-full relative">
             <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
              Long terme
            </div>
            <h3 className="text-xl font-bold text-nelion-dark mb-2">Suivi Annuel</h3>
            <p className="text-slate-500 text-sm mb-6 min-h-[40px] text-justify">Pilotage stratégique pour pérenniser la croissance.</p>
            <div className="mb-6">
               <div className="text-lg font-bold text-nelion-dark">Bilan sérénité Officine</div>
               <div className="text-3xl font-bold text-nelion-dark mt-1">+ 12 mois</div>
               <div className="text-sm text-slate-500 mt-1 mb-4">Partenariat durable</div>
               
               <div className="pt-4 border-t border-slate-100">
                 <div className="text-[10px] text-nelion-accent font-bold uppercase tracking-wider mb-1">Prix de lancement</div>
                 <div className="flex items-baseline gap-2">
                   <span className="text-slate-400 text-lg line-through decoration-slate-400/50">449 €</span>
                   <span className="text-3xl font-bold text-nelion-dark">399 €</span>
                   <span className="text-xs text-slate-400 font-medium">/mois TTC</span>
                 </div>
               </div>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Pilotage long terme
              </li>
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Ajustements stratégiques
              </li>
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Sérénité du dirigeant
              </li>
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> 1h de coaching par semaine en visio
              </li>
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Hotline permanente par Whatsapp
              </li>
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Tableau de bord personnalisé
              </li>
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> Accès aux outils digitaux Nelion IA pendant la durée de l'accompagnement
              </li>
              <li className="flex gap-3 text-sm text-slate-700 text-justify">
                <Check size={18} className="text-nelion-accent shrink-0" /> <span className="font-bold text-nelion-dark">2 journées sur place à l'officine</span> <span className="text-[10px] text-slate-400 italic">(optionnel & sur devis)</span>
              </li>
            </ul>
            <a href="/reservation?offer=Accompagnement+Annuel" target="_blank" rel="noreferrer" className="w-full py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:border-nelion-dark hover:text-nelion-dark transition-colors text-center">
              Réserver votre accompagnement
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;