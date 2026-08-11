import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Entrainlabs({ onOpenConsultation }) {
    return (
        <main className="pt-24 sm:pt-32 pb-0 bg-[#E2E3E6] text-[#111111] min-h-screen">

            {/* Header Section */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* <Reveal direction="down" delay={0.1}>
          <SectionLabel label="CASE STUDY" variant="light" className="mb-4" />
        </Reveal> */}

                {/* <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal direction="up" delay={0.15}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/en.png" alt="enTrain Emblem" className="h-8 w-auto object-contain" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#005C55] uppercase bg-[#005C55]/10 px-3.5 py-1.5 rounded-full border border-[#005C55]/20">
                  ENTERPRISE BRAND IDENTITY & DIGITAL SYSTEM
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#101827] tracking-tight">
                enTrain Growth Labs
              </h1>
              <p className="text-neutral-700 text-lg sm:text-2xl font-light mt-4 max-w-3xl leading-relaxed">
                Built Different. Built to Do. Complete corporate visual identity, 3D brand collateral documentation, color topology, and digital web platform.
              </p>
            </div>
          </Reveal>
        </div> */}

                {/* 1. PRIMARY HERO BRAND BOOKLET SHOWCASE (entrainbook.png) */}
                {/* <Reveal direction="up" delay={0.25}>
          <div className="w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-slate-300/60 mb-20 relative group">
            <img
              src="/images/entrainbook.png"
              alt="enTrain 3D Corporate Brand Booklets"
              className="w-full h-auto object-contain block transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            />
          </div>
        </Reveal> */}

                {/* 2. BRAND COLOR SYSTEM & LOGO USAGE (colorpattern.png & entrain-three.png) */}
                <div className="mb-20 space-y-10">
                    <div className="max-w-3xl">
                        {/* <span className="text-xs font-mono text-[#005C55] uppercase tracking-widest block mb-2 font-bold">
              // BRAND ASSETS & LOGO GUIDELINES
            </span> */}
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#101827]">
                            Color Topology & Logo Usage Rules
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Color System Board */}
                        <Reveal direction="up" delay={0.1}>
                            <div className="w-full  overflow-hidden     group h-full flex flex-col justify-between p-3 sm:p-4">
                                <div className=" overflow-hidden mb-4">
                                    <img
                                        src="/images/colorpattern.png"
                                        alt="enTrain Corporate Color System"
                                        className="w-full h-auto object-contain block"
                                    />
                                </div>

                            </div>
                        </Reveal>

                        {/* Logo Usage Board */}
                        <Reveal direction="up" delay={0.2}>
                            <div className="w-full rounded-3xl overflow-hidden  border border-slate-300/60 group h-full flex flex-col justify-between p-3 sm:p-4">
                                <div className=" overflow-hidden mb-4">
                                    <img
                                        src="/images/entrain-three.png"
                                        alt="enTrain Correct Logo Usage"
                                        className="w-full h-auto object-contain block"
                                    />
                                </div>
                                <div className="px-3 pb-2">
                                    <h3 className="font-display font-bold text-xl text-[#101827]">Logo Safety & Contrast Panels</h3>
                                    <p className="text-xs text-neutral-500 font-mono mt-1">White Background • Light Grey Background • Dark Surface</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* 3. FULL BRAND IDENTITY SYSTEM BOARD (entrain.png) */}
                <div className="mb-20 space-y-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-mono text-[#005C55] uppercase tracking-widest block mb-2 font-bold">
          
                        </span>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#101827]">
                            Corporate Master Identity Specification
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Color System Board */}
                        <Reveal direction="up" delay={0.1}>
                            <div className="w-full  overflow-hidden     group h-full flex flex-col justify-between p-3 sm:p-4">
                                <div className=" overflow-hidden mb-4">
                                    <img
                                        src="/images/logo-font.png"
                                        alt="enTrain Corporate Color System"
                                        className="w-full h-auto object-contain block"
                                    />
                                </div>

                            </div>
                        </Reveal>

                        {/* Logo Usage Board */}
                        <Reveal direction="up" delay={0.2}>
                            <div className="w-full rounded-3xl overflow-hidden  border border-slate-300/60 group h-full flex flex-col justify-between p-3 sm:p-4">
                                <div className=" overflow-hidden mb-4">
                                    <img
                                        src="/images/logomain.png"
                                        alt="enTrain Correct Logo Usage"
                                        className="w-full h-auto object-contain block"
                                    />
                                </div>
                                <div className="px-3 pb-2">
                                    <h3 className="font-display font-bold text-xl text-[#101827]">Logo Safety & Contrast Panels</h3>
                                    <p className="text-xs text-neutral-500 font-mono mt-1">White Background • Light Grey Background • Dark Surface</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <Reveal direction="up" delay={0.2}>
                        <div className="w-full  overflow-hidden  group h-full flex flex-col justify-between p-3 sm:p-4">
                            <div className=" overflow-hidden mb-4">
                                <img
                                    src="/images/logo-card.png"
                                    alt="enTrain Correct Logo Usage"
                                    className="w-[25px] h-auto object-contain block"
                                />
                            </div>
                            <div className="px-3 pb-2">
                                <h3 className="font-display font-bold text-xl text-[#101827]">Logo Safety & Contrast Panels</h3>
                                <p className="text-xs text-neutral-500 font-mono mt-1">White Background • Light Grey Background • Dark Surface</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* 4. DIGITAL INTERFACE PREVIEWS (LAPTOP & WEBSITE) */}
                <div className="mb-20 space-y-8">
                    <div className="max-w-3xl">
                        <span className="text-xs font-mono text-[#005C55] uppercase tracking-widest block mb-2 font-bold">
              // DIGITAL INTERFACE ARCHITECTURE
                        </span>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#101827]">
                            Web Platform & Application Execution
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Reveal direction="up" delay={0.1}>
                            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-300/60 h-full flex flex-col justify-between group">
                                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-6">
                                    <img
                                        src="/images/labs-laptop-mockup.png"
                                        alt="enTrain Laptop Mockup"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl font-bold text-[#101827] mb-2">
                                        Enterprise Advisory Portal
                                    </h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed font-light">
                                        High-trust web dashboard built for automated consulting appointment triggers and client telemetry.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal direction="up" delay={0.2}>
                            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-300/60 h-full flex flex-col justify-between group">
                                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-6">
                                    <img
                                        src="/images/labswebsite.jpg"
                                        alt="enTrain Web System"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl font-bold text-[#101827] mb-2">
                                        Topical Authority Engine
                                    </h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed font-light">
                                        SEO-optimized web architecture engineered for organic traffic expansion and high conversion rates.
                                    </p>
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
                            <p className="text-neutral-600 text-base leading-relaxed font-light">
                                Creating a unified dashboard, high-trust visual collateral, and conversion engine for enterprise-level growth strategy consulting.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal direction="up" delay={0.2}>
                        <div className="p-8 rounded-3xl bg-white border border-slate-300/70 shadow-lg h-full">
                            <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> The Growth Solution
                            </h3>
                            <p className="text-neutral-600 text-base leading-relaxed font-light">
                                Designed a sleek agency brand identity, 3D stationery documentation, color guidelines, and a high-performance web platform with automated strategy consultation booking.
                            </p>
                        </div>
                    </Reveal>
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
