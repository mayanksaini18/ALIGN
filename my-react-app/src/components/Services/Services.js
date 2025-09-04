import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Brand Strategy',
    description: 'Defining your story, voice, and market position to build a memorable brand identity.',
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive online marketing campaigns including SEO, SEM, and social media.',
  },
  {
    title: 'Web Design & Dev',
    description: 'Creating beautiful, responsive, and high-performing websites that convert visitors.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
