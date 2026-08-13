import React from 'react';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Cobolt({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#F3F1EE] text-[#101827] min-h-screen font-sans">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#101827] tracking-tight">
            Cobolt Campaign
          </h1>
          <p className="font-sans text-neutral-700 text-lg sm:text-2xl font-light mt-4 max-w-3xl leading-relaxed">
            Viral social media ad creative system and multi-channel customer acquisition engine built for gourmet food chain expansion across Meta & Instagram.
          </p>
        </div>

        {/* Hero Visual Mockup */}
        <div className="w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900/5 mb-16">
          <img
            src="/images/coboldipad.png"
            alt="Cobolt Campaign Mockup"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md">
            <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-600" /> The Challenge
            </h3>
            <p className="font-sans text-neutral-600 text-base leading-relaxed font-light">
              Driving hyper-local store footfall and building brand affinity across paid social media channels with high conversion velocity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md">
            <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> The Growth Solution
            </h3>
            <p className="font-sans text-neutral-600 text-base leading-relaxed font-light">
              Engineered high-converting vertical video creatives, UGC campaigns, and localized geo-targeted audience funnels to maximize ROAS.
            </p>
          </div>
        </div>

        {/* Action CTA */}
        <div className="text-center pt-8">
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Book Strategy Call
          </Button>
        </div>
      </section>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
