import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-20 bg-[#F3F1EE] text-[#101827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="LEGAL TERMS" variant="blue" className="mb-4" />

        <Reveal direction="up" delay={0.15}>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#101827] tracking-tight leading-tight mb-8">
            Terms of Service
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.25}>
          <div className="prose max-w-none bg-white text-[#101827] p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6 text-sm sm:text-base">
            <h3 className="font-display text-xl font-bold text-[#4355A5]">1. Acceptance of Terms</h3>
            <p className="text-[#607080]">
              By accessing and navigating the Entrain Growth Lab website, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h3 className="font-display text-xl font-bold text-[#4355A5]">2. Intellectual Property</h3>
            <p className="text-[#607080]">
              All content, branding elements, graphics, visual designs, and text on this website are the exclusive property of Entrain Growth Lab. Unauthorized reproduction or redistribution is strictly prohibited.
            </p>

            <h3 className="font-display text-xl font-bold text-[#4355A5]">3. Scope of Strategy Advice</h3>
            <p className="text-[#607080]">
              Informational content and strategy frameworks presented on this site are provided for introductory purposes. Specific deliverables, scope, and guarantees are defined exclusively in formal client master services agreements (MSA).
            </p>

            <h3 className="font-display text-xl font-bold text-[#4355A5]">4. Modifications</h3>
            <p className="text-[#607080]">
              Entrain Growth Lab reserves the right to update these terms at any time without prior notice. Continued use of the website signifies acceptance of updated terms.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
