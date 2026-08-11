import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { ArrowUpRight } from 'lucide-react';

export default function Work({ onOpenConsultation }) {
  const caseStudies = [
    {
      id: 1,
      title: 'Entrain Academy',
      client: 'Entrain Academy',
      category: 'FEATURED PROJECT // EDTECH PLATFORM',
      featuredImage: '/images/mockup1.png',
      technologies: 'React • Tailwind CSS • Node.js • Organic SEO',
      description: 'A modern culinary education platform designed to showcase courses, instructors, and learning experiences with high organic conversion strategy.',
    },
    {
      id: 2,
      title: 'Buckeez Digital',
      client: 'Buckeez Gourmet Group',
      category: 'FEATURED PROJECT // FOOD & BEVERAGE',
      featuredImage: '/images/buckeezmockup.png',
      technologies: 'React • Tailwind CSS • Framer Motion • Order API',
      description: 'High-conversion food & beverage web app featuring interactive digital menus, online store location finder, and instant order triggers.',
    },
    {
      id: 3,
      title: 'Buckeez Campaign',
      client: 'Buckeez Franchise',
      category: 'FEATURED PROJECT // PAID MEDIA & VIRAL GROWTH',
      featuredImage: '/images/buckeezinstagram-mockup.png',
      technologies: 'Meta Ads • Creative Strategy • Geo-Targeting • Funnel UI',
      description: 'Viral social media ad creative system and multi-channel customer acquisition engine built for gourmet food chain expansion.',
    },
    {
      id: 4,
      title: 'enTrain Growth Labs',
      client: 'enTrain Growth Labs',
      category: 'FEATURED PROJECT // ENTERPRISE GROWTH PORTAL',
      featuredImage: '/images/labsmockup.png',
      technologies: 'React • Node.js • PostgreSQL • Tailwind CSS',
      description: 'Enterprise growth portal connecting ambitious businesses with data-driven organic marketing systems and certified growth advisors.',
    }
  ];

  return (
    <section id="work-section" className="py-20 sm:py-28 bg-[#F6FAFC] text-[#101827] relative border-b border-[#101827]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <SectionLabel label="FEATURED SHOWCASE" variant="light" className="mb-4" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal direction="up" delay={0.15}>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#101827] tracking-tight">
              Growth looks better <br />
              <span className="text-[#4355A5]">when you can measure it.</span>
            </h2>
          </Reveal>
        </div>

        {/* ALL PROJECTS SHOWCASED VERTICALLY (NO CAROUSEL / SLIDER) */}
        <div className="space-y-24 sm:space-y-32">
          {caseStudies.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={0.1}>
              <div className="space-y-8">

                {/* BORDERLESS LARGE HERO IMAGE CONTAINER */}
                <div className="w-full group cursor-pointer">
                  <div className="w-full h-auto rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)] transition-all duration-500 relative bg-slate-900/5">
                    <img
                      src={project.featuredImage}
                      alt={project.title}
                      className="w-full h-auto object-contain block transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* EDITORIAL INFORMATION LAYOUT */}
                <div className="space-y-6 max-w-5xl mx-auto pt-2">

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                    <div>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase bg-[#4355A5]/10 px-3.5 py-1.5 rounded-full border border-[#4355A5]/20 inline-block mb-3">
                        {project.category}
                      </span>
                      <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-[#101827] tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <span className="font-mono text-sm font-bold text-slate-400">
                      0{index + 1} // 0{caseStudies.length}
                    </span>
                  </div>

                  <p className="text-[#607080] text-lg sm:text-2xl leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-slate-200">
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Technologies:
                      </span>
                      <div className="text-sm sm:text-base font-semibold text-[#101827] font-mono">
                        {project.technologies}
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={onOpenConsultation}
                      showArrow={true}
                    >
                      Book Strategy Call
                    </Button>
                  </div>

                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
