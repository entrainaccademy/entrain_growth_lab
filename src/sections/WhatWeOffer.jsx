import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function WhatWeOffer({ bg = "bg-[#F3F1EE]" }) {
  const navigate = useNavigate();

  const offerItems = [
    {
      number: '01',
      title: 'Search Engine Optimization',
      route: '/services/seo',
      desc: 'We build sustainable organic traffic through technical SEO, strategic keywords, authoritative content, and continuous search performance optimization.',
      accent: 'text-[#D62828]'
    },
    {
      number: '02',
      title: 'Branding',
      route: '/services/branding-creative-design',
      desc: 'We shape distinctive brand identities that clarify your positioning, create instant credibility, and give your business a consistent presence everywhere.',
      accent: 'text-[#D62828]'
    },
    {
      number: '03',
      title: 'Meta Ads',
      route: '/services/performance-marketing',
      desc: 'We plan, launch, and optimize Facebook and Instagram campaigns with precise audiences, compelling creative, and conversion-focused funnels.',
      accent: 'text-[#D62828]'
    },
    {
      number: '04',
      title: 'Google Ads',
      route: '/services/performance-marketing',
      desc: 'We create high-intent Google Search, Display, and Performance Max campaigns engineered to generate qualified traffic and measurable returns.',
      accent: 'text-[#D62828]'
    },
    {
      number: '05',
      title: 'Social Media Marketing',
      route: '/services/social-media-marketing',
      desc: 'We create platform-specific content and social strategies that grow your audience, strengthen brand authority, and turn engagement into business opportunities.',
      accent: 'text-[#D62828]'
    },
    {
      number: '06',
      title: 'Web Design & Development',
      route: '/services/website-design-development',
      desc: 'We design and develop responsive, high-performing websites that communicate your value clearly and turn more visitors into qualified enquiries.',
      accent: 'text-[#D62828]'
    }
  ];

  return (
    <section className={`py-16 sm:py-24 ${bg} text-[#101827] overflow-hidden font-sans`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section matching editorial model */}
        <div className="flex items-center justify-end mb-16 pb-8 border-b border-neutral-300/60">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="w-3.5 h-3.5 bg-[#D62828] shrink-0" />
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#101827] tracking-tight">
              WHAT <span className="font-light text-neutral-400">WE</span> OFFER
            </h2>
          </motion.div>
        </div>

        {/* Numbered Offer List - Editorial Clean Layout */}
        <div className="space-y-4 sm:space-y-6">
          {offerItems.map((item, index) => (
            <motion.div
              key={item.number}
              onClick={() => navigate(item.route)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
              className="group py-5 px-4 sm:px-8 rounded-2xl bg-white/70 backdrop-blur-md border border-neutral-200/80 hover:border-[#D62828]/40 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center cursor-pointer"
            >
              {/* Number Column */}
              <div className="md:col-span-2">
                <span className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold ${item.accent} group-hover:scale-105 transition-transform inline-block`}>
                  {item.number}
                </span>
              </div>

              {/* Title Column */}
              <div className="md:col-span-5">
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-extrabold text-[#101827] tracking-tight group-hover:text-[#D62828] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description Column */}
              <div className="md:col-span-5">
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

