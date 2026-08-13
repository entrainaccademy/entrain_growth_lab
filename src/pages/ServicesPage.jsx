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
      <section className="pt-14 sm:pt-24 pb-10 sm:pb-16 bg-[#F3F1EE] relative z-10 border-b border-neutral-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#101827] tracking-tight leading-none max-w-5xl">
              Growth services built for modern brands.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Editorial Overview Section (WhatWeOffer - Untouched Source) */}
      <WhatWeOffer bg="bg-[#F3F1EE]" />

      
     

      {/* Process Component */}
      <Process />

      {/* CTA Section */}
      <CTA onOpenConsultation={onOpenConsultation} />

    </main>
  );
}
