import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import CTA from '../sections/CTA';

const PAPER = '#F3F1EE';

export default function About({ onOpenConsultation }) {
  const { scrollYProgress } = useScroll();
  const ringY = useTransform(scrollYProgress, [0, 0.45], [0, 120]);

  return (
    <main className="overflow-hidden bg-[#F3F1EE] text-[#101827]">
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center sm:items-end py-24 sm:pt-36 sm:pb-20 bg-[#F1EFE7] border-b border-[#101827]/15 overflow-hidden">
        <motion.div
          style={{ y: ringY }}
          className="absolute -right-36 top-16 sm:right-[-3rem] sm:top-24 w-[390px] h-[390px] sm:w-[650px] sm:h-[650px] rounded-full border border-[#4355A5]/20 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-[12%] rounded-full border border-[#4355A5]/25" />
          <div className="absolute inset-[27%] rounded-full border border-[#4355A5]/35" />
          <div className="absolute inset-[43%] rounded-full bg-[#4355A5] shadow-[0_0_80px_rgba(67,85,165,0.35)]" />
        </motion.div>

        <div className="relative z-10 max-w-[90rem] mx-auto w-full px-5 sm:px-8 lg:px-12 text-center sm:text-left">
          <Reveal direction="up" delay={0.1}>
            <h1 className="max-w-6xl mx-auto sm:mx-0 font-display text-[clamp(3rem,13vw,4.8rem)] sm:text-[clamp(3.4rem,8.4vw,8.8rem)] leading-[0.92] font-semibold tracking-[-0.055em]">
              We believe growth should be <span className="text-[#4355A5]">engineered,</span> not guessed.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Our story */}
      <section className="pt-24 sm:pt-32 lg:pt-36 pb-0 bg-[#F3F1EE] border-b border-[#101827]/15">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal delay={0.05}>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-[6.2rem] font-semibold leading-[0.94] tracking-[-0.055em]">
                <span className="text-[#101827]">Founded on</span> <span className="text-[#667085]">Business Impact</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 text-xl sm:text-2xl leading-relaxed tracking-[-0.02em] text-[#101827]/70">
                Entrain Growth Lab was founded in 2026 on a simple belief: marketing should be measurable, honest, and built around real growth, not vanity metrics.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-[#101827]/55">
                We built it as business owners who know the difference between marketing that moves revenue and marketing that only looks good in a report.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-10 sm:mt-12 lg:mt-14 max-w-6xl mx-auto">
            <img
              src="/images/team2-cutout-cropped.png"
              alt="The Entrain Growth Lab team"
              className="block w-full h-auto object-contain object-bottom"
            />
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="relative bg-[#101827] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(to right, ${PAPER} 1px, transparent 1px), linear-gradient(to bottom, ${PAPER} 1px, transparent 1px)`, backgroundSize: '64px 64px' }} />
        <div className="absolute -right-32 -bottom-44 w-[460px] h-[460px] rounded-full border-[72px] border-[#4355A5]/20" />
        <div className="relative max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.045em] leading-none">Growth,<br /><span className="text-[#7E91F2]">built to last.</span></h2>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="text-xl sm:text-2xl leading-[1.4] tracking-[-0.02em] text-white/90">
                  To help businesses grow through sustainable strategies built on understanding, consistency, and continuous improvement, with organic content as the foundation, not a shortcut.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <blockquote className="mt-8 sm:mt-10 border-l-2 border-[#7E91F2] pl-6 sm:pl-8 font-display text-xl sm:text-2xl italic leading-snug text-white">
                  &ldquo;We&apos;re not marketers who studied business. We&apos;re business owners who mastered marketing.&rdquo;
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#F3F1EE]">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-14 sm:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
           <Reveal delay={0.08}>
              <h2 className="max-w-4xl font-display text-5xl sm:text-7xl font-semibold tracking-[-0.05em] leading-[0.98]">Built by operators,<br /><span className="text-[#4355A5]">not just marketers.</span></h2>
            </Reveal>
            <Reveal delay={0.14} className="text-sm uppercase tracking-[0.16em] text-[#101827]/45 lg:pb-2">Est. 2026 / India</Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Noufal', role: 'Founder', image: '/images/founder1.jpg', position: 'object-center' },
              { name: 'Fayiz', role: 'CEO', image: '/images/ceo.jpg', position: 'object-center' },
            ].map((leader, index) => (
              <Reveal key={leader.name} delay={index * 0.12}>
                <article className="group">
                  <div className="relative h-[460px] sm:h-[590px] overflow-hidden rounded-[2rem] bg-[#D7D5CD]">
                    <img src={leader.image} alt={`${leader.name}, ${leader.role} at Entrain Growth Lab`} className={`h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0 ${leader.position}`} />
                    <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#4355A5] text-white text-xs font-bold">0{index + 1}</div>
                  </div>
                  <div className="flex items-end justify-between pt-6 border-b border-[#101827]/20 pb-6">
                    <h3 className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.04em]">{leader.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4355A5]">{leader.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
