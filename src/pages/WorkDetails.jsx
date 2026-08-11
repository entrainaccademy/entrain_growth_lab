import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import CTA from '../sections/CTA';
import { ArrowUpRight } from 'lucide-react';

export default function WorkDetails({ onOpenConsultation }) {
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      title: 'Entrain Academy',
      featuredImage: '/images/mockup1.png',
      link: '/culinary'
    },
    {
      id: 2,
      title: 'Buckeez Digital',
      featuredImage: '/images/buckeezmockup.png',
      link: '/buckeez'
    },
    {
      id: 3,
      title: 'Buckeez Campaign',
      featuredImage: '/images/coboldipad.png',
      link: '/cobolt'
    },
    {
      id: 4,
      title: 'enTrain Growth Labs', 
      featuredImage: '/images/labs-laptop-mockup.png',
      link: '/entrainlabs'
    }
  ];

  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#E2E3E6] text-[#111111] min-h-screen">
      <section id="work-details-section" className="py-12 sm:py-20 bg-[#E2E3E6] text-[#101827] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionLabel label="PORTFOLIO SHOWCASE" variant="light" className="mb-4" />

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <Reveal direction="up" delay={0.15}>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#101827] tracking-tight">
                Selected Projects
              </h1>
            </Reveal>
          </div>

          {/* 2-COLUMN BORDERLESS HIGH-IMPACT IMAGE SHOWCASE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {caseStudies.map((project, index) => (
              <Reveal key={project.id} direction="up" delay={index * 0.1}>
                <div 
                  onClick={() => navigate(project.link)}
                  className="group cursor-pointer flex flex-col justify-between h-full"
                >

                  {/* MAIN HIGHLIGHT IMAGE - BORDERLESS, PROFESSIONAL, SOFT SHADOW */}
                  <div className="w-full aspect-[16/10] rounded-3xl sm:rounded-[1.6rem] overflow-hidden bg-slate-900/5 relative shadow-xl group-hover:shadow-2xl transition-all duration-500 flex items-center justify-center">
                    <img
                      src={project.featuredImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />

                    {/* Subtle Overlay Action Badge */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/95 backdrop-blur-md text-black font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 border border-white/40">
                        View Case Study <ArrowUpRight className="w-4 h-4 text-[#4355A5]" />
                      </span>
                    </div>
                  </div>

                  {/* MINIMAL TITLE & ACTION */}
                  <div className="mt-5 flex items-center justify-between gap-4 px-1">
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#101827] tracking-tight group-hover:text-[#4355A5] transition-colors">
                      {project.title}
                    </h2>

                    <span className="text-xs font-mono font-bold text-[#4355A5] bg-[#4355A5]/10 px-3.5 py-1.5 rounded-full border border-[#4355A5]/20 flex items-center gap-1 group-hover:bg-[#4355A5] group-hover:text-white transition-all">
                      Explore <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
