import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Guests from './components/Guests';
import EventInfo from './components/EventInfo';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Guests />
        <EventInfo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;