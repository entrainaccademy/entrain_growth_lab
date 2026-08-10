import React from 'react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function BigStatement({ onOpenConsultation }) {
  return (
    <section className="py-24 sm:py-36 bg-gradient-to-br from-[#2596BE] via-[#34448F] to-[#4355A5] text-white relative overflow-hidden">
      {/* Background Animated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <Reveal direction="up" delay={0.1}>
          <span className="text-xs font-mono font-bold tracking-widest text-white uppercase bg-white/15 px-4 py-1.5 rounded-full border border-white/20 mb-8 inline-block">
            // NEXT STAGE OF GROWTH
          </span>
        </Reveal>

        {/* Oversized Statement */}
        <Reveal direction="up" delay={0.2}>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-white mb-8">
            Your next stage <br />
            of growth starts <br />
            <span className="text-[#4355A5] bg-white px-4 py-1 rounded-3xl shadow-xl inline-block mt-2">with a strategy.</span>
          </h2>
        </Reveal>

        {/* Animated Line Accent */}
        <div className="max-w-md mx-auto my-8">
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        <Reveal direction="up" delay={0.3}>
          <div className="pt-4">
            <Button
              variant="white"
              size="lg"
              showArrow={true}
              onClick={onOpenConsultation}
            >
              Let's Talk
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
