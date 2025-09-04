import React from 'react';
import Header from '../../components/Header/Header';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>We Build Brands That Stand Out.</h1>
            <p>A.L.I.G.N is your partner in digital branding and marketing success.</p>
            <a href="#contact" className="cta-button">Get In Touch</a>
          </div>
        </section>

        <Services />

        <section id="about" className="page-section">
          <h2>About Us</h2>
          <p>We are a team of passionate creators, strategists, and innovators dedicated to building impactful brands.</p>
        </section>

        <section id="contact" className="page-section">
          <h2>Contact Us</h2>
          <p>Ready to start a project? Reach out to us!</p>
          <a href="mailto:hello@align.com" className="cta-button">hello@align.com</a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;