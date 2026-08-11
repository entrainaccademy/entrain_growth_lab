import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Buckeez({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#E2E3E6] text-[#111111] min-h-screen">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionLabel label="CASE STUDY" variant="light" className="mb-4" />
        
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase bg-[#4355A5]/10 px-3.5 py-1.5 rounded-full border border-[#4355A5]/20 inline-block mb-3">
            FOOD & BEVERAGE FRANCHISE
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#101827] tracking-tight">
            Buckeez Digital
          </h1>
          <p className="text-neutral-700 text-lg sm:text-2xl font-light mt-4 max-w-3xl">
            High-conversion food & beverage web app featuring interactive digital menus, online store location finder, and instant order triggers.
          </p>
        </div>

        {/* Hero Visual Mockup */}
        <div className="w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900/5 mb-16">
          <img
            src="/images/buckeezmockup.png"
            alt="Buckeez Digital Mockup"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md">
            <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-600" /> The Challenge
            </h3>
            <p className="text-neutral-600 text-base leading-relaxed">
              Capturing mobile-first restaurant diners and increasing direct online franchise order volume while maintaining brand consistency across multiple locations.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md">
            <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> The Growth Solution
            </h3>
            <p className="text-neutral-600 text-base leading-relaxed">
              Designed an appetite-stimulating, fast-loading mobile interface with single-tap checkout, instant location detection, and localized marketing funnels.
            </p>
          </div>
        </div>

        {/* Action CTA */}
        <div className="text-center pt-8">
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Book Strategy Call
          </Button>
        </div>
      </section>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
