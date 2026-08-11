import React from 'react';
import Reveal from '../components/Reveal';
import SectionLabel from '../components/SectionLabel';

export default function Intro() {
  return (
    <section className="py-20 sm:py-28 bg-[#F3F1EE] text-[#101827] border-b border-[#101827]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <SectionLabel label="PHILOSOPHY" />
            <Reveal direction="up" delay={0.15}>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#101827] tracking-tight leading-tight">
                We don't chase trends. <br />
                <span className="text-[#4355A5]">We build growth systems.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <Reveal direction="up" delay={0.25}>
              <p className="text-lg sm:text-xl text-[#101827]/60 font-light leading-relaxed">
                We study your business before we recommend anything. Then we build a focused strategy, execute consistently, measure what matters, and continuously improve.
              </p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
