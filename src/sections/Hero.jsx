import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center bg-[#4355A5] text-white overflow-hidden bg-grid-blue">
      {/* Ambient Radial Glow using Logo Blue Tone */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="space-y-6 sm:space-y-8">
          
          {/* Oversized Headline aligned to Logo Colors */}
          <Reveal direction="up" delay={0.15}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Growth Isn't <br />
              <span className="text-[#4355A5] bg-white px-4 py-1 rounded-md shadow-lg inline-block mt-2">
                Luck. It's Strategy.
              </span>
            </h1>
          </Reveal>

          {/* Supporting Paragraph */}
          <Reveal direction="up" delay={0.25}>
            <p className="text-base sm:text-lg  m-auto lg:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
              Entrain Growth Lab helps businesses build sustainable, organic growth — through strategies tailored to your business, consistent execution, and continuous improvement over time.
            </p>
          </Reveal>

          {/* Action Buttons */}
          <Reveal direction="up" delay={0.35}>
            <div className="flex flex-col sm:flex-row sm:items-center text-center mx-auto  justify-center gap-4 pt-2">
              <Button
                variant="white"
                size="lg"
                showArrow={true}
                onClick={onOpenConsultation}
              >
                Book a Free Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                to="/services"
              >
                Explore Our Services
              </Button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
