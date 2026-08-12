import React from 'react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';

export default function CTA({ onOpenConsultation }) {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#2596BE] via-[#4355A5] to-[#34448F] text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <Reveal direction="up" delay={0.15}>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Ready to <span className="text-[#4355A5] bg-white px-4 py-0.5 rounded-2xl shadow-lg inline-block">Grow?</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Entrain Growth Lab helps businesses build sustainable, organic growth through strategy, consistent execution, and continuous improvement.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              to="/contact"
            >
              Let's Talk
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
