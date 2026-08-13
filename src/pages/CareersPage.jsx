import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#F3F1EE] text-[#101827] pt-24 sm:pt-32">
      <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Do meaningful work.<br />Build real growth.
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              We’re building a thoughtful team of strategists, creatives, and problem-solvers who care about work that makes a measurable difference.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <Reveal direction="up" delay={0.15}>
          <div className="max-w-3xl mx-auto rounded-[2rem] border border-[#101827]/10 bg-white px-6 py-12 sm:px-12 sm:py-16 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4355A5]/10 text-[#4355A5]">
              <BriefcaseBusiness className="h-7 w-7" strokeWidth={1.7} />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              No open roles right now
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-600 font-light leading-relaxed">
              We don’t have any active openings at the moment. Please check back later—new opportunities will be posted here as our team grows.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
