import React from 'react';
import Reveal from '../components/Reveal';
import Process from '../sections/Process';
import CTA from '../sections/CTA';
import WhatWeOffer from '../sections/WhatWeOffer';

export default function ServicesPage({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#F3F1EE] text-[#101827] min-h-screen font-sans relative overflow-hidden">
      {/* Hero Header */}
      <section className="pt-14 sm:pt-24 pb-10 sm:pb-16 bg-[#F3F1EE] relative z-10 border-b border-neutral-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#101827] tracking-tight leading-none max-w-5xl">
              Growth services built for modern brands.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Editorial Overview Section */}
      <WhatWeOffer bg="bg-[#F3F1EE]" />

      {/* Process Component */}
      <Process />

      {/* CTA Section */}
      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
