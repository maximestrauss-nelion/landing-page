import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-nelion-dark' : 'text-nelion-dark md:text-white'}`}>
            Nelion Consulting
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#expertise" className={`text-sm font-medium hover:text-nelion-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>Expertise</a>
          <a href="#methode" className={`text-sm font-medium hover:text-nelion-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>Méthode</a>
          <a href="#offres" className={`text-sm font-medium hover:text-nelion-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>Offres</a>
          <a href="#contact" className={`text-sm font-medium hover:text-nelion-accent transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>Contact</a>
          <a 
            href="https://calendar.app.google/Uis1TsRHqNxG3P7q7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-nelion-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Prendre RDV
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#expertise" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Expertise</a>
            <a href="#methode" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Méthode</a>
            <a href="#offres" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Offres</a>
            <a href="#contact" className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a 
              href="https://calendar.app.google/Uis1TsRHqNxG3P7q7" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-nelion-accent text-white px-5 py-3 rounded-lg text-base font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Diagnostic Gratuit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;