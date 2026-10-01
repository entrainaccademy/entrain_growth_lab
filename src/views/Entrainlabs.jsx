import React from 'react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { Target, CheckCircle2, Globe, ExternalLink } from 'lucide-react';

export default function Entrainlabs({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#F3F1EE] text-[#101827] min-h-screen font-sans">
      {/* Header Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#101827] tracking-tight">
            Entrain Labs
          </h1>
          <p className="font-sans text-neutral-700 text-lg sm:text-2xl font-light mt-4 max-w-3xl leading-relaxed">
            Digital marketing agency website with custom branding, logo design, color system, and a modern conversion-focused user experience.
          </p>
          <div className="mt-6">
            <a
              href="https://theentrainlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300/80 text-sm sm:text-base font-semibold text-[#4355A5] hover:bg-[#4355A5] hover:text-white transition-all shadow-sm group"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#4355A5] group-hover:text-white transition-colors" />
              <span>theentrainlabs.com</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-[#4355A5] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* 2. BRAND COLOR SYSTEM & LOGO USAGE (colorpattern.png & entrain-three.png) */}
        <div className="mb-20 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Color System Board */}
            <Reveal direction="up" delay={0.1}>
              <div className="w-full overflow-hidden group h-full flex flex-col justify-between p-3 sm:p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    src="/images/colorpattern.png"
                    alt="enTrain Corporate Color System and Palette"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </Reveal>

            {/* Logo Usage Board */}
            <Reveal direction="up" delay={0.2}>
              <div className="w-full rounded-3xl overflow-hidden border border-slate-300/60 group h-full flex flex-col justify-between p-3 sm:p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    src="/images/entrain-three.png"
                    alt="enTrain Logo Variations and Icon System"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. FULL BRAND IDENTITY SYSTEM BOARD */}
        <div className="mb-20 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="w-full overflow-hidden group h-full flex flex-col justify-between p-3 sm:p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    src="/images/logo-font.png"
                    alt="enTrain Corporate Typography and Typeface Guidelines"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="w-full rounded-3xl overflow-hidden border border-slate-300/60 group h-full flex flex-col justify-between p-3 sm:p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    src="/images/logomain.png"
                    alt="enTrain Primary Brandmark and Signature Logo"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="w-full overflow-hidden group h-full flex flex-col justify-between p-3 sm:p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    src="/images/logo-card-2.png"
                    alt="enTrain Executive Business Cards Layout"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="w-full rounded-3xl overflow-hidden border border-slate-300/60 group h-full flex flex-col justify-between p-3 sm:p-4">
                <div className="overflow-hidden mb-4">
                  <img
                    src="/images/logo-card-1.png"
                    alt="enTrain Collateral and Stationary Print System"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 4. DIGITAL INTERFACE PREVIEWS (LAPTOP & WEBSITE) */}
        <div className="mb-20 space-y-8">
          <div className="grid grid-cols-1 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between group">
                <div className="w-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/labs-laptop-mockup.png"
                    alt="enTrain Digital Platform Laptop Mockup"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Reveal direction="up" delay={0.1}>
            <div className="p-8 rounded-3xl bg-white border border-slate-300/70 shadow-lg h-full">
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-600" /> The Challenge
              </h3>
              <p className="font-sans text-neutral-600 text-base leading-relaxed font-light">
                Creating a unified dashboard, high-trust visual collateral, and conversion engine for enterprise-level growth strategy consulting.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="p-8 rounded-3xl bg-white border border-slate-300/70 shadow-lg h-full">
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> The Growth Solution
              </h3>
              <p className="font-sans text-neutral-600 text-base leading-relaxed font-light">
                Designed a sleek agency brand identity, 3D stationery documentation, color guidelines, and a high-performance web platform with automated strategy consultation booking.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Action CTA */}
        <div className="text-center pt-8 pb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="https://theentrainlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            showArrow={true}
          >
            Visit Live Website
          </Button>
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Book Strategy Call
          </Button>
        </div>
      </section>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
