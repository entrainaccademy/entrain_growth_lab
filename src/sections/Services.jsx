import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const panelMotion = {
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -24, filter: 'blur(8px)' },
};

export default function Services() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, -(services.length - 1) * 24]);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const next = Math.min(services.length - 1, Math.floor(progress * services.length));
    setActiveIndex((current) => (current === next ? current : next));
  });

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section
      ref={sectionRef}
      id="services-section"
      className="relative h-[600vh] bg-[#E9ECF7] text-[#111827] border-y border-[#111827]/10"
    >
      <div className="services-sticky overflow-hidden">
        <div className="services-stage">
          <div className="lg:absolute lg:top-9 xl:top-12 left-5 sm:left-8 lg:left-12 xl:left-20 z-20 flex items-center gap-3 mb-12 lg:mb-0">
            <span className="w-2 h-2 rounded-full bg-[#FF6B57] ring-4 ring-[#111827]/10" />
            <span className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase">What we do</span>
          </div>

          {/* Desktop circular service index */}
          <motion.div
            style={{ rotate: wheelRotation }}
            className="services-wheel"
            aria-hidden="true"
          >
            {services.map((service, index) => {
              const angle = index * 24;
              return (
                <div
                  key={service.id}
                  className="services-wheel-spoke"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div className="services-wheel-label" style={{ transform: `translateY(-50%) rotate(${-angle}deg)` }}>
                    <span className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${index === activeIndex ? 'bg-[#FF6B57] ring-4 ring-[#111827]/10' : 'bg-[#111827]/15'}`} />
                    <span className={`font-display text-3xl transition-colors duration-500 ${index === activeIndex ? 'text-[#111827]' : 'text-[#111827]/25'}`}>
                      {service.number}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Mobile: the circular index is cropped above the content. */}
          <div className="services-mobile-arc" aria-hidden="true">
            {services.map((service, index) => {
              const angle = (index - activeIndex) * 18;
              return (
                <motion.div
                  key={service.id}
                  className="services-mobile-spoke"
                  animate={{ rotate: angle }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="services-mobile-number"
                    animate={{ rotate: -angle, opacity: Math.abs(index - activeIndex) > 2 ? 0 : 1 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className={index === activeIndex ? 'is-active' : ''} />
                    <strong className={index === activeIndex ? 'is-active' : ''}>{service.number}</strong>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className="services-layout">
            <div className="relative min-h-[410px] sm:min-h-[380px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  {...panelMotion}
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <span className="font-mono text-xs tracking-[0.2em] text-[#4A56B2] uppercase">
                    {activeService.number} / {String(services.length).padStart(2, '0')}
                  </span>
                  <h2 className="services-title font-display font-semibold mt-5 max-w-[760px]">
                    {activeService.title}
                  </h2>
                  <p className="text-[#111827]/60 text-base sm:text-lg leading-relaxed max-w-xl mt-7">
                    {activeService.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-7">
                    {activeService.deliverables.slice(0, 3).map((item) => (
                      <span key={item} className="px-4 py-2 rounded-full border border-[#111827]/12 bg-white/45 text-[#111827]/75 text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link to="/services" className="group inline-flex items-center gap-2 mt-9 text-sm font-bold border-b border-[#FF6B57] pb-1">
                    Explore this service
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <div className="services-mobile-visual">
                    <motion.div
                      key={`mobile-${activeService.id}`}
                      initial={{ opacity: 0, scale: 0.82, rotate: -12 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      className="services-mobile-icon"
                    >
                      <ActiveIcon strokeWidth={1.25} />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="services-visual">
              <div className="absolute w-[72%] h-[72%] bg-[#5369D8]/18 rounded-full blur-3xl" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.72, rotate: -18 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.78, rotate: 18 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-[54%] aspect-square rounded-[38%] bg-[#4A56B2] text-white shadow-[0_35px_90px_rgba(52,61,139,0.28)] flex items-center justify-center"
                >
                  <ActiveIcon strokeWidth={1.25} className="w-[42%] h-[42%]" />
                  <span className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-[#FF6B57] text-white border-8 border-[#E9ECF7] flex items-center justify-center font-mono font-bold">
                    {activeService.number}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-9 xl:bottom-12 left-1/2 -translate-x-1/2 items-center gap-3 text-[10px] font-mono tracking-[0.18em] uppercase text-[#111827]/40">
            <span className="w-10 h-px bg-[#111827]/25" /> Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
