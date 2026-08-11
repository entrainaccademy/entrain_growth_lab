import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/process';

function Pin({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 3a1 1 0 0 1 .117 1.993L16 5v4.764l1.894 3.789a1 1 0 0 1 .106.447v2a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 .106-.447L8 9.764V5H7a1 1 0 0 1 0-2h9Z" />
    </svg>
  );
}

const cardStyles = [
  { note: 'bg-orange-50 border-orange-100', accent: 'text-orange-500', rotate: 'lg:rotate-[8deg]' },
  { note: 'bg-blue-50 border-blue-100', accent: 'text-blue-600', rotate: 'lg:-rotate-[8deg]' },
  { note: 'bg-purple-50 border-purple-100', accent: 'text-purple-600', rotate: 'lg:rotate-[8deg]' },
  { note: 'bg-orange-50 border-orange-100', accent: 'text-orange-500', rotate: 'lg:-rotate-[8deg]' },
];

export default function Process() {
  return (
    <section className="py-10 md:py-20 bg-white text-[#101827] border-b border-[#101827]/10 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-8">
        <div className="relative">
          <svg className="absolute left-[7%] top-1/2 hidden lg:block w-[86%] h-12 -translate-y-1/2 pointer-events-none" viewBox="0 0 1000 48" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M 20 25 C 180 4, 280 44, 365 24 S 570 4, 660 25 S 840 45, 980 22"
              stroke="#C7CAD1"
              strokeWidth="2"
              strokeDasharray="8 7"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              animate={{ strokeDashoffset: -150 }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
            />
          </svg>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
            {processSteps.map((step, index) => {
              const style = cardStyles[index];
              return (
                <div key={step.number} className={`relative w-full max-w-[280px] mx-auto transition-transform duration-300 hover:z-30 hover:scale-105 ${style.rotate}`}>
                  <article className="bg-white p-2 rounded-[25px] shadow-[0px_10px_20px_0px_#D3D3D3] border border-neutral-100">
                    <Pin className={`w-8 h-8 ${style.accent} z-20 mb-6 mx-auto`} />
                    <div className={`rounded-[15px] border p-[15px] h-full flex flex-col relative overflow-hidden ${style.note}`}>
                      <span className={`block text-4xl mb-5 ${style.accent}`} style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}>
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-semibold text-neutral-800 leading-none mb-[10px]">{step.title}</h3>
                      <p className="text-neutral-500 text-sm leading-5 tracking-tight">{step.desc}</p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
