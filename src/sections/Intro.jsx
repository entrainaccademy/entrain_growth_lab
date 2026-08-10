import React from 'react';
import Reveal from '../components/Reveal';
import SectionLabel from '../components/SectionLabel';

export default function Intro() {
  return (
    <section className="py-20 sm:py-28 bg-[#141414] text-[#F5F5F0] border-y border-[#282828] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6 space-y-4">
            <SectionLabel label="PHILOSOPHY" />
            <Reveal direction="up" delay={0.15}>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                We don't chase trends. <br />
                <span className="text-[#C7FF3D]">We build growth systems.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <Reveal direction="up" delay={0.25}>
              <p className="text-lg sm:text-xl text-[#9A9A94] font-light leading-relaxed">
                We study your business before we recommend anything. Then we build a focused strategy, execute consistently, measure what matters, and continuously improve.
              </p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
