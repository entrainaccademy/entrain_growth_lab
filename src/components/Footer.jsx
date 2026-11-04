import React, { useRef } from 'react';
import { Link, useLocation } from '../lib/router';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { mainNavigation, legalNavigation, socialLinks } from '../data/navigation';

const socialIcons = { Instagram: FaInstagram, Facebook: FaFacebookF, LinkedIn: FaLinkedinIn };

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

const defaultCta = {
  heading: 'Ready to grow?',
  text: 'Let’s build a clear strategy and turn it into measurable momentum.',
};

const pageCtas = {
  '/services': { heading: 'Which service fits you?', text: 'Tell us where your business is today and we’ll recommend the right mix of services.' },
  '/work': { heading: 'Want results like these?', text: 'Let’s plan the strategy that gets your brand there.' },
  '/testimonials': { heading: 'Want to be our next success story?', text: 'Join the businesses growing steadily with Entrain.' },
  '/blog': { heading: 'Need advice for your business?', text: 'Skip the guesswork and talk to our team about a plan that fits.' },
  '/services/seo': { heading: 'Ready to grow your search visibility?', text: 'Get a clear SEO plan that brings in the right traffic.' },
  '/services/performance-marketing': { heading: 'Ready to scale your ad results?', text: 'Let’s build campaigns that turn spend into measurable returns.' },
  '/services/social-media-marketing': { heading: 'Ready to grow your social presence?', text: 'Let’s build content and campaigns your audience engages with.' },
  '/services/content-marketing': { heading: 'Ready to tell your story?', text: 'Let’s create content that earns attention and drives action.' },
  '/services/digital-marketing': { heading: 'Ready to grow online?', text: 'Let’s build a digital strategy that delivers measurable momentum.' },
  '/services/branding-creative-design': { heading: 'Ready to build a stronger brand?', text: 'Let’s craft a brand identity that people remember.' },
  '/services/marketing-strategy-consulting': { heading: 'Ready for a clear growth plan?', text: 'Let’s map the strategy that moves your business forward.' },
  '/services/website-design-development': { heading: 'Ready for a website that converts?', text: 'Let’s design and build a site that works as hard as you do.' },
};

export default function Footer({ onOpenConsultation }) {
  const { pathname } = useLocation();
  const cta = pageCtas[pathname.replace(/\/$/, '')] || defaultCta;
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
          <span className="footer-kicker">Entrain Growth Partners</span>
          <h2>{cta.heading}</h2>
          <p>{cta.text}</p>

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

          <address className="footer-address">
            <MapPin aria-hidden="true" />
            <span>Entrain Academy, Veemboor Narukara, Ernad, Malappuram-676122, Kerala, India</span>
          </address>

          <div className="footer-link-pills">
            {mainNavigation.map((item) => (
              <Magnetic key={item.path} to={item.path}>{item.name}</Magnetic>
            ))}
            {legalNavigation.map((item) => (
              <Magnetic key={item.path} to={item.path}>{item.name}</Magnetic>
            ))}
          </div>

          <div className="footer-link-pills">
            {socialLinks.map(({ name, url }) => {
              const Icon = socialIcons[name];
              return (
                <Magnetic key={name} className="footer-social-pill" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Entrain Growth Partners on ${name}`}>
                  <Icon /> {name}
                </Magnetic>
              );
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Entrain Growth Partners. All rights reserved.</p>
          <Magnetic className="footer-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <ArrowUp />
          </Magnetic>
        </div>
      </footer>
    </div>
  );
}
