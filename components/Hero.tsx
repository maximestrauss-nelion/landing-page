import React from 'react';
import { TrendingUp, CheckCircle2 } from 'lucide-react';
import LeadForm from './LeadForm';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-nelion-dark pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-[85vh] flex items-center">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20">
         <img 
            src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1920" 
            alt="Pharmacie background" 
            className="w-full h-full object-cover grayscale"
         />
         {/* Gradient optimized for left-aligned text */}
         <div className="absolute inset-0 bg-gradient-to-r from-nelion-dark via-nelion-dark/95 to-nelion-dark/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pharma/10 border border-pharma/20 text-pharma-light text-sm font-medium mb-6">
              Expertise Pharmacie
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Développez durablement la rentabilité de votre <span className="text-pharma">pharmacie</span>.
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-justify">
              Un accompagnement expert pour titulaires : augmentez votre CA, maîtrisez vos marges et appliquez une méthode terrain éprouvée.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-slate-400 font-medium">
               <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-pharma"/> Méthode éprouvée</span>
               <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-pharma"/> Résultats mesurables</span>
            </div>
          </div>

          {/* Right Content: Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <LeadForm submissionType="audit" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;