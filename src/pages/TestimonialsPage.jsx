import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { ShieldCheck } from 'lucide-react';

export default function TestimonialsPage({ onOpenConsultation }) {
  return (
    <main className="pt-32 pb-0 bg-[#2596BE] text-white">
      
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-[#2596BE] border-b border-white/15 bg-grid-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="VERIFIED CLIENT FEEDBACK" variant="blue" className="mb-4" />

          <Reveal direction="up" delay={0.15}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
              Built with our <br />
              <span className="text-[#4355A5] bg-white px-3 py-0.5 rounded-2xl shadow-md inline-block">first growth partners.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.25} className="mt-6">
            <p className="text-white/90 text-lg sm:text-xl font-light max-w-2xl">
              Real client stories will appear here as we build them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 sm:py-28 bg-[#F6FAFC] text-[#101827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Testimonials />

          {/* Verification Standards Callout */}
          <Reveal direction="up" delay={0.3} className="max-w-3xl mx-auto mt-16">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#101827] text-white border border-[#4355A5]/40 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 text-[#2596BE]">
                <ShieldCheck className="w-6 h-6" />
                <h4 className="font-display text-xl font-bold text-white">
                  Our Verification Commitment
                </h4>
              </div>

              <p className="text-[#9AA8B5] text-sm sm:text-base leading-relaxed font-light">
                Every testimonial and metric published by Entrain Growth Lab will represent verified organic growth performance, real business outcomes, and genuine feedback from active client leadership.
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#9AA8B5]">
                  // ENTRAIN GROWTH LAB COHORT 2026
                </span>
                <Button variant="primary" size="sm" onClick={onOpenConsultation} showArrow={true}>
                  Become a Growth Partner
                </Button>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* CTA */}
      <CTA onOpenConsultation={onOpenConsultation} />

    </main>
  );
}
