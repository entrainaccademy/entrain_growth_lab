import React from 'react';
import { useNavigate } from '../lib/router';
import { motion } from 'framer-motion';
import { serviceGroups } from '../data/serviceCatalog';

export default function WhatWeOffer({ bg = "bg-[#F3F1EE]" }) {
  const navigate = useNavigate();

  let counter = 0;
  const groups = serviceGroups.map((group) => ({
    ...group,
    items: group.items.map((item) => ({ ...item, number: String(++counter).padStart(2, '0') })),
  }));

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

        {/* Numbered Offer List grouped by service area */}
        <div className="space-y-12 sm:space-y-16">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 flex items-center gap-3 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
                <span className="w-2.5 h-2.5 bg-[#D62828] shrink-0" />
                {group.title}
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {group.items.map((item, index) => (
                  <motion.div
                    key={item.number}
                    onClick={() => navigate(item.route)}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 6 }}
                    className="group py-5 px-4 sm:px-8 rounded-2xl backdrop-blur-md border hover:border-[#D62828]/40 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center cursor-pointer"
                  >
                    <div className="md:col-span-2">
                      <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#D62828] group-hover:scale-105 transition-transform inline-block">
                        {item.number}
                      </span>
                    </div>
                    <div className="md:col-span-5">
                      <h4 className="font-display text-lg sm:text-xl lg:text-2xl font-extrabold text-[#101827] tracking-tight group-hover:text-[#D62828] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

