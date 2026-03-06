import React from 'react';

const Results: React.FC = () => {
  const stats = [
    { value: "+10 à 25%", label: "Chiffre d'Affaires", color: "text-nelion-accent" },
    { value: "Augmentée", label: "Marge Commerciale", color: "text-pharma" },
    { value: "-50%", label: "Charge Mentale", color: "text-nelion-dark" },
    { value: "Sereine", label: "Organisation", color: "text-pharma-dark" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-12">Impact moyen constaté après 6 mois</h2>
        
        <div className="border-2 border-nelion-accent/60 p-8 md:p-12 bg-white rounded-xl shadow-sm relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center">
                <span className="text-slate-500 font-bold uppercase tracking-wide text-sm mb-3">
                  {stat.label}
                </span>
                <span className={`text-4xl md:text-5xl font-extrabold ${stat.color}`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;