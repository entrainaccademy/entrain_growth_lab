import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import Team from '../sections/Team';
import CTA from '../sections/CTA';

const PAPER = '#F3F1EE';

export default function About({ onOpenConsultation }) {
  const { scrollYProgress } = useScroll();
  const ringY = useTransform(scrollYProgress, [0, 0.45], [0, 120]);
  const imageY = useTransform(scrollYProgress, [0.08, 0.55], [30, -30]);

  return (
    <main className="overflow-hidden bg-[#F3F1EE] text-[#101827]">
      {/* Hero */}
      <section className="relative min-h-[88svh] flex items-end pt-36 pb-14 sm:pb-20 bg-[#F3F1EE] border-b border-[#101827]/15">
        <motion.div style={{ y: ringY }} className="absolute -right-36 top-16 sm:right-[-3rem] sm:top-24 w-[390px] h-[390px] sm:w-[650px] sm:h-[650px] rounded-full border border-[#4355A5]/20 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-[12%] rounded-full border border-[#4355A5]/25" />
          <div className="absolute inset-[27%] rounded-full border border-[#4355A5]/35" />
          <div className="absolute inset-[43%] rounded-full bg-[#4355A5] shadow-[0_0_80px_rgba(67,85,165,0.35)]" />
        </motion.div>

        <div className="relative z-10 max-w-[90rem] mx-auto w-full px-5 sm:px-8 lg:px-12">
          <Reveal direction="up" delay={0.1}>
            <h1 className="max-w-6xl font-display text-[clamp(3.4rem,8.4vw,8.8rem)] leading-[0.92] font-semibold tracking-[-0.055em]">
              We believe growth should be <span className="text-[#4355A5]">engineered,</span> not guessed.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Our story */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#F3F1EE]">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.98] tracking-[-0.045em]">
                Founded on<br /><span className="text-[#4355A5]">Business Impact</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <p className="text-2xl sm:text-3xl lg:text-[2.35rem] leading-[1.22] tracking-[-0.025em] font-medium">
                Entrain Growth Lab was founded in 2026 on a simple belief: marketing should be measurable, honest, and built around real business growth, not vanity metrics.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-3xl text-base sm:text-lg leading-8 text-[#101827]/65">
                That belief didn&apos;t come from a marketing textbook. It came from running businesses ourselves. Before Entrain, our founders built and scaled multiple companies of their own, making the payroll and profit decisions that most agencies only advise on from the outside. We&apos;ve felt the difference between marketing that actually moves revenue and marketing that just looks good in a report.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-12">
              <div className="relative overflow-hidden rounded-[2rem] h-[420px] sm:h-[600px] bg-[#D9D7CF]">
                <motion.img style={{ y: imageY, scale: 1.08 }} src="/images/teamphoto.jpg" alt="The Entrain Growth Lab team" className="h-full w-full object-cover object-center grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/35 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5 sm:left-8 sm:bottom-8 rounded-full bg-[#F3F1EE] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em]">
                  Operators at heart
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative bg-[#101827] text-white py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(to right, ${PAPER} 1px, transparent 1px), linear-gradient(to bottom, ${PAPER} 1px, transparent 1px)`, backgroundSize: '64px 64px' }} />
        <div className="absolute -right-40 -bottom-56 w-[620px] h-[620px] rounded-full border-[100px] border-[#4355A5]/20" />
        <div className="relative max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-5xl sm:text-7xl font-semibold tracking-[-0.05em] leading-none">Engineered<br /><span className="text-[#7E91F2]">Growth</span></h2>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="text-2xl sm:text-4xl leading-[1.25] tracking-[-0.025em] text-white/90">
                  To help businesses grow through sustainable strategies built on understanding, consistency, and continuous improvement, with organic content as the foundation, not a shortcut.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <blockquote className="mt-16 border-l-2 border-[#7E91F2] pl-7 sm:pl-10 font-display text-2xl sm:text-3xl italic leading-snug text-white">
                  “We&apos;re not marketers who studied business. We&apos;re business owners who mastered marketing.”
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

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { name: 'Noufal', role: 'Founder', image: '/images/founder1.jpg', position: 'object-center' },
              { name: 'Fayiz', role: 'CEO', image: '/images/ceo.jpg', position: 'object-center' },
            ].map((leader, index) => (
              <Reveal key={leader.name} delay={index * 0.12}>
                <article className="group">
                  <div className="relative h-[520px] sm:h-[680px] overflow-hidden rounded-[2rem] bg-[#D7D5CD]">
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

      {/* Existing sections, intentionally unchanged */}
      <Team />
      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
