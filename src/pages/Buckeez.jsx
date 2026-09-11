import React from 'react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import WhatWeOffer from '../sections/WhatWeOffer';
import { Globe, ExternalLink } from 'lucide-react';

export default function Buckeez({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#F3F1EE] text-[#101827] min-h-screen font-sans">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#101827] tracking-tight">
            Buckeez Digital
          </h1>
          <p className="font-sans text-neutral-700 text-lg sm:text-2xl font-light mt-4 max-w-3xl leading-relaxed">
            High-conversion food & beverage web app featuring interactive digital menus, online store location finder, and instant order triggers.
          </p>
          <div className="mt-6">
            <a
              href="https://www.buckeezfried.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300/80 text-sm sm:text-base font-semibold text-[#4355A5] hover:bg-[#4355A5] hover:text-white transition-all shadow-sm group"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#4355A5] group-hover:text-white transition-colors" />
              <span>www.buckeezfried.com</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-[#4355A5] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Hero & Interface Visual Showcase */}
        <div className="space-y-2 mb-6">
          <Reveal direction="up" delay={0.1}>
            <div className="w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden">
              <img
                src="/images/buckeezmockup.png"
                alt="Buckeez Main Digital Mockup"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain block"
              />
            </div>
          </Reveal>

          {/* Brand Identity & Typography Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="up" delay={0.25}>
              <div className="w-full p-4 sm:p-6 border-slate-300/60 overflow-hidden group transition-all duration-500 hover:shadow-2xl">
                <div className="w-full rounded-2xl overflow-hidden mb-4">
                  <img
                    src="/images/buckeez-brand-names.png"
                    alt="Buckeez Brand Identity Guidelines"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block transform group-hover:scale-[1.015] transition-transform duration-700"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="w-full rounded-3xl p-4 sm:p-6 overflow-hidden group transition-all duration-500 hover:shadow-2xl">
                <div className="w-full overflow-hidden mb-4">
                  <img
                    src="/images/buckeez-fonts.png"
                    alt="Buckeez Typography & Font System"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block transform group-hover:scale-[1.015] transition-transform duration-700"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.25}>
            <div className="w-full rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/images/buckeez-color-palette.png"
                alt="Buckeez Corporate Color Palette"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain block transform hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Instagram Profile Card */}
            <Reveal direction="up" delay={0.2} className="lg:col-span-12 flex">
              <div className="w-full rounded-2xl p-4 sm:p-6 overflow-hidden group transition-all duration-500 flex flex-col justify-between">
                <div className="w-full rounded-2xl overflow-hidden pt-2 mb-4 bg-white flex items-center justify-center p-2">
                  <img
                    src="/images/buckeez-instagram.png"
                    alt="Buckeez Social Media & Ad Campaign"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto max-h-[500px] object-contain block mx-auto transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Editorial WHAT WE OFFER Section Model */}
        <WhatWeOffer bg="bg-[#F3F1EE]" />

        {/* Action CTA */}
        <div className="text-center pt-8 pb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="https://www.buckeezfried.com"
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
