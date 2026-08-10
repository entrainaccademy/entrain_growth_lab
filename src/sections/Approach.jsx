import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

export default function Approach() {
  const words = [
    { text: 'Understand.', highlight: false },
    { text: 'Strategize.', highlight: false },
    { text: 'Execute.', highlight: false },
    { text: 'Grow.', highlight: true },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <AnimatedSection direction="up" delay={0.1}>
          <span className="text-xs font-mono font-bold tracking-widest text-[#3B51A3] uppercase bg-[#3B51A3]/10 px-3.5 py-1.5 rounded-full mb-6 inline-block">
            The Entrain Formula
          </span>
        </AnimatedSection>

        <div className="space-y-2 sm:space-y-4 my-4">
          {words.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <h2
                className={`font-display text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none ${
                  item.highlight ? 'text-[#3B51A3]' : 'text-[#090D16]'
                }`}
              >
                {item.text}
              </h2>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
