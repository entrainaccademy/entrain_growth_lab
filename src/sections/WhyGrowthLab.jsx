import React from 'react';
import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import { Sprout, Search, LineChart, RefreshCw, UserCheck } from 'lucide-react';

export default function WhyGrowthLab() {
  const points = [
    {
      number: '01',
      title: 'Organic-First Approach',
      text: 'We prioritize sustainable, long-term growth over short-term wins.',
      icon: Sprout,
    },
    {
      number: '02',
      title: 'We Study Before We Recommend',
      text: 'No cookie-cutter strategies; we understand your business first, then build a plan around it.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Consistency That Compounds',
      text: 'Steady, disciplined execution — because organic growth rewards consistency, not one-off bursts.',
      icon: LineChart,
    },
    {
      number: '04',
      title: 'Continuous Improvement',
      text: 'We track, learn, and refine over time so your results keep getting better.',
      icon: RefreshCw,
    },
    {
      number: '05',
      title: 'Hands-On, Personal Attention',
      text: 'Every client gets direct, dedicated focus — not passed around.',
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Why Growth Lab"
          title="Why Growth Lab?"
          description="We combine strategic discipline with creative marketing tactics to engineer predictable organic growth."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <AnimatedSection key={point.number} delay={index * 0.08} direction="up">
                <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#3B51A3] transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-bold text-[#3B51A3]">
                        {point.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-[#3B51A3] text-[#090D16] group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#090D16] mb-2 group-hover:text-[#3B51A3] transition-colors">
                      {point.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
