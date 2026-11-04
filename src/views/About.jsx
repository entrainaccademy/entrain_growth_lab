import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from '../lib/router';
import { ArrowUpRight, Lightbulb, Repeat, Search, TrendingUp } from 'lucide-react';
import Reveal from '../components/Reveal';

const steps = [
  { title: 'Study and understand', icon: Search },
  { title: 'Strategic blueprint', icon: Lightbulb },
  { title: 'Disciplined execution', icon: Repeat },
  { title: 'Optimise and scale', icon: TrendingUp },
];

// Node positions along the wave (percent of the diagram box); 'low' nodes put their label above, 'high' nodes below.
const stepSlots = [
  { left: 12.5, top: 72, low: true },
  { left: 37.5, top: 28, low: false },
  { left: 62.5, top: 72, low: true },
  { left: 87.5, top: 28, low: false },
];

const hexClip = 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)';

function StepNode({ icon: Icon }) {
  return (
    <span className="block" style={{ filter: 'drop-shadow(0 10px 14px rgba(67,85,165,0.35))' }}>
      <span className="flex h-16 w-16 items-center justify-center bg-white text-[#4355A5]" style={{ clipPath: hexClip }}>
        <Icon className="h-6 w-6" />
      </span>
    </span>
  );
}

const storyNotes = [
  { label: 'The problem', text: 'We are business owners, and we were tired of marketing reports that looked impressive but did not move revenue.', style: 'bg-white border border-[#101827]/10 text-[#101827]', tilt: 'md:-rotate-2' },
  { label: 'The decision', text: 'So we built the agency we wanted to hire. One that studies your business first and recommends only what fits.', style: 'bg-[#4355A5] text-white', tilt: 'md:rotate-1 md:mt-8' },
  { label: 'The result', text: 'Reports on enquiries, leads and sales instead of vanity metrics, so you know what your marketing is doing.', style: 'bg-[#101827] text-white', tilt: 'md:rotate-2' },
];

function Eyebrow({ children }) {
  return <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#4355A5] mb-4">{children}</span>;
}

const inlineLink = 'font-semibold text-[#4355A5] underline underline-offset-4 hover:text-[#34448F]';

export default function About() {
  const { scrollYProgress } = useScroll();
  const ringY = useTransform(scrollYProgress, [0, 0.45], [0, 120]);

  return (
    <main className="overflow-hidden bg-[#F3F1EE] text-[#101827]">
      {/* Hero */}
      <section className="about-hero relative min-h-[100svh] flex items-center sm:items-end py-24 sm:pt-36 sm:pb-20 bg-[#F1EFE7] overflow-hidden">
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

      {/* Who we are */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <h2 className="w-fit mx-auto lg:mx-0 font-display">
              <span className="sr-only">Who we are</span>
              <span aria-hidden="true" className="flex flex-col">
                <span className="text-5xl sm:text-6xl font-extrabold uppercase tracking-[-0.03em] text-[#101827]">Who</span>
                <svg className="ml-[2.6rem] sm:ml-[3.4rem] my-1 w-8 h-12 text-[#101827]" viewBox="0 0 32 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 2 C 4 22, 12 34, 16 44" />
                  <path d="M8 38 L 16 45 L 22 35" />
                </svg>
                <span className="flex gap-2 sm:gap-3">
                  {['W', 'E'].map((letter) => (
                    <span
                      key={letter}
                      className="relative block h-[6.5rem] w-[6.5rem] sm:h-[8rem] sm:w-[8rem] rounded-[1.4rem] bg-gradient-to-b from-[#5F72C9] to-[#34448F] shadow-[0_14px_20px_-6px_rgba(16,24,39,0.45)]"
                    >
                      <span className="absolute inset-[0.7rem] sm:inset-[0.9rem] rounded-[1rem] bg-gradient-to-br from-[#7487D8] to-[#4355A5] shadow-[inset_0_2px_4px_rgba(255,255,255,0.35)] flex items-center justify-center text-3xl sm:text-4xl font-bold text-[#17214F]">
                        {letter}
                      </span>
                    </span>
                  ))}
                </span>
                <svg className="self-end mr-[2.6rem] sm:mr-[3.4rem] my-1 w-8 h-12 text-[#101827]" viewBox="0 0 32 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M28 2 C 28 22, 20 34, 16 44" />
                  <path d="M24 38 L 16 45 L 10 35" />
                </svg>
                <span className="self-end text-5xl sm:text-6xl font-extrabold uppercase tracking-[-0.03em] text-[#101827]">Are</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 space-y-6 text-base sm:text-lg leading-relaxed text-[#101827]/65 lg:border-l lg:border-[#101827]/15 lg:pl-14">
            <h3 className="font-display text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] text-[#101827]">A digital marketing agency <span className="text-[#4355A5]">built for Kerala businesses</span></h3>
            <p className="text-lg sm:text-xl text-[#101827]/80">
              Entrain Growth Partners is a digital marketing agency based in Malappuram, Kerala. Founded in 2026, we help businesses get found on Google, grow on social media, run paid ads that pay for themselves, and build websites that turn visitors into enquiries.
            </p>
            <p>
              We work with education institutes, food and beverage brands and manufacturers as well as growing local businesses. Our services include{' '}
              <Link to="/services/seo" className={inlineLink}>SEO</Link>,{' '}
              <Link to="/services/social-media-marketing" className={inlineLink}>social media marketing</Link>,{' '}
              <Link to="/services/performance-marketing" className={inlineLink}>Meta and Google Ads</Link>,{' '}
              <Link to="/services/branding-creative-design" className={inlineLink}>branding</Link>, content marketing and{' '}
              <Link to="/services/website-design-development" className={inlineLink}>website design</Link>, and we recommend only the mix that fits your stage and budget.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meet the founder */}
      <section id="founder" className="py-16 sm:py-24 scroll-mt-24">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
            <div className="lg:col-span-6 xl:col-span-7">
              <Reveal delay={0.06}>
                <h2 className="font-display text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-[-0.05em] leading-[0.98]">
                  Built by operators,<br />
                  <span className="text-[#4355A5]">not just marketers.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-6 space-y-4 text-lg text-[#101827]/70 leading-relaxed max-w-2xl">
                  <p>Noufal founded Entrain Growth Partners and leads strategy on every account.</p>
                  <p>A business owner first and a marketer second, he starts every plan with your numbers and tells you plainly when a service is not worth paying for yet.</p>
                </div>
                <div className="mt-10 pt-6 border-t border-[#101827]/15 max-w-xl">
                  <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.03em]">Noufal</h3>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#4355A5] mt-1">Founder and Growth Strategist</p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 xl:col-span-5">
              <Reveal delay={0.15}>
                <article className="group">
                  <div className="relative aspect-[768/884] w-full overflow-hidden rounded-[2rem] bg-[#D7D5CD] shadow-lg border border-[#101827]/10">
                    <img
                      src="/images/founder.png"
                      alt="Noufal, founder of Entrain Growth Partners, Malappuram"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-bottom grayscale transition duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                    />
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="pt-0 pb-14 sm:pb-24">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal>
            <h2 className="text-center font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-[-0.05em]">
              <span className="text-[#101827]">Why we started</span> <span className="text-[#4355A5]">Entrain</span>
            </h2>
          </Reveal>

          <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 md:grid-cols-3 md:items-start">
            {storyNotes.map((note, i) => (
              <motion.div
                key={note.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ rotate: 0, y: -6 }}
                className={`rounded-3xl p-6 sm:p-8 shadow-sm md:min-h-[15rem] ${note.style} ${note.tilt}`}
              >
                <span className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">{note.label}</span>
                <p className="mt-4 font-display text-xl sm:text-2xl font-semibold leading-snug tracking-[-0.02em]">{note.text}</p>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-8 sm:mt-12 max-w-3xl text-center font-display text-lg sm:text-3xl italic leading-snug tracking-[-0.02em] text-[#101827]">
              &ldquo;We&apos;re not marketers who studied business. <span className="text-[#4355A5]">We&apos;re business owners who mastered marketing.</span>&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* How we plan and measure growth */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-3xl">
            <Eyebrow>Our process</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-[-0.045em] leading-[1]">How we plan and measure growth</h2>
          </Reveal>
          {/* Desktop: wave diagram */}
          <ol className="relative mt-10 hidden h-[28rem] lg:block">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 300" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="process-wave" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#4355A5" stopOpacity="0.15" />
                  <stop offset="0.5" stopColor="#2596BE" />
                  <stop offset="1" stopColor="#4355A5" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M0 230 C 60 230, 65 216, 125 216 C 250 216, 250 84, 375 84 C 500 84, 500 216, 625 216 C 750 216, 750 84, 875 84 C 940 84, 950 70, 1000 70"
                stroke="url(#process-wave)"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
            </svg>
            {steps.map((step, i) => {
              const slot = stepSlots[i];
              return (
                <li key={step.title}>
                  <span className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${slot.left}%`, top: `${slot.top}%` }}>
                    <StepNode icon={step.icon} />
                  </span>
                  <span
                    className={`absolute w-56 -translate-x-1/2 text-center ${slot.low ? '-translate-y-full -mt-12' : 'mt-12'}`}
                    style={{ left: `${slot.left}%`, top: `${slot.top}%` }}
                  >
                    <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 font-display text-[8rem] font-semibold leading-none text-[#101827]/[0.06]">{i + 1}</span>
                    <span className="relative block font-display text-2xl font-semibold tracking-[-0.03em] text-[#101827]">{step.title}</span>
                  </span>
                </li>
              );
            })}
          </ol>

          {/* Mobile and tablet: vertical list */}
          <ol className="mt-10 space-y-8 lg:hidden">
            {steps.map((step, i) => (
              <li key={step.title} className="flex items-center gap-5">
                <StepNode icon={step.icon} />
                <span>
                  <span className="block font-mono text-sm font-bold text-[#4355A5]">0{i + 1}</span>
                  <span className="block font-display text-2xl font-semibold tracking-[-0.03em]">{step.title}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team and culture */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal delay={0.05}>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-[6.2rem] font-semibold leading-[0.94] tracking-[-0.055em]">
                <span className="text-[#101827]">Meet</span> <span className="text-[#667085]">our team</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 text-xl sm:text-2xl leading-relaxed tracking-[-0.02em] text-[#101827]/70">
                We are a small, hands-on team in Malappuram, working on every campaign together.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-[#101827]/55">
                We are growing, so if you want to build marketing that is measured on results, see our open roles.
              </p>
              <Link to="/careers" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-[#4355A5] px-6 py-3 text-sm font-bold text-white hover:bg-[#34448F] transition-colors">View open roles <ArrowUpRight className="w-4 h-4" /></Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
