import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nelion-dark text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-white tracking-tight">
              Nelion Consulting
            </span>
            <p className="mt-2 text-sm">
              Expertise terrain pour la Pharmacie.
            </p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#offres" className="hover:text-white transition-colors">Offres</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} Nelion Consulting. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;