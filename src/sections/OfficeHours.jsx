import React from 'react';
import { Clock3 } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function OfficeHours() {
  return (
    <section className="office-hours-section" aria-label="Our office hours">
      <div className="office-hours-container">
        <Reveal direction="up">
          <div className="office-hours-media">
            <img
              src="/images/office2.jpeg"
              alt="Entrain Growth Lab creative office headquarters in Kerala"
              loading="lazy"
              decoding="async"
            />
            <div className="office-hours-overlay" />

            <div className="office-hours-copy">
              <div className="office-hours-label">
                <Clock3 aria-hidden="true" />
                <span>Our working hours</span>
              </div>
              <h2>We operate<br /><em>9:00 to 5:00</em></h2>
              <p>Monday to Saturday</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
