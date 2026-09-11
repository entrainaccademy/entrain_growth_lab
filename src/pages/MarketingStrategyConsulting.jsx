import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import CTA from '../sections/CTA';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function MarketingStrategyConsulting({ onOpenConsultation }) {
  const navigate = useNavigate();

  const features = [
    'Comprehensive market, competitor & target audience audit',
    'Custom multi-channel growth roadmap & KPI specification',
    'Customer journey mapping & acquisition funnel modeling',
    'Budget allocation, channel prioritization & ROAS forecasting',
    'Marketing technology stack & automation consulting',
    'Ongoing executive growth advisory & quarterly strategic reviews'
  ];

  const benefits = [
    { title: 'Clear Growth Roadmap', desc: 'Eliminate wasted spend with a prioritized execution plan tied directly to business goals.' },
    { title: 'Data-Driven Insights', desc: 'Understand your market opportunities, audience behaviors, and competitor strategies.' },
    { title: 'Executive Alignment', desc: 'Align your leadership team around actionable growth milestones and revenue targets.' }
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
            Marketing Strategy & Consulting
          </h1>
          <p className="text-neutral-700 text-lg sm:text-2xl font-light max-w-3xl leading-relaxed">
            Build a clear, actionable marketing roadmap based on your specific business goals, target audience, competitors, and market growth opportunities.
          </p>
        </div>

        {/* Detailed Service Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101827] tracking-tight">
              Strategic Blueprints Built around Your Revenue Targets
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
              Effective marketing begins with clarity. We evaluate your current market positioning, digital touchpoints, and audience acquisition channels to construct an executive-level growth roadmap.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed font-light">
              Whether launching a new business product or scaling an established brand, our strategy consulting provides the clarity and execution frameworks required for sustainable expansion.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-[#101827] mb-3">
                Book a Strategy Advisory Session
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Connect directly with our senior growth partners to discuss your business challenges and targets.
              </p>
            </div>
            <Button variant="primary" size="md" onClick={onOpenConsultation} showArrow={true} className="w-full justify-center">
              Book Advisory Session
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
            Why Choose Our Growth Consulting
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
            Build Your Growth Roadmap Today
          </h3>
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
            Inquire About Strategy Consulting
          </Button>
        </div>

      </section>

      {/* Connect With Us Section */}
      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
