import React, { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import { Sprout, Search, LineChart, RefreshCw, UserCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhyEntrain() {
  const [activeIndex, setActiveIndex] = useState(0);

  const principles = [
    {
      number: '01',
      title: 'Organic First',
      desc: 'Prioritize sustainable, long-term growth over short-term wins.',
      icon: Sprout,
      detail: 'Short-term hacks burn budgets. We build contextual content topologies and technical authority that compound naturally over time.',
    },
    {
      number: '02',
      title: 'Study Before We Recommend',
      desc: 'No cookie-cutter strategies. We understand your business first.',
      icon: Search,
      detail: 'We audit your economics, competitor positioning, and audience conversion leaks before presenting a custom growth strategy.',
    },
    {
      number: '03',
      title: 'Consistency Compounds',
      desc: 'Steady, disciplined execution creates momentum.',
      icon: LineChart,
      detail: 'Daily execution disciplined over 90 to 180 days turns small audience gains into market authority and revenue momentum.',
    },
    {
      number: '04',
      title: 'Continuous Improvement',
      desc: 'Track, learn, refine, repeat.',
      icon: RefreshCw,
      detail: 'We measure attribution data relentlessly. Campaigns are iteratively optimized every week to maximize performance efficiency.',
    },
    {
      number: '05',
      title: 'Hands-On Attention',
      desc: 'Every client receives direct and dedicated focus.',
      icon: UserCheck,
      detail: 'You work directly with senior growth strategists and subject specialists — never passed around to junior account handlers.',
    },
  ];

  const activePrinciple = principles[activeIndex];
  const ActiveIcon = activePrinciple.icon;

  return (
    <section className="py-20 sm:py-28 bg-white text-[#101827] relative border-b border-[#101827]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionLabel label="WHY ENTRAIN" className="mb-4" />

        <Reveal direction="up" delay={0.15} className="mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#101827] tracking-tight">
            Strategy first. <span className="text-[#4355A5]">Execution always.</span>
          </h2>
        </Reveal>

        {/* Dual Column Layout: Left Interactive Items, Right Dynamic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Interactive List */}
          <div className="lg:col-span-7 space-y-4">
            {principles.map((item, index) => {
              const isSelected = activeIndex === index;

              return (
                <Reveal key={item.number} delay={index * 0.08} direction="up">
                  <div
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${isSelected
                        ? 'bg-[#F3F1EE] border-[#4355A5] shadow-lg shadow-[#4355A5]/10'
                        : 'bg-white border-[#101827]/15 hover:border-[#4355A5]/50'
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`font-mono text-xl font-bold transition-colors ${isSelected ? 'text-[#4355A5] scale-110' : 'text-[#101827]/40'
                          }`}
                      >
                        {item.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-bold text-[#101827] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[#101827]/55 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isSelected ? 'bg-[#4355A5] text-white' : 'bg-[#F3F1EE] text-[#101827]/45'}`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Dynamic Focus Card */}
          <div className="lg:col-span-5 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-8 rounded-3xl bg-[#101827] border border-[#4355A5]/50 text-white relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <span className="font-mono text-3xl font-extrabold text-[#7E91F2]">
                    {activePrinciple.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#4355A5] text-white flex items-center justify-center">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                </div>

                <span className="text-xs font-mono font-bold tracking-widest text-[#7E91F2] uppercase block mb-2">
                  // CORE PRINCIPLE {activePrinciple.number}
                </span>

                <h3 className="font-display text-2xl font-extrabold text-white mb-4">
                  {activePrinciple.title}
                </h3>

                <p className="text-[#F5F5F0] text-base leading-relaxed mb-6 font-medium">
                  "{activePrinciple.desc}"
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-white/65 leading-relaxed">
                  {activePrinciple.detail}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
