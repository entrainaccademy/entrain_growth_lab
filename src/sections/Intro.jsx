import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Intro() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.48, 1],
    ['#F1EDE5', '#F1EDE5', '#4355A5']
  );
  const foreground = useTransform(
    scrollYProgress,
    [0, 0.48, 0.78],
    ['#211D19', '#211D19', '#FFFFFF']
  );
  const accent = useTransform(
    scrollYProgress,
    [0, 0.5, 0.82],
    ['#A0643F', '#A0643F', '#C7FF3D']
  );
  const firstLineOpacity = useTransform(scrollYProgress, [0.05, 0.28], [0.2, 1]);
  const secondLineOpacity = useTransform(scrollYProgress, [0.25, 0.52], [0.15, 1]);
  const thirdLineOpacity = useTransform(scrollYProgress, [0.48, 0.76], [0.12, 1]);
  const bodyOpacity = useTransform(scrollYProgress, [0.68, 0.9], [0, 1]);
  const bodyY = useTransform(scrollYProgress, [0.68, 0.9], [24, 0]);

  return (
    <section ref={sectionRef} className="philosophy-scroll">
      <motion.div className="philosophy-sticky" style={{ backgroundColor, color: foreground }}>
        <div className="philosophy-copy">
          <motion.h2 style={{ opacity: firstLineOpacity }}>We don’t chase attention.</motion.h2>
          <motion.h2 style={{ opacity: secondLineOpacity }}>We earn it with clarity,</motion.h2>
          <motion.h2 style={{ opacity: thirdLineOpacity, color: accent }}>then turn it into growth.</motion.h2>
        </div>

        <motion.div className="philosophy-foot" style={{ opacity: bodyOpacity, y: bodyY }}>
          <span>01 — Principle</span>
          <p>
            We study the business first, build with purpose, measure what matters,
            and keep refining until progress becomes a system.
          </p>
        </motion.div>

        <div className="philosophy-progress" aria-hidden="true">
          <motion.span style={{ scaleX: scrollYProgress, backgroundColor: accent }} />
        </div>
      </motion.div>
    </section>
  );
}
