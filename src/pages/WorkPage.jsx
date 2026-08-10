import React, { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import CTA from '../sections/CTA';
import Button from '../components/Button';
import { Lock, ArrowUpRight, FolderGit2 } from 'lucide-react';

export default function WorkPage({ onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'SEO & Organic', 'Paid Ads', 'Web Design', 'Branding'];

  const caseStudies = [
    {
      id: 1,
      client: '[CLIENT NAME]',
      industry: 'B2B SaaS',
      services: 'SEO & Content Strategy',
      shortResult: 'Building topical authority & organic pipeline',
      category: 'SEO & Organic',
      status: 'Case study coming soon',
    },
    {
      id: 2,
      client: '[CLIENT NAME]',
      industry: 'E-Commerce',
      services: 'Paid Advertising (Meta & Google)',
      shortResult: 'Optimizing acquisition funnel & ad ROAS',
      category: 'Paid Ads',
      status: 'Case study coming soon',
    },
    {
      id: 3,
      client: '[CLIENT NAME]',
      industry: 'Fintech / Tech',
      services: 'Web Design & Conversion UI',
      shortResult: 'Designing responsive high-converting platform',
      category: 'Web Design',
      status: 'Case study coming soon',
    },
    {
      id: 4,
      client: '[CLIENT NAME]',
      industry: 'Enterprise Software',
      services: 'Branding & Identity System',
      shortResult: 'Crafting premium brand identity guidelines',
      category: 'Branding',
      status: 'Case study coming soon',
    },
  ];

  const filteredStudies =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <main className="pt-32 pb-0 bg-[#2596BE] text-white">
      
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-[#2596BE] border-b border-white/15 bg-grid-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="SELECTED WORK & PORTFOLIO" variant="blue" className="mb-4" />

          <Reveal direction="up" delay={0.15}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
              Growth looks better <br />
              <span className="text-[#4355A5] bg-white px-3 py-0.5 rounded-2xl shadow-md inline-block">when you can measure it.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.25} className="mt-6">
            <p className="text-white/90 text-lg sm:text-xl font-light max-w-2xl">
              Case studies coming soon. We're documenting the work we're building with our growth partners.
            </p>
          </Reveal>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-8 mt-8 border-t border-white/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold rounded-full transition-all duration-200 uppercase ${
                  activeFilter === cat
                    ? 'bg-white text-[#4355A5] shadow-md'
                    : 'bg-white/15 text-white border border-white/20 hover:bg-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 sm:py-28 bg-[#F6FAFC] text-[#101827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStudies.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.1} direction="up">
                <div className="group rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between h-full hover:border-[#4355A5] hover:shadow-xl transition-all duration-300">
                  
                  <div>
                    {/* Visual Card Header */}
                    <div className="w-full h-56 rounded-2xl bg-[#101827] border border-slate-200 p-6 text-white relative overflow-hidden flex flex-col justify-between mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#2596BE] bg-[#2596BE]/10 px-2.5 py-1 rounded-full uppercase border border-[#2596BE]/20">
                          {item.industry}
                        </span>
                        <Lock className="w-4 h-4 text-[#9AA8B5]" />
                      </div>

                      <div className="text-center py-6">
                        <FolderGit2 className="w-10 h-10 text-[#2596BE] mx-auto mb-2 opacity-80" />
                        <span className="font-display font-bold text-sm tracking-wider text-white uppercase block">
                          {item.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-[#9AA8B5] border-t border-white/10 pt-2">
                        <span>CLIENT: {item.client}</span>
                        <span>2026 COHORT</span>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold tracking-wider text-[#4355A5] uppercase block mb-2">
                      {item.services}
                    </span>

                    <h3 className="font-display text-2xl font-bold text-[#101827] mb-2 group-hover:text-[#4355A5] transition-colors">
                      {item.shortResult}
                    </h3>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#607080]">
                    <span>Status: Active Campaign</span>
                    <ArrowUpRight className="w-4 h-4 text-[#607080] group-hover:text-[#4355A5]" />
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
              <h4 className="font-display text-2xl font-bold text-[#101827]">
                Ready to be our next success story?
              </h4>
              <p className="text-[#607080] text-sm font-light">
                We partner with ambitious clients to engineer sustainable organic growth systems.
              </p>
              <Button variant="primary" onClick={onOpenConsultation} showArrow={true}>
                Book Your Strategy Call
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTA onOpenConsultation={onOpenConsultation} />

    </main>
  );
}
