import React from 'react';
import { Calendar } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-nelion-dark mb-6">
          Vous souhaitez savoir ce que votre pharmacie pourrait réellement générer de plus ?
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          Ne restez pas avec vos doutes. Profitez d'un premier regard extérieur sans engagement.
        </p>
        
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 inline-block w-full md:w-auto">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Premier échange offert (30 minutes)</h3>
          
          <a 
            href="https://calendar.app.google/Uis1TsRHqNxG3P7q7" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-nelion-accent text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl w-full md:w-auto"
          >
            <Calendar size={20} />
            Prendre rendez-vous
          </a>
          <p className="mt-4 text-sm text-slate-400">Aucun engagement requis. Juste de la valeur.</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;