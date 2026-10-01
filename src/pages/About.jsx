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
      <section className="about-hero relative min-h-[100svh] flex items-center sm:items-end py-24 sm:pt-36 sm:pb-20 bg-[#F1EFE7] border-b border-[#101827]/15 overflow-hidden">
        <motion.div
          style={{ y: ringY }}
          className="about-hero-rings absolute -right-36 top-16 sm:right-[-3rem] sm:top-24 w-[390px] h-[390px] sm:w-[650px] sm:h-[650px] rounded-full border border-[#4355A5]/20 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-[12%] rounded-full border border-[#4355A5]/25" />
          <div className="absolute inset-[27%] rounded-full border border-[#4355A5]/35" />
          <div className="absolute inset-[43%] rounded-full bg-[#4355A5] shadow-[0_0_80px_rgba(67,85,165,0.35)]" />
        </motion.div>

        <div className="relative z-10 max-w-[90rem] mx-auto w-full px-5 sm:px-8 lg:px-12 text-center sm:text-left">
          <Reveal direction="up" delay={0.1}>
            <h1 className="about-hero-title max-w-6xl mx-auto sm:mx-0 font-display text-[clamp(3rem,13vw,4.8rem)] sm:text-[clamp(3.4rem,8.4vw,8.8rem)] leading-[0.92] font-semibold tracking-[-0.055em]">
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
                Entrain Growth Partners was founded in 2026 on a simple belief: marketing should be measurable, honest, and built around real growth, not vanity metrics.
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
              alt="The Entrain Growth Partners strategy and digital marketing team"
              loading="lazy"
              decoding="async"
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

      {/* Leadership / Founder */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F3F1EE]">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-7">
              <Reveal delay={0.06}>
                {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4355A5]/10 text-[#4355A5] text-xs font-semibold uppercase tracking-[0.18em] mb-6">
                  Founder & Leadership
                </div> */}
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-[-0.05em] leading-[0.98]">
                  Built by operators,<br />
                  <span className="text-[#4355A5]">not just marketers.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#101827]/75 font-light leading-relaxed max-w-2xl">
                  Entrain Growth Partners was founded on a simple conviction: marketing should be engineered, measurable, and directly tied to revenue — not vanity metrics.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 text-base sm:text-lg text-[#101827]/60 leading-relaxed max-w-2xl">
                  As an operator-led growth partner, our leadership works directly on growth frameworks, unit economics analysis, and high-conviction marketing engines for each brand we partner with.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 sm:mt-10 pt-6 border-t border-[#101827]/15 flex items-end justify-between max-w-xl">
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#101827]">Noufal</h3>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#4355A5] mt-1">Founder / Growth Strategist</p>
                  </div>
                  {/* <span className="text-xs uppercase tracking-[0.16em] text-[#101827]/40">Est. 2026 / India</span> */}
                </div>
              </Reveal>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-6 xl:col-span-5">
              <Reveal delay={0.15}>
                <article className="group">
                  <div className="relative aspect-[768/884] w-full overflow-hidden rounded-[2rem] bg-[#D7D5CD] shadow-lg border border-[#101827]/10">
                    <img
                      src="/images/founder.png"
                      alt="Noufal, Founder at Entrain Growth Partners"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-bottom grayscale transition duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                    />
                    {/* <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-[#4355A5] text-white text-xs font-semibold tracking-widest uppercase shadow-md">
                      Founder
                    </div> */}
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
