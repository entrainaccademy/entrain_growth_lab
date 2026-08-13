import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function BrandingCreativeDesign({ onOpenConsultation }) {
  const navigate = useNavigate();

  const features = [
    'Brand positioning, mission & verbal identity guidelines',
    'Logo design & visual brand mark development',
    'Typography system, font topology & color palette specification',
    'Brand book documentation & usage rules',
    'Marketing collateral design (business cards, stationery, pitch decks)',
    'Social media visual design systems & ad graphic templates'
  ];

  const benefits = [
    { title: 'Instant Credibility', desc: 'Present your business with a world-class visual identity that inspires trust.' },
    { title: 'Market Differentiation', desc: 'Stand out clearly from legacy competitors with a distinctive visual style.' },
    { title: 'Brand Consistency', desc: 'Ensure your brand looks unified across web, print, social media, and ad channels.' }
  ];

  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#F3F1EE] text-[#101827] min-h-screen font-sans">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#4355A5] hover:text-[#101827] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </button>
        </div>

        {/* Hero Header */}
        <div className="mb-14 pb-8 border-b border-neutral-300/80">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#101827] tracking-tight mb-4">
            Branding & Creative Design
          </h1>
          <p className="text-neutral-700 text-lg sm:text-2xl font-light max-w-3xl leading-relaxed">
            Develop a memorable corporate brand identity with strategic visuals, distinctive logo design, typography systems, and consistent brand guidelines.
          </p>
        </div>

        {/* Detailed Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101827] tracking-tight">
              Shaping Visual Identities People Trust and Remember
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
              Your brand identity communicates your company’s core value before a sales conversation begins. We create cohesive design systems—including logos, color palettes, typography, and marketing assets—that give your business a modern, premium aesthetic.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed font-light">
              We deliver complete brand books and digital design guidelines, allowing your team and partners to execute marketing materials with complete visual consistency.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#101827] mb-3">
                Rebrand or Build Your Visual Identity
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Connect with our creative directors to review your brand positioning and visual assets.
              </p>
            </div>
            <Button variant="primary" size="md" onClick={onOpenConsultation} showArrow={true} className="w-full justify-center">
              Book Brand Consultation
            </Button>
          </div>
        </div>

        {/* Key Features & Deliverables Grid */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase block mb-1">
              SCOPE OF WORK
            </span>
            <h2 className="font-display text-3xl font-extrabold text-[#101827] tracking-tight">
              Key Features & Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4355A5] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#101827] leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Call */}
        <div className="text-center py-10 bg-white rounded-3xl border border-neutral-200/90 shadow-sm mb-16 px-6">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101827] mb-3">
            Build a Distinctive Corporate Identity
          </h3>
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Inquire About Branding & Design
          </Button>
        </div>

      </section>

      {/* Connect With Us Section */}
      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
