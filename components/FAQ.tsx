import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-nelion-dark">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-nelion-accent shrink-0" size={24} />
        ) : (
          <ChevronDown className="text-slate-400 shrink-0" size={24} />
        )}
      </button>
      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed pb-2 text-justify">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "À qui s'adresse l'accompagnement Nelion Consulting ?",
      answer: "Notre accompagnement est spécifiquement conçu pour les titulaires d'officine qui souhaitent sortir de l'opérationnel pur pour piloter une véritable entreprise de santé rentable, sans sacrifier leur éthique ni leur vie personnelle."
    },
    {
      question: "Quels résultats concrets puis-je attendre ?",
      answer: "En moyenne, nos clients constatent une augmentation de 10 à 25% de leur chiffre d'affaires en 6 mois. Nous travaillons également sur l'augmentation de la marge commerciale, une organisation plus sereine et une réduction de la charge mentale du titulaire allant jusqu'à 50%."
    },
    {
      question: "Est-ce que je vais devoir recruter pour augmenter mon CA ?",
      answer: "Non, notre méthode terrain éprouvée permet d'augmenter votre rentabilité et votre chiffre d'affaires sans nécessairement recruter, en optimisant vos processus existants et en formant vos équipes actuelles."
    },
    {
      question: "Comment se déroule la méthode Nelion ?",
      answer: "Elle se décompose en 5 étapes clés : une Analyse complète de l'existant, l'Identification des leviers de croissance, la création d'un Plan d'actions précis, un Accompagnement terrain avec vos équipes, et enfin la Mesure continue des KPI pour ajuster la stratégie."
    },
    {
      question: "Quel est l'investissement pour commencer ?",
      answer: "Nous proposons plusieurs formules : du Bilan sérénité ponctuel à 490€ (prix de lancement) pour identifier vos 'Quick Wins', jusqu'au Coaching Officine sur 3 mois avec un suivi hebdomadaire pour une transformation profonde."
    },
    {
      question: "Pourquoi faire confiance à Nelion Consulting ?",
      answer: "Notre expertise repose sur 18 années passées sur le terrain au sein de réseaux nationaux leaders. Nous ne faisons pas de théorie : nous appliquons des méthodes qui ont fait leurs preuves sur des parcs de plus de 500 points de vente."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-nelion-dark mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-slate-600">
            Tout ce que vous devez savoir sur notre accompagnement et nos méthodes.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
