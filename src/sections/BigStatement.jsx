import React from 'react';
import Reveal from '../components/Reveal';
import HomeEnquiryForm from '../components/HomeEnquiryForm';
import { motion } from 'framer-motion';

export default function BigStatement() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F1F4FF] via-[#F8F9FE] to-white py-20 text-[#101827] sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DDE5FF]/50 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Oversized Statement */}
        <Reveal direction="up" delay={0.2}>
          <h2 className="mb-8 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-4xl md:whitespace-nowrap md:text-[clamp(1.25rem,2.6vw,2.6rem)]">
            Your next stage of growth starts <span className="text-[#4355A5]">with a strategy.</span>
          </h2>
        </Reveal>

        {/* Animated Line Accent */}
        <div className="max-w-md mx-auto my-8">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-[#7E91F2] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        <Reveal direction="up" delay={0.3}>
          <HomeEnquiryForm />
        </Reveal>

      </div>
    </section>
  );
}
