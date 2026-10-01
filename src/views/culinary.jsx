import React from 'react';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { Target, CheckCircle2, Globe, ExternalLink } from 'lucide-react';

export default function Culinary({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#F3F1EE] text-[#101827] min-h-screen font-sans">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#101827] tracking-tight">
            Entrain Culinary Academy
          </h1>
          <p className="font-sans text-neutral-700 text-lg sm:text-2xl font-light mt-4 max-w-3xl leading-relaxed">
            A modern culinary education platform designed to showcase courses, instructors, and learning experiences with high organic conversion strategy.
          </p>
          <div className="mt-6">
            <a
              href="https://entraincullinaryschool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300/80 text-sm sm:text-base font-semibold text-[#4355A5] hover:bg-[#4355A5] hover:text-white transition-all shadow-sm group"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#4355A5] group-hover:text-white transition-colors" />
              <span>entraincullinaryschool.com</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-[#4355A5] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900/5 mb-16">
          <img
            src="/images/mockup1.png"
            alt="Entrain Culinary Academy Digital Platform & Website Case Study"
            loading="lazy"
            decoding="async"
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
              Building high organic visibility in a competitive education sector while scaling course applications organically without heavy paid ad dependency.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md">
            <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> The Growth Solution
            </h3>
            <p className="font-sans text-neutral-600 text-base leading-relaxed font-light">
              Implemented a topical authority SEO architecture alongside an intuitive, student-centric application funnel and rich media previews.
            </p>
          </div>
        </div>

        {/* Action CTA */}
        <div className="text-center pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="https://entraincullinaryschool.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            showArrow={true}
          >
            Visit Live Website
          </Button>
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Book Strategy Call
          </Button>
        </div>
      </section>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}

