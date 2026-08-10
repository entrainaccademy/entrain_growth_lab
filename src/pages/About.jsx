import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import Team from '../sections/Team';
import CTA from '../sections/CTA';
import { Compass, Target, LineChart, RefreshCw } from 'lucide-react';

export default function About({ onOpenConsultation }) {
  const values = [
    {
      number: '01',
      title: 'Understand before we act',
      desc: 'We study each client\'s business, unit economics, and competitive landscape before recommending any strategy.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Organic over shortcuts',
      desc: 'We focus on sustainable growth architectures, avoiding short-term hacks that burn budgets.',
      icon: Target,
    },
    {
      number: '03',
      title: 'Consistency compounds',
      desc: 'Disciplined, steady execution compounds over 90 to 180 days into market authority and revenue momentum.',
      icon: LineChart,
    },
    {
      number: '04',
      title: 'Always improving',
      desc: 'We measure real attribution metrics, learn from performance data, and continuously refine our approach.',
      icon: RefreshCw,
    },
  ];

  return (
    <main className="pt-32 pb-0 bg-[#c0bca6] text-white">
      
      {/* Hero Banner */}
      <section className="py-16 sm:py-24  bg-[#c0bca6] border-b border-white/15 bg-grid-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="ABOUT ENTRAIN GROWTH LAB" variant="blue" className="mb-4" />

          <Reveal direction="up" delay={0.15}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
              We believe growth should be <span className="text-[#4355A5] bg-white px-3 py-0.5 rounded-2xl shadow-md inline-block">engineered, not guessed.</span>
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16 pt-12 border-t border-white/20">
            
            {/* Story */}
            <Reveal direction="up" delay={0.25}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white text-[#101827] shadow-xl border border-slate-200 h-full">
                <span className="text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase block mb-3">
                  // OUR STORY
                </span>
                <h3 className="font-display text-2xl font-bold text-[#101827] mb-4">
                  Founded on Business Impact
                </h3>
                <p className="text-[#607080] text-base sm:text-lg leading-relaxed font-light">
                  Entrain Growth Lab was founded in 2026 on a simple belief: marketing should be measurable, honest, and built around real business growth — not vanity metrics.
                </p>
                <p className="text-[#607080] text-sm leading-relaxed mt-4">
                  We created Entrain Growth Lab to provide an intelligent, research-backed alternative to generic marketing agencies. We focus on unit economics, technical precision, and organic market dominance.
                </p>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal direction="up" delay={0.35}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#101827] text-white border border-[#4355A5]/40 h-full relative overflow-hidden shadow-xl">
                <span className="text-xs font-mono font-bold tracking-widest text-[#2596BE] uppercase block mb-3">
                  // OUR MISSION
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Engineered Growth
                </h3>
                <p className="text-white text-xl leading-relaxed font-semibold">
                  To help businesses grow through sustainable strategies built on understanding, consistency, and continuous improvement.
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 text-xs font-mono text-[#9AA8B5]">
                  CORE PHILOSOPHY: "Growth Isn't Luck. It's Strategy."
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 bg-[#F6FAFC] text-[#101827] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionLabel label="OUR CORE VALUES" variant="light" className="mb-4" />

          <Reveal direction="up" delay={0.15} className="mb-16">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#101827] tracking-tight">
              Principles guiding <span className="text-[#4355A5]">every strategy.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <Reveal key={val.number} delay={idx * 0.1} direction="up">
                  <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#4355A5] hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xl font-bold text-[#4355A5]">
                          {val.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#EAF7FB] text-[#4355A5] group-hover:bg-[#4355A5] group-hover:text-white flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h4 className="font-display text-lg font-bold text-[#101827] mb-2 group-hover:text-[#4355A5] transition-colors">
                        {val.title}
                      </h4>

                      <p className="text-[#607080] text-sm leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Team Component */}
      <Team />

      {/* CTA */}
      <CTA onOpenConsultation={onOpenConsultation} />

    </main>
  );
}
