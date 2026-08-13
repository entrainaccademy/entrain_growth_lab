import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import CTA from '../sections/CTA';
import Button from '../components/Button';
import { 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Target, 
  Sparkles
} from 'lucide-react';

export default function WorkPage({ onOpenConsultation }) {
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Entrain Academy',
      client: 'Entrain Academy',
      category: 'FEATURED PROJECT // EDTECH & CAREER PLATFORM',
      featuredImage: '/images/mockup1.png',
      technologies: 'React • Tailwind CSS • Node.js • Organic SEO',
      description: 'A modern culinary and business education platform designed to showcase courses, instructors, and learning experiences with high organic conversion strategy.',
      challenge: 'Building high organic visibility in a competitive education sector while scaling course applications organically.',
      solution: 'We implemented a topical authority SEO architecture alongside an intuitive, student-centric application funnel.',
      stats: [
        { label: 'Organic Enrollments', value: '+310%' },
        { label: 'Domain Authority', value: '42 (+18)' },
        { label: 'Ranked Keywords', value: '1,450+' }
      ]
    },
    {
      id: 2,
      title: 'Buckeez ',
      client: 'Buckeez Gourmet Group',
      category: 'FEATURED PROJECT // FOOD & BEVERAGE FRANCHISE',
      featuredImage: '/images/buckeezmockup.png',
      technologies: 'React • Tailwind CSS • Framer Motion • Order API',
      description: 'High-conversion food & beverage web app featuring interactive digital menus, online store location finder, and instant order triggers.',
      challenge: 'Capturing mobile-first restaurant diners and increasing direct online franchise order volume.',
      solution: 'Designed an appetite-stimulating, fast-loading mobile interface with single-tap checkout and location detection.',
      stats: [
        { label: 'Conversion Rate', value: '+185%' },
        { label: 'Online Orders', value: '3.4x' },
        { label: 'Mobile Traffic', value: '78%' }
      ]
    },
    {
      id: 3,
      title: 'Cobolt Machineries',
      client: 'Cobolt Machineries',
      category: 'FEATURED PROJECT',
      featuredImage: '/images/coboltmockup.png',
      technologies: 'Meta Ads • Creative Strategy • Geo-Targeting • Funnel UI',
      description: 'Viral social media ad creative system and multi-channel customer acquisition engine built for gourmet food chain expansion.',
      challenge: 'Driving hyper-local store footfall and building brand affinity across Meta & Instagram channels.',
      solution: 'Engineered high-converting vertical video creatives, UGC campaigns, and localized geo-targeted audience funnels.',
      stats: [
        { label: 'Meta Ad ROAS', value: '4.8x' },
        { label: 'Social Engagement', value: '+450%' },
        { label: 'Franchise Leads', value: '85/mo' }
      ]
    },
    {
      id: 4,
      title: 'Entrain Growth Labs',
      client: 'enTrain Growth Labs',
      category: 'FEATURED PROJECT // ENTERPRISE GROWTH PORTAL',
      featuredImage: '/images/labswebsite.jpg',
      technologies: 'React • Node.js • PostgreSQL • Tailwind CSS',
      description: 'Enterprise growth portal connecting ambitious businesses with data-driven organic marketing systems and certified growth advisors.',
      challenge: 'Creating a unified dashboard and conversion engine for high-ticket business consulting.',
      solution: 'Designed a high-trust agency portal with automated booking schedules and real-time campaign telemetry.',
      stats: [
        { label: 'Pipeline Generated', value: '$4.2M' },
        { label: 'Lead Quality', value: '+85%' },
        { label: 'Organic Search', value: 'Top 3' }
      ]
    },
    {
      id: 5,
      title: 'Strida Studio',
      client: 'Strida Studio',
      category: 'FEATURED PROJECT // MINIMAL ARCHITECTURE PORTFOLIO',
      featuredImage: '/images/mockup2.png',
      technologies: 'React • Tailwind CSS • WebGL • Dynamic Motion',
      description: 'A sleek, dark-mode minimalist portfolio architecture built with fluid grid layouts, interactive sidebar navigation, and hyper-refined typography.',
      challenge: 'The client needed a digital showcase that matched their high-end architectural aesthetic while maintaining lightning-fast load times.',
      solution: 'We engineered a bespoke single-page web app with smooth motion physics, custom sidebar controls, and dynamic media loading.',
      stats: [
        { label: 'Conversion Rate', value: '+240%' },
        { label: 'Page Speed', value: '99/100' },
        { label: 'Organic Inquiries', value: '3.8x' }
      ]
    }
  ];

  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#E2E3E6] text-[#111111] min-h-screen">
      
      {/* Header Section */}
      <section className="pt-10 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <Reveal direction="down" delay={0.1}>
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-[1px] w-12 sm:w-16 bg-neutral-400/60 inline-block"></span>
              <span className="font-serif italic text-lg sm:text-xl text-neutral-600 tracking-wider">
                Our Projects
              </span>
              <span className="h-[1px] w-12 sm:w-16 bg-neutral-400/60 inline-block"></span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#111111] tracking-tight leading-tight mb-2">
              Featured Showcase
            </h1>
          </Reveal>

        </div>
      </section>

      {/* ALL PROJECTS SHOWCASED VERTICALLY (NO CAROUSEL / SLIDER) */}
      <section className="pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 max-w-[1500px] mx-auto space-y-24 sm:space-y-36">
        {caseStudies.map((project, index) => (
          <Reveal key={project.id} direction="up" delay={0.1}>
            <div className="space-y-10 max-w-[1400px] mx-auto">
              
              {/* LARGE BORDERLESS HERO PROJECT VISUAL */}
              <div 
                onClick={() => setSelectedProjectModal(project)}
                className="w-full group cursor-pointer"
              >
                <div className="w-full h-auto rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)] transition-all duration-500 relative flex items-center justify-center bg-neutral-900/5">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-auto object-contain block transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Hover Action Badge */}
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur-md text-black font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 border border-white/40">
                      View Case Study <ArrowUpRight className="w-4 h-4 text-[#4355A5]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* EDITORIAL INFORMATION LAYOUT */}
              <div className="space-y-6 max-w-5xl mx-auto pt-2">
                
                {/* Category & Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-300/40 pb-6">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase bg-[#4355A5]/10 px-3.5 py-1.5 rounded-full border border-[#4355A5]/20 inline-block mb-3">
                      {project.category}
                    </span>
                    <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight">
                      {project.title}
                    </h2>
                  </div>

                  <span className="font-mono text-sm font-bold text-neutral-500">
                    0{index + 1} // 0{caseStudies.length}
                  </span>
                </div>

                {/* Description */}
                <p className="text-neutral-800 text-lg sm:text-2xl leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Technologies & Action CTAs */}
                <div className="pt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-neutral-300/40">
                  <div>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                      Technologies Used:
                    </span>
                    <div className="text-base font-semibold text-neutral-900 font-mono">
                      {project.technologies}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() => setSelectedProjectModal(project)}
                      showArrow={true}
                    >
                      View Project
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={onOpenConsultation}
                    >
                      Book Strategy Call
                    </Button>
                  </div>
                </div>

              </div>

            </div>
          </Reveal>
        ))}

        {/* Bottom Callout Banner */}
        <Reveal direction="up" delay={0.2} className="max-w-[1400px] mx-auto pt-10">
          <div className="bg-[#18181B] text-white rounded-[2.5rem] p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4355A5]/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="max-w-2xl z-10 text-center md:text-left">
              <span className="text-xs font-mono text-[#2596BE] uppercase tracking-widest bg-[#2596BE]/10 px-3 py-1 rounded-full border border-[#2596BE]/20 inline-block mb-4">
                // Growth Guarantee
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to engineer your next big case study?
              </h3>
              <p className="text-neutral-300 text-base sm:text-lg font-light mt-3">
                We partner with ambitious founders to scale organic revenue pipelines with data-backed growth strategies.
              </p>
            </div>

            <div className="z-10 flex-shrink-0">
              <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={true}>
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </Reveal>

      </section>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectModal(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden z-10 border border-slate-200 my-8"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-[#F9FAFB]">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-mono font-bold text-[#4355A5] bg-[#4355A5]/10 rounded-full border border-[#4355A5]/20 uppercase">
                    {selectedProjectModal.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#111111]">
                    {selectedProjectModal.title} — {selectedProjectModal.client}
                  </h3>
                </div>
                
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                
                {/* Featured Mockup Preview inside Modal */}
                {selectedProjectModal.featuredImage && (
                  <div className="w-full h-auto rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                    <img 
                      src={selectedProjectModal.featuredImage} 
                      alt={selectedProjectModal.title}
                      className="w-full h-auto block object-contain"
                    />
                  </div>
                )}

                {/* Stats Grid */}
                {selectedProjectModal.stats && (
                  <div className="grid grid-cols-3 gap-4 bg-[#F4F5F8] p-4 sm:p-6 rounded-2xl border border-slate-200/80">
                    {selectedProjectModal.stats.map((st, i) => (
                      <div key={i} className="text-center">
                        <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#18181B] block">
                          {st.value}
                        </span>
                        <span className="text-xs text-neutral-500 font-medium mt-1 block">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Overview */}
                <div>
                  <h4 className="font-display font-bold text-lg text-[#111111] mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#4355A5]" /> Overview
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {selectedProjectModal.description}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                    <h5 className="font-bold text-xs uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                      <Target className="w-4 h-4 text-amber-600" /> The Challenge
                    </h5>
                    <p className="text-xs text-amber-950/80 leading-relaxed">
                      {selectedProjectModal.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
                    <h5 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> The Growth Solution
                    </h5>
                    <p className="text-xs text-emerald-950/80 leading-relaxed">
                      {selectedProjectModal.solution}
                    </p>
                  </div>
                </div>

                {/* Footer Modal Actions */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span>Technologies:</span>
                    <span className="font-mono text-neutral-800">{selectedProjectModal.technologies}</span>
                  </div>

                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      setSelectedProjectModal(null);
                      onOpenConsultation();
                    }}
                    showArrow={true}
                  >
                    Discuss Similar Strategy
                  </Button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Footer CTA */}
      <CTA onOpenConsultation={onOpenConsultation} />

    </main>
  );
}
