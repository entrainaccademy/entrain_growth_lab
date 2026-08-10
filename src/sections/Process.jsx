import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import { processSteps } from '../data/process';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section className="py-20 sm:py-28 bg-[#141414] text-[#F5F5F0] relative border-t border-[#282828] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionLabel label="OUR PROCESS" className="mb-4" />

        <Reveal direction="up" delay={0.15} className="mb-16">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Study. Recommend. <br />
            <span className="text-[#C7FF3D]">Execute. Improve.</span>
          </h2>
        </Reveal>

        {/* Timeline Progress Bar Line (Desktop) */}
        <div className="hidden lg:block relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#282828] -translate-y-1/2" />
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 bg-[#C7FF3D] -translate-y-1/2"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {/* Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 0.1} direction="up">
                <div className="group rounded-2xl bg-[#0A0A0A] border border-[#282828] p-7 flex flex-col justify-between h-full hover:border-[#C7FF3D] transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-extrabold text-[#C7FF3D]">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#282828] text-white group-hover:bg-[#C7FF3D] group-hover:text-[#0A0A0A] flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#C7FF3D] uppercase block mb-2">
                      // {step.tag}
                    </span>

                    <h3 className="font-display text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[#9A9A94] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#282828] flex items-center justify-between text-xs font-mono text-[#9A9A94]">
                    <span>STEP {step.number} OF 04</span>
                    <span className="w-2 h-2 rounded-full bg-[#C7FF3D]" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
