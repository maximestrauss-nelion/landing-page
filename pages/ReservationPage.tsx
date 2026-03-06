import React from 'react';
import { useLocation } from 'react-router-dom';
import LeadForm from '@/components/LeadForm';

const ReservationPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const offerName = queryParams.get('offer') || '';

  return (
    <div className="min-h-screen bg-nelion-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">NELION Consulting</h1>
          <p className="text-slate-400">Réservez votre accompagnement personnalisé</p>
          {offerName && (
            <div className="mt-2 inline-block px-3 py-1 bg-nelion-accent/20 border border-nelion-accent/30 rounded text-nelion-accent text-sm font-bold">
              Offre : {offerName}
            </div>
          )}
        </div>
        <LeadForm submissionType="reservation" offerName={offerName} />
        <p className="mt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Nelion Consulting. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default ReservationPage;
