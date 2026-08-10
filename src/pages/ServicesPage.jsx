import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import Process from '../sections/Process';
import CTA from '../sections/CTA';
import Button from '../components/Button';
import { services } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

export default function ServicesPage({ onOpenConsultation }) {
  return (
    <main className="pt-32 pb-0 bg-[#2596BE] text-white">
      
      {/* Hero Banner */}
      <section className="py-16 sm:py-24 bg-[#2596BE] border-b border-white/15 bg-grid-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="GROWTH SERVICES" variant="blue" className="mb-4" />

          <Reveal direction="up" delay={0.15}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
              Growth services <br />
              <span className="text-[#4355A5] bg-white px-3 py-0.5 rounded-2xl shadow-md inline-block">built around your business.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.25} className="mt-6">
            <p className="text-white/90 text-lg sm:text-xl font-light max-w-2xl">
              We don't believe in one-size-fits-all packages. We study your business first, then recommend the services that actually fit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-20 sm:py-28 bg-[#F6FAFC] text-[#101827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <Reveal key={service.id} delay={0.1} direction="up">
                <div
                  id={service.id}
                  className={`p-8 sm:p-12 rounded-3xl border transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg ${
                    isEven
                      ? 'bg-white border-slate-200'
                      : 'bg-[#101827] text-white border-[#4355A5]/40'
                  }`}
                >
                  {/* Left Info Column */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold tracking-widest text-[#4355A5] bg-[#4355A5]/10 px-3 py-1 rounded-full border border-[#4355A5]/20">
                        SERVICE {service.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-white flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className={`font-display text-3xl font-extrabold ${isEven ? 'text-[#101827]' : 'text-white'}`}>
                      {service.title}
                    </h3>

                    <p className="text-[#2596BE] font-mono text-sm font-semibold">
                      {service.tagline}
                    </p>

                    <p className={`text-base leading-relaxed font-light ${isEven ? 'text-[#607080]' : 'text-[#9AA8B5]'}`}>
                      {service.description}
                    </p>

                    {/* Why It Matters */}
                    <div className={`p-5 rounded-2xl border ${isEven ? 'bg-[#F6FAFC] border-slate-200' : 'bg-white/5 border-white/10'}`}>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase block mb-1">
                        // WHY IT MATTERS
                      </span>
                      <p className={`text-xs leading-relaxed ${isEven ? 'text-[#607080]' : 'text-[#9AA8B5]'}`}>
                        {service.whyItMatters}
                      </p>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      onClick={onOpenConsultation}
                      showArrow={true}
                    >
                      Inquire About {service.title}
                    </Button>
                  </div>

                  {/* Right Deliverables Column */}
                  <div className={`lg:col-span-6 p-6 sm:p-8 rounded-2xl border ${isEven ? 'bg-[#F6FAFC] border-slate-200' : 'bg-[#0A0A0A] border-white/10'}`}>
                    <h4 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-[#4355A5] mb-4">
                      What We Deliver
                    </h4>
                    <div className="space-y-3">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#4355A5] flex-shrink-0 mt-1" />
                          <span className={`text-sm font-medium ${isEven ? 'text-[#101827]' : 'text-[#F5F5F0]'}`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Process Component */}
      <Process />

      {/* CTA */}
      <CTA onOpenConsultation={onOpenConsultation} />

    </main>
  );
}
