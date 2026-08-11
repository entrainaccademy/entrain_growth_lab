import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { mainNavigation, legalNavigation } from '../data/navigation';

function Magnetic({ children, className = '', to, href, onClick, ...props }) {
  const handleMove = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `perspective(800px) translate(${x * 0.28}px, ${y * 0.28}px) rotateX(${-y * 0.08}deg) rotateY(${x * 0.08}deg) scale(1.04)`;
  };

  const handleLeave = (event) => {
    event.currentTarget.style.transform = '';
  };

  const shared = {
    className: `footer-glass-pill ${className}`,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    ...props,
  };

  if (to) return <Link to={to} {...shared}>{children}</Link>;
  if (href) return <a href={href} {...shared}>{children}</a>;
  return <button type="button" {...shared}>{children}</button>;
}

export default function Footer({ onOpenConsultation }) {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end end'],
  });
  const giantY = useTransform(scrollYProgress, [0, 1], ['12vh', '0vh']);
  const giantScale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const giantOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.45, 1]);
  const currentYear = new Date().getFullYear();

  return (
    <div ref={wrapperRef} className="cinematic-footer-wrapper">
      <footer className="cinematic-footer">
        <div className="footer-aurora" />
        <div className="footer-grid" />

        <motion.div
          className="footer-giant-text"
          style={{ y: giantY, scale: giantScale, opacity: giantOpacity }}
          aria-hidden="true"
        >
          ENTRAIN
        </motion.div>

        <div className="footer-center">
          <span className="footer-kicker">Entrain Growth Lab</span>
          <h2>Ready to grow?</h2>
          <p>Let’s build a clear strategy and turn it into measurable momentum.</p>

          <div className="footer-primary-actions">
            <Magnetic className="footer-primary-pill" onClick={onOpenConsultation}>
              Book a Free Consultation <ArrowUpRight />
            </Magnetic>
            <Magnetic className="footer-primary-pill" href="mailto:entraingrowthpartners@gmail.com">
              <Mail /> Email Us
            </Magnetic>
            <Magnetic className="footer-primary-pill" href="tel:+919745235226">
              <Phone /> +91 97452 35226
            </Magnetic>
          </div>

          <div className="footer-link-pills">
            {mainNavigation.map((item) => (
              <Magnetic key={item.path} to={item.path}>{item.name}</Magnetic>
            ))}
            {legalNavigation.map((item) => (
              <Magnetic key={item.path} to={item.path}>{item.name}</Magnetic>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Entrain Growth Lab. All rights reserved.</p>
          <Magnetic className="footer-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <ArrowUp />
          </Magnetic>
        </div>
      </footer>
    </div>
  );
}
