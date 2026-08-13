import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function DigitalMarketing({ onOpenConsultation }) {
  const navigate = useNavigate();

  const features = [
    'Multi-channel growth strategy & campaign planning',
    'Audience segmentation & buyer persona targeting',
    'Conversion rate optimization (CRO) & landing page alignment',
    'Data analytics tracking, attribution & ROI reporting',
    'Continuous campaign A/B testing & budget scaling',
    'Omnichannel marketing integration across search & social'
  ];

  const benefits = [
    { title: 'Higher Conversion Rates', desc: 'Attract qualified traffic that actually converts into paying customers.' },
    { title: 'Scalable Growth Engine', desc: 'Build repeatable customer acquisition channels with predictable ROAS.' },
    { title: 'Data-Driven Decisions', desc: 'Eliminate guesswork with real-time marketing attribution & analytics.' }
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
            Digital Marketing
          </h1>
          <p className="text-neutral-700 text-lg sm:text-2xl font-light max-w-3xl leading-relaxed">
            Grow your online presence with data-driven marketing strategies that attract the right audience, build brand authority, and increase customer conversions.
          </p>
        </div>

        {/* Detailed Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101827] tracking-tight">
              Strategic Digital Marketing Built to Scale
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
              Modern digital marketing requires more than launching isolated ads. We design comprehensive growth ecosystems that connect your audience touchpoints—from initial brand discovery to high-intent conversions and long-term customer retention.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed font-light">
              By combining audience behavioral research, continuous A/B testing, precise analytics attribution, and conversion copywriting, we turn marketing spend into a predictable, scalable revenue engine.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#101827] mb-3">
                Ready to Accelerate Your Customer Acquisition?
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Book a free 30-minute growth strategy consultation with our senior marketing team to audit your current channels.
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
            Why Choose Our Digital Marketing Approach
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

        {/* Mid-Page Action Call */}
        <div className="text-center py-10 bg-white rounded-3xl border border-neutral-200/90 shadow-sm mb-16 px-6">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101827] mb-3">
            Let's Build Your Digital Growth Roadmap
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto mb-6 font-light">
            Schedule a confidential consultation to explore custom marketing packages tailored specifically for your target revenue.
          </p>
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Inquire About Digital Marketing
          </Button>
        </div>

      </section>

      {/* Connect With Us Section */}
      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
