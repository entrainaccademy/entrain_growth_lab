import React, { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import { services } from '../data/services';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services({ onOpenConsultation }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services-section" className="py-20 sm:py-28 bg-[#F3F1EE] text-[#101827] relative border-b border-[#101827]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionLabel label="WHAT WE DO" className="mb-4" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal direction="up" delay={0.15}>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#101827] tracking-tight">
              Everything you need <br />
              <span className="text-[#4355A5]">to grow smarter.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <p className="text-[#101827]/55 text-base max-w-md font-light">
              We study your business first, then recommend the tailored service combination that fits your objectives.
            </p>
          </Reveal>
        </div>

        {/* Interactive Services List */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Reveal key={service.id} delay={index * 0.08} direction="up">
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group rounded-2xl transition-all duration-300 border p-6 sm:p-8 ${isHovered
                      ? 'bg-white border-[#4355A5] shadow-lg shadow-[#4355A5]/5'
                      : 'bg-[#F3F1EE] border-[#101827]/15'
                    }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                    {/* Number & Title */}
                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-2xl font-bold transition-colors ${isHovered ? 'text-[#4355A5]' : 'text-[#101827]/35'}`}>
                        {service.number}
                      </span>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isHovered ? 'bg-[#4355A5] text-white' : 'bg-white text-[#101827] border border-[#101827]/10'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[#101827] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs font-mono text-[#4355A5] uppercase tracking-wider mt-1">
                          {service.shortTitle}
                        </p>
                      </div>
                    </div>

                    {/* Tagline / Short Description */}
                    <div className="lg:max-w-md">
                      <p className="text-[#101827]/55 text-sm sm:text-base leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Arrow / Route CTA */}
                    <div className="flex items-center gap-3">
                      <Link
                        to="/services"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${isHovered
                            ? 'bg-[#4355A5] text-white'
                            : 'bg-white text-[#101827] border border-[#101827]/15'
                          }`}
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>

                  </div>

                  {/* Expandable Deliverables on Hover */}
                  {isHovered && (
                    <div className="mt-6 pt-6 border-t border-[#101827]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-fadeIn">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#101827]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4355A5] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
