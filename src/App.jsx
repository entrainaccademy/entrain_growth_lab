'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLocation } from './lib/router';
import { canonicalAliases } from './data/seo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ConsultationModal from './components/ConsultationModal';

import Home from './views/Home';
import About from './views/About';
import ServicesPage from './views/ServicesPage';
import WorkPage from './views/WorkPage';
import TestimonialsPage from './views/TestimonialsPage';
import ContactPage from './views/ContactPage';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsOfService from './views/TermsOfService';
import WorkDetails from './views/WorkDetails';
import Buckeez from './views/Buckeez';
import Cobolt from './views/cobolt';
import Culinary from './views/culinary';
import Entrainlabs from './views/Entrainlabs';
import BlogPage from './views/BlogPage';
import BlogPost from './views/BlogPost';
import CareersPage from './views/CareersPage';
import JobDetail from './views/JobDetail';
import NotFound from './views/NotFound';

import DigitalMarketing from './views/DigitalMarketing';
import SocialMediaMarketing from './views/SocialMediaMarketing';
import SeoService from './views/SEO';
import PerformanceMarketing from './views/PerformanceMarketing';
import ContentMarketing from './views/ContentMarketing';
import BrandingCreativeDesign from './views/BrandingCreativeDesign';
import WebsiteDesignDevelopment from './views/WebsiteDesignDevelopment';
import MarketingStrategyConsulting from './views/MarketingStrategyConsulting';

const pages = {
  '/': Home,
  '/about': About,
  '/services': ServicesPage,
  '/services/digital-marketing': DigitalMarketing,
  '/services/social-media-marketing': SocialMediaMarketing,
  '/services/seo': SeoService,
  '/services/performance-marketing': PerformanceMarketing,
  '/services/content-marketing': ContentMarketing,
  '/services/branding-creative-design': BrandingCreativeDesign,
  '/services/website-design-development': WebsiteDesignDevelopment,
  '/services/marketing-strategy-consulting': MarketingStrategyConsulting,
  '/work': WorkPage,
  '/workdetails': WorkDetails,
  '/buckeez': Buckeez,
  '/cobolt': Cobolt,
  '/culinary': Culinary,
  '/entrainlabs': Entrainlabs,
  '/blog': BlogPage,
  '/testimonials': TestimonialsPage,
  '/contact': ContactPage,
  '/careers': CareersPage,
  '/privacy': PrivacyPolicy,
  '/terms': TermsOfService,
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function CurrentPage({ pathname, onOpenConsultation }) {
  const cleanPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const canonicalPath = canonicalAliases[cleanPath] || cleanPath;
  const Page = pages[canonicalPath]
    || (canonicalPath.startsWith('/blog/') ? BlogPost : null)
    || (canonicalPath.startsWith('/careers/') ? JobDetail : null)
    || NotFound;

  return <Page onOpenConsultation={onOpenConsultation} />;
}

function AnimatedRoutes({ onOpenConsultation }) {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10, filter: 'blur(3px)' }}
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <CurrentPage pathname={pathname} onOpenConsultation={onOpenConsultation} />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <CustomCursor />

      <div className="flex flex-col min-h-screen relative font-sans text-[#101827] bg-[#F3F1EE] selection:bg-[#4355A5] selection:text-white">
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        <div className="flex-grow">
          <AnimatedRoutes onOpenConsultation={() => setIsConsultationOpen(true)} />
        </div>

        <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </div>
    </>
  );
}
