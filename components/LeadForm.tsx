import React, { useState, useEffect } from 'react';

interface LeadFormProps {
  submissionType?: 'audit' | 'reservation';
  offerName?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ submissionType = 'audit', offerName = '' }) => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    pharmacyName: '',
    phone: '',
    email: '',
    need: '',
    submissionType: submissionType,
    offerName: offerName
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, submissionType, offerName }));
  }, [submissionType, offerName]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit form');
        alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue. Veuillez vérifier votre connexion.');
    }
  };

  const isReservation = formData.submissionType === 'reservation';

  if (isSubmitted) {
    return (
      <div className="p-8 bg-pharma/20 border-2 border-pharma rounded-2xl text-center">
        <p className="text-white font-bold text-xl mb-2">Merci !</p>
        <p className="text-slate-300">
          {isReservation 
            ? "Votre demande de réservation a bien été reçue. Nous vous recontacterons sous 24h."
            : "Votre demande d'audit a bien été reçue. Nous vous recontacterons sous 24h."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative z-50 overflow-hidden">
      {/* Subtle accent bar at the top */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-nelion-accent"></div>
      
      <h3 className="text-nelion-dark font-bold text-2xl mb-1 text-center">
        {isReservation ? "Réservation" : "Audit Gratuit"}
      </h3>
      <p className="text-slate-500 text-sm text-center mb-8">
        {isReservation ? "Votre accompagnement sur-mesure" : "Diagnostic de votre officine en 24h"}
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">Prénom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nelion-accent/20 focus:border-nelion-accent transition-all"
              placeholder="Jean"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">Nom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nelion-accent/20 focus:border-nelion-accent transition-all"
              placeholder="Dupont"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="pharmacyName" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">Nom de la pharmacie</label>
          <input
            type="text"
            id="pharmacyName"
            name="pharmacyName"
            required
            value={formData.pharmacyName}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nelion-accent/20 focus:border-nelion-accent transition-all"
            placeholder="Pharmacie du Centre"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nelion-accent/20 focus:border-nelion-accent transition-all"
              placeholder="06 00 00 00 00"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-nelion-accent/20 focus:border-nelion-accent transition-all"
              placeholder="jean@email.com"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="need" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">Votre besoin principal</label>
          <div className="relative">
            <select
              id="need"
              name="need"
              required
              value={formData.need}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-nelion-accent/20 focus:border-nelion-accent transition-all appearance-none"
            >
              <option value="" disabled className="bg-white text-slate-900">Sélectionnez un besoin</option>
              <option value="management" className="bg-white text-slate-900">Management</option>
              <option value="optimisation stock" className="bg-white text-slate-900">Optimisation stock</option>
              <option value="techniques de vente" className="bg-white text-slate-900">Techniques de vente</option>
              <option value="merchandising" className="bg-white text-slate-900">Merchandising</option>
              <option value="nouvelles mission" className="bg-white text-slate-900">Nouvelles missions</option>
              <option value="formation de l'équipe" className="bg-white text-slate-900">Formation de l'équipe</option>
              <option value="autres" className="bg-white text-slate-900">Autres</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-nelion-accent text-white font-bold uppercase tracking-widest rounded-xl hover:bg-amber-600 transition-all shadow-lg hover:shadow-nelion-accent/20 mt-4 active:scale-[0.98]"
        >
          {isReservation ? "Réserver mon accompagnement" : "Recevoir mon audit gratuit"}
        </button>
        
        <p className="text-[10px] text-slate-400 text-center mt-2">
          En validant, vous acceptez d'être recontacté par Nelion Consulting.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
