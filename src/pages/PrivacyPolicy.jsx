import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-20 bg-[#2596BE] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label="LEGAL INFORMATION" variant="blue" className="mb-4" />

        <Reveal direction="up" delay={0.15}>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Privacy Policy
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.25}>
          <div className="prose max-w-none bg-white text-[#101827] p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-6 text-sm sm:text-base">
            <h3 className="font-display text-xl font-bold text-[#4355A5]">1. Overview</h3>
            <p className="text-[#607080]">
              Entrain Growth Lab ("we", "our", or "us") respects your privacy and is committed to protecting any personal information collected through our website. This Privacy Policy outlines how we handle data collected during strategy consultations and inquiries.
            </p>

            <h3 className="font-display text-xl font-bold text-[#4355A5]">2. Information We Collect</h3>
            <p className="text-[#607080]">
              We collect information that you voluntarily provide to us when submitting a contact or consultation form on our site, including your name, business email address, phone number, company name, and details regarding your growth goals.
            </p>

            <h3 className="font-display text-xl font-bold text-[#4355A5]">3. How We Use Your Information</h3>
            <p className="text-[#607080]">
              The information you submit is strictly used to evaluate your business requirements, prepare tailored growth strategy recommendations, and communicate directly with your team. We do not sell or rent your personal data to third parties.
            </p>

            <h3 className="font-display text-xl font-bold text-[#4355A5]">4. Data Security</h3>
            <p className="text-[#607080]">
              We implement industry-standard administrative and electronic security measures to safeguard your information against unauthorized access, disclosure, or alteration.
            </p>

            <h3 className="font-display text-xl font-bold text-[#4355A5]">5. Contact Us</h3>
            <p className="text-[#607080]">
              If you have any questions regarding this Privacy Policy, please reach out to our team via our official Contact Page.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
