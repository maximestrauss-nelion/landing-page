import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Expertise from './components/Expertise';
import Methodology from './components/Methodology';
import Trust from './components/Trust';
import FounderWord from './components/FounderWord';
import Offers from './components/Offers';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ReservationPage from '@/pages/ReservationPage';

const LandingPage: React.FC = () => (
  <div className="min-h-screen flex flex-col font-sans">
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <PainPoints />
      <Expertise />
      <Methodology />
      <Trust />
      <FounderWord />
      <Offers />
      <Results />
      <FAQ />
      <Contact />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
};

export default App;