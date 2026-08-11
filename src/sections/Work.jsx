import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { Lock, ArrowUpRight, FolderGit2 } from 'lucide-react';

export default function Work({ onOpenConsultation }) {
  const caseStudies = [
    {
      id: 1,
      category: 'SEO & Organic Growth Strategy',
      tag: 'PORTFOLIO 01',
      title: 'B2B SaaS Organic Traffic Expansion',
      subtitle: 'Building a sustainable keyword topology and technical SEO architecture.',
    },
    {
      id: 2,
      category: 'Paid Acquisition & Meta Ads',
      tag: 'PORTFOLIO 02',
      title: 'E-Commerce Paid Media Acquisition Funnel',
      subtitle: 'Structuring high-converting funnel creative and precision audience targeting.',
    },
    {
      id: 3,
      category: 'Web Design & Conversion UI',
      tag: 'PORTFOLIO 03',
      title: 'High-Ticket Brand Conversion Engine',
      subtitle: 'Designing responsive web architecture built strictly for conversion performance.',
    },
  ];

  return (
    <section id="work-section" className="py-20 sm:py-28 bg-white text-[#101827] relative border-b border-[#101827]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionLabel label="SELECTED WORK" variant="light" className="mb-4" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal direction="up" delay={0.15}>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#101827] tracking-tight">
              Growth looks better <br />
              <span className="text-[#4355A5]">when you can measure it.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <p className="text-[#607080] text-base max-w-md font-light">
              We're building our first collection of growth stories. Real strategies. Real businesses. Real results.
            </p>
          </Reveal>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1} direction="up">
              <div className="group rounded-3xl bg-[#F3F1EE] border border-[#101827]/10 p-7 flex flex-col justify-between h-full hover:border-[#4355A5] hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="w-full h-48 rounded-2xl bg-[#101827] border border-slate-200 p-6 text-white relative overflow-hidden flex flex-col justify-between mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#2596BE] bg-[#2596BE]/10 px-2.5 py-1 rounded-full uppercase border border-[#2596BE]/20">
                        {item.tag}
                      </span>
                      <Lock className="w-4 h-4 text-[#9AA8B5]" />
                    </div>

                    <div className="text-center py-4">
                      <FolderGit2 className="w-8 h-8 text-[#2596BE] mx-auto mb-2 opacity-80" />
                      <span className="font-display font-bold text-xs tracking-wider text-white uppercase block">
                        Case Study Documenting
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-[#9AA8B5] border-t border-white/10 pt-2">
                      <span>ENTRAIN LABS</span>
                      <span>IN PROGRESS</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold tracking-wider text-[#4355A5] uppercase block mb-2">
                    {item.category}
                  </span>

                  <h3 className="font-display text-xl font-bold text-[#101827] mb-2 group-hover:text-[#4355A5] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#607080] text-sm leading-relaxed mb-6">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#607080]">
                  <span>Status: Active Campaign</span>
                  <ArrowUpRight className="w-4 h-4 text-[#607080] group-hover:text-[#4355A5]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Banner */}
        <Reveal direction="up" delay={0.4} className="mt-16 text-center">
          <div className="p-8 rounded-3xl bg-[#F3F1EE] border border-[#101827]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="font-display text-xl font-bold text-[#101827]">
                Want to become our next featured case study?
              </h4>
              <p className="text-[#607080] text-sm mt-1">
                We partner with ambitious clients to engineer sustainable organic growth.
              </p>
            </div>
            <Button variant="primary" size="md" onClick={onOpenConsultation} showArrow={true}>
              Become a Growth Partner
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
