import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Buckeez({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 pb-0  bg-[#F3F1EE] text-[#111111] min-h-screen">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#101827] tracking-tight">
            Buckeez Digital
          </h1>
          <p className="text-neutral-700 text-lg sm:text-2xl font-light mt-4 max-w-3xl">
            High-conversion food & beverage web app featuring interactive digital menus, online store location finder, and instant order triggers.
          </p>
        </div>

        {/* Hero & Interface Visual Showcase */}
        <div className="space-y-2 mb-6">
          <Reveal direction="up" delay={0.1}>
            <div className="w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden">
              <img
                src="/images/buckeezmockup.png"
                alt="Buckeez Main Digital Mockup"
                className="w-full h-auto object-contain block"
              />
            </div>
          </Reveal>



          {/* Brand Identity & Typography Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="up" delay={0.25}>
              <div className="w-full  p-4 sm:p-6  border-slate-300/60 overflow-hidden group transition-all duration-500 hover:shadow-2xl">
                <div className="w-full rounded-2xl overflow-hidden  mb-4">
                  <img
                    src="/images/buckeez-brand-names.png"
                    alt="Buckeez Brand Identity Guidelines"
                    className="w-full h-auto object-contain block transform group-hover:scale-[1.015] transition-transform duration-700"
                  />
                </div>

              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="w-full  rounded-3xl p-4 sm:p-6   overflow-hidden group transition-all duration-500 hover:shadow-2xl">
                <div className="w-full  overflow-hidden  mb-4">
                  <img
                    src="/images/buckeez-fonts.png"
                    alt="Buckeez Typography & Font System"
                    className="w-full h-auto object-contain block transform group-hover:scale-[1.015] transition-transform duration-700"
                  />
                </div>

              </div>
            </Reveal>


          </div>
          <Reveal direction="up" delay={0.25}>
            <div className="w-full  rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/images/buckeez-color-palette.png"
                alt="Buckeez Corporate Color Palette"
                className="w-full h-auto object-contain block transform hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Tablet Mockup Card - 7 Columns */}
            {/* <Reveal direction="up" delay={0.15} className="lg:col-span-7 flex">
              <div className="w-full  rounded-3xl p-4 sm:p-6    overflow-hidden group transition-all duration-500  flex flex-col justify-between">
                <div className="w-full rounded-2xl overflow-hidden  mb-4 flex items-center justify-center p-2">
                  <img
                    src="/images/buckeez_tablet_mockup.png"
                    alt="Buckeez Tablet Ordering Interface"
                    className="w-full h-auto object-contain block transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>

              </div>
            </Reveal> */}

            {/* Instagram Profile Card - 5 Columns */}
            <Reveal direction="up" delay={0.2} className="lg:col-span-5 flex">
              <div className="w-full  rounded-2xl p-4 sm:p-6      overflow-hidden group transition-all -px-2 duration-500  flex flex-col justify-between">
                <div className="w-78 rounded-2xl overflow-hidden pt-2  mb-4 bg-white  flex items-center justify-center p-2">
                  <img
                    src="/images/buckeez-instagram.png"
                    alt="Buckeez Social Media & Ad Campaign"
                    className="w-full h-auto max-h-[500px]  object-contain block mx-auto transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="px-2 pt-1">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#4355A5] uppercase">
                    {/* SOCIAL MEDIA & VIRAL REACH */}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#101827] mt-0.5">
                    {/* Buckeez Community & Growth */}
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>



        </div>


        {/* Action CTA */}
        <div className="text-center pt-8 pb-12">
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Book Strategy Call
          </Button>
        </div>
      </section>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
