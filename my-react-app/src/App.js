import React from 'react';
import './App.css';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
