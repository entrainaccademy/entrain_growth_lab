import React from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Process from '../sections/Process';
import CTA from '../sections/CTA';
import Button from '../components/Button';
import WhatWeOffer from '../sections/WhatWeOffer';

export default function ServicesPage({ onOpenConsultation }) {
  const navigate = useNavigate();

  const serviceShowcase = [
    {
      number: '01',
      route: '/services/seo',
      title: 'Search Engine Optimization',
      tagline: ['SEO & Organic Growth.', 'Rank higher and get discovered.'],
      headlines: [
        { text: 'Keyword strategy & competitor research.', highlight: false },
        { text: 'On-page SEO & technical audits.', highlight: false },
        { text: 'Link building & local search growth.', highlight: false },
        { text: 'Compounding ', highlightText: 'organic traffic.', highlight: true }
      ],
      techNote: 'We build sustainable organic traffic through technical SEO, strategic keywords, authoritative content, and continuous search performance optimization.'
    },
    {
      number: '02',
      route: '/services/branding-creative-design',
      title: 'Branding',
      tagline: ['Identity & Positioning.', 'Build a brand people trust.'],
      headlines: [
        { text: 'Brand strategy & clear positioning.', highlight: false },
        { text: 'Logo & visual identity system.', highlight: false },
        { text: 'Typography & color direction.', highlight: false },
        { text: 'Instant credibility & ', highlightText: 'brand trust.', highlight: true }
      ],
      techNote: 'We shape distinctive brand identities that clarify your positioning, create instant credibility, and give your business a consistent presence everywhere.'
    },
    {
      number: '03',
      route: '/services/performance-marketing',
      title: 'Meta Ads',
      tagline: ['Facebook & Instagram Ads.', 'Turn attention into sales.'],
      headlines: [
        { text: 'Campaign & funnel strategy.', highlight: false },
        { text: 'Audience research & precise targeting.', highlight: false },
        { text: 'Ad creative & conversion copy.', highlight: false },
        { text: 'Scalable customer ', highlightText: 'acquisition.', highlight: true }
      ],
      techNote: 'We plan, launch, and optimize Facebook and Instagram campaigns with precise audiences, compelling creative, and conversion-focused funnels.'
    },
    {
      number: '04',
      route: '/services/performance-marketing',
      title: 'Google Ads',
      tagline: ['High-Intent Search Campaigns.', 'Reach customers when searching.'],
      headlines: [
        { text: 'Search campaign & Performance Max.', highlight: false },
        { text: 'Keyword & competitor research.', highlight: false },
        { text: 'Ad copy & landing-page alignment.', highlight: false },
        { text: 'Measurable returns & ', highlightText: 'high ROAS.', highlight: true }
      ],
      techNote: 'We create high-intent Google Search, Display, and Performance Max campaigns engineered to generate qualified traffic and measurable returns.'
    },
    {
      number: '05',
      route: '/services/social-media-marketing',
      title: 'Social Media Marketing',
      tagline: ['Content & Community Growth.', 'Build a follow-worthy presence.'],
      headlines: [
        { text: 'Platform-specific social strategy.', highlight: false },
        { text: 'Content calendar, Reels & graphics.', highlight: false },
        { text: 'Publishing & community management.', highlight: false },
        { text: 'Turn engagement into ', highlightText: 'leads.', highlight: true }
      ],
      techNote: 'We create platform-specific content and social strategies that grow your audience, strengthen brand authority, and turn engagement into business opportunities.'
    },
    {
      number: '06',
      route: '/services/website-design-development',
      title: 'Web Design & Development',
      tagline: ['Conversion-Focused Websites.', 'Faster, clearer & built to convert.'],
      headlines: [
        { text: 'UX strategy & wireframing.', highlight: false },
        { text: 'Custom responsive UI design.', highlight: false },
        { text: 'Modern website development.', highlight: false },
        { text: 'High-performing ', highlightText: 'digital presence.', highlight: true }
      ],
      techNote: 'We design and develop responsive, high-performing websites that communicate your value clearly and turn more visitors into qualified enquiries.'
    }
  ];

  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#F3F1EE] text-[#101827] min-h-screen font-sans relative overflow-hidden">

      {/* Top Right Corner Yellow Slice Accent */}
     

      {/* Hero Header */}
      <section className="py-14 sm:py-24 bg-[#F3F1EE] relative z-10 border-b border-neutral-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#101827] tracking-tight leading-none max-w-5xl">
              Growth services built for modern brands.
            </h1>
            <p className="font-sans text-neutral-700 text-lg sm:text-2xl font-light mt-6 max-w-3xl leading-relaxed">
              Click any service below to view its dedicated scope of work, key deliverables, and business benefits.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial Overview Section (WhatWeOffer - Untouched Source) */}
      <WhatWeOffer bg="bg-[#F3F1EE]" />

      {/* Showcase Service Cards linked to Detail Pages */}
      <section className="py-16 sm:py-28 bg-[#F3F1EE] text-[#101827] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

          {serviceShowcase.map((service) => (
            <Reveal key={service.number} delay={0.1} direction="up">
              <div
                onClick={() => navigate(service.route)}
                className="bg-white rounded-3xl p-6 sm:p-12 lg:p-14 border border-neutral-200/90 shadow-xl relative overflow-hidden group cursor-pointer hover:border-[#4355A5]/50 transition-all duration-300"
              >
                {/* Device Wireframe Line Art SVG */}
                <div className="mb-8 opacity-40 group-hover:opacity-70 transition-opacity">
                  <svg className="w-48 sm:w-64 h-auto text-neutral-400" viewBox="0 0 240 120" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3">
                    <rect x="10" y="10" width="120" height="90" rx="4" />
                    <rect x="140" y="40" width="90" height="60" rx="4" />
                    <line x1="20" y1="25" x2="110" y2="25" />
                    <line x1="20" y1="40" x2="80" y2="40" />
                    <line x1="20" y1="55" x2="100" y2="55" />
                  </svg>
                </div>

                {/* Number & Title */}
                <div className="flex flex-wrap items-baseline gap-3 mb-6">
                  <span className="font-display font-extrabold text-4xl sm:text-6xl text-[#F05365] tracking-tight">
                    {service.number}
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#101827] tracking-tight group-hover:text-[#4355A5] transition-colors">
                    {service.title}
                  </h2>
                </div>

                {/* Stacked Vertical Tagline */}
                <div className="mb-8">
                  {service.tagline.map((line, idx) => (
                    <div key={idx} className="font-display font-semibold text-2xl sm:text-3xl text-neutral-800 leading-tight">
                      {line}
                    </div>
                  ))}
                </div>

                {/* Stacked Headline Statements with Highlighted Accent Word */}
                <div className="mb-10 space-y-2">
                  {service.headlines.map((item, idx) => (
                    <div key={idx} className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#101827] tracking-tight leading-tight">
                      {item.text}
                      {item.highlight && (
                        <span className="text-[#F05365] underline decoration-[#F05365]/30 underline-offset-4">
                          {item.highlightText}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Tech Note & View Service Details Action */}
                <div className="pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <p className="text-xs sm:text-sm text-neutral-500 font-sans font-normal max-w-xl leading-relaxed">
                    {service.techNote} <span className="text-[#F05365] font-bold">»»»</span>
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.route);
                    }}
                    showArrow={true}
                    className="shrink-0"
                  >
                    View {service.title} Details
                  </Button>
                </div>

              </div>
            </Reveal>
          ))}

        </div>
      </section>

      {/* Process Component */}
      <Process />

      {/* CTA Section */}
      <CTA onOpenConsultation={onOpenConsultation} />

    </main>
  );
}
