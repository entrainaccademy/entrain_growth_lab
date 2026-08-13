import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function SocialMediaMarketing({ onOpenConsultation }) {
  const navigate = useNavigate();

  const features = [
    'Platform-specific social content strategy (Instagram, LinkedIn, Facebook)',
    'High-converting Reels, shorts & video copywriting',
    'Custom graphic design, motion assets & brand templates',
    'Content calendar planning & automated scheduling',
    'Community engagement & active follower management',
    'Monthly social growth analytics & engagement reporting'
  ];

  const benefits = [
    { title: 'Stronger Brand Affinity', desc: 'Build meaningful connections with content people actively follow and share.' },
    { title: 'Consistent Visibility', desc: 'Stay top-of-mind across major social platforms with disciplined publishing.' },
    { title: 'Organic Lead Triggers', desc: 'Turn social interactions into qualified business inquiries and sales.' }
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
            Social Media Marketing
          </h1>
          <p className="text-neutral-700 text-lg sm:text-2xl font-light max-w-3xl leading-relaxed">
            Build a strong social presence through creative content, engaging campaigns, consistent brand communication, and active community growth.
          </p>
        </div>

        {/* Detailed Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101827] tracking-tight">
              Turn Social Attention into Business Value
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
              Social media is your brand’s modern storefront. We craft platform-tailored content calendars, short-form video scripts, and visual design assets that cut through feed noise and foster genuine audience trust.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed font-light">
              Our team manages your complete social ecosystem—ensuring brand consistency across Instagram, LinkedIn, Facebook, and emerging channels while driving measurable community engagement.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#101827] mb-3">
                Ready to Elevate Your Social Presence?
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Consult with our social strategists to review your channel performance and content direction.
              </p>
            </div>
            <Button variant="primary" size="md" onClick={onOpenConsultation} showArrow={true} className="w-full justify-center">
              Book Strategy Session
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

        {/* Business Benefits */}
        <div className="mb-16 bg-white p-8 sm:p-12 rounded-3xl border border-neutral-200/90 shadow-sm">
          <h2 className="font-display text-3xl font-extrabold text-[#101827] tracking-tight mb-8">
            Why Choose Our Social Media Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-mono text-sm font-bold text-[#4355A5] uppercase">0{idx + 1}.</div>
                <h3 className="font-display text-xl font-bold text-[#101827]">{b.title}</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Call */}
        <div className="text-center py-10 bg-white rounded-3xl border border-neutral-200/90 shadow-sm mb-16 px-6">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101827] mb-3">
            Scale Your Brand's Social Reach Today
          </h3>
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Inquire About Social Media Marketing
          </Button>
        </div>

      </section>

      {/* Connect With Us Section */}
      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
