import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function SEO({ onOpenConsultation }) {
  const navigate = useNavigate();

  const features = [
    'Technical site audits & performance optimization',
    'Targeted keyword strategy & search intent analysis',
    'On-page SEO & content optimization',
    'Strategic content creation & blog publishing',
    'Quality backlink building & authority growth',
    'Local SEO & Google Business Profile optimization'
  ];

  const benefits = [
    { title: 'Sustainable Traffic', desc: 'Drive continuous, long-term organic traffic to your website without relying solely on paid ads.' },
    { title: 'High-Intent Leads', desc: 'Connect with customers at the exact moment they search for your products or services.' },
    { title: 'Brand Authority', desc: 'Build strong search engine credibility that helps your business outrank competitors.' }
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
        <div className="mb-10 pb-8 border-b border-neutral-300/80">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#101827] tracking-tight">
            Search Engine Optimization (SEO)
          </h1>
        </div>

        {/* Detailed Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101827] tracking-tight">
              Drive Sustainable Business Growth with Proven SEO Strategies
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
              Search engine optimization is essential for consistent digital growth. We build customized SEO strategies designed to improve your search visibility, attract qualified visitors, and turn search interest into real revenue.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed font-light">
              From resolving technical site issues to creating high-ranking content, we ensure your website delivers a seamless user experience that search engines favor and customers trust.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#101827] mb-3">
                Request a Free SEO Site Audit
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Discover how your website currently performs and uncover key opportunities to improve your search rankings.
              </p>
            </div>
            <Button variant="primary" size="md" onClick={onOpenConsultation} showArrow={true} className="w-full justify-center">
              Request SEO Audit
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
            Ready to Grow Your Search Visibility?
          </h3>
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Inquire About SEO Services
          </Button>
        </div>

      </section>

      {/* Connect With Us Section */}
      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}

