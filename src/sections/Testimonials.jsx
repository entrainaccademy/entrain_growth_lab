import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="py-20 sm:py-28 bg-[#F6FAFC] text-[#101827] relative border-b border-[#101827]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionLabel label="CLIENT STORIES" variant="light" className="mb-4" />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="up" delay={0.15}>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#101827] tracking-tight mb-4">
              Built with our <span className="text-[#4355A5]">first growth partners.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <p className="text-[#607080] text-base font-light">
              Real client stories will appear here as we build them. We do not generate artificial testimonials or fake praise.
            </p>
          </Reveal>
        </div>

        {/* Empty-State Container */}
        <Reveal direction="up" delay={0.3} className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm text-center relative overflow-hidden">
            <Quote className="w-12 h-12 text-[#4355A5]/30 mx-auto mb-6" />

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#101827] mb-4">
              "Honest Strategy. Measurable Organic Outcomes."
            </h3>

            <p className="text-[#607080] text-base leading-relaxed max-w-xl mx-auto mb-8 font-light">
              We let continuous execution, disciplined research, and verified client growth speak for itself.
            </p>

            <div className="pt-6 border-t border-slate-100 inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4355A5] text-white font-extrabold flex items-center justify-center text-sm">
                EG
              </div>
              <div className="text-left">
                <span className="font-bold text-sm text-[#101827] block">[CLIENT NAME PLACEHOLDER]</span>
                <span className="text-xs text-[#607080] font-mono">[DESIGNATION / COMPANY]</span>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
