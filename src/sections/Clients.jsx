import React from 'react';
import Reveal from '../components/Reveal';

const clients = [
  { name: 'Entrain Edu Hub', logo: '/images/entraineduhub-navbar.png' },
  { name: 'Entrain Lab', logo: '/images/logolab-trimmed.png' },
  { name: 'Entrain Academy', logo: '/images/academy-logo-trimmed.png' },
  { name: 'Buckeez', logo: '/images/logo-transparent.png' },
  { name: 'Cobolt Machineries', logo: '/images/cobolt-logo-cropped.png' },
];

export default function Clients() {
  return (
    <section className="clients-section" aria-labelledby="clients-heading">
      <div className="clients-header">
        <Reveal direction="up">
          <h2 id="clients-heading">Our clients</h2>
        </Reveal>
      </div>

      <div className="clients-grid">
        {clients.map((client, index) => (
          <Reveal key={client.name} delay={index * 0.07} direction="up">
            <div className="client-logo-card">
              <img
                src={client.logo}
                alt={`${client.name} partner logo`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
