import React from 'react';

const FounderWord: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image Container */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative group">
              <div className="absolute -inset-4 bg-pharma/10 rounded-3xl -z-10 transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1W--GyTtGckka-WNqrSYn9MX1SnSh0ylq" 
                alt="Maxime Strauss - Fondateur Nelion Consulting" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-nelion-dark mb-8">
              Le mot du fondateur
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
              <p>
                « En tant qu'expert du monde de l’officine, je fais un constat sans appel : le pharmacien d’aujourd’hui est un équilibriste. Entre la pression réglementaire, la gestion des stocks et les mutations technologiques, votre cœur de métier — le conseil et le soin — est trop souvent sacrifié sur l'autel de l'administratif.
              </p>
              <p>
                J’ai fondé Nelion Consulting avec une conviction simple : la rentabilité et la sérénité ne doivent plus être des options opposées. Mon objectif est de vous redonner les clés de votre pharmacie en optimisant vos processus et votre stratégie digitale. Je ne vous apporte pas seulement des conseils, mais des solutions concrètes pour que vous puissiez vous concentrer sur ce qui compte vraiment : vos patients. »
              </p>
            </div>
            <div className="mt-8">
              <p className="font-bold text-nelion-dark text-xl">Maxime Strauss</p>
              <p className="text-pharma font-medium">Fondateur de Nelion Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderWord;
