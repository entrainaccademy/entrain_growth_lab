import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ConsultationModal from './components/ConsultationModal';
import SEO from './components/SEO';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import WorkDetails from './pages/WorkDetails';
import Buckeez from './pages/Buckeez';
import Cobolt from './pages/cobolt';
import Culinary from './pages/culinary';
import Entrainlabs from './pages/Entrainlabs';

// Dedicated 8 Service Detail Pages
import DigitalMarketing from './pages/DigitalMarketing';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import SeoService from './pages/SEO';
import PerformanceMarketing from './pages/PerformanceMarketing';
import ContentMarketing from './pages/ContentMarketing';
import BrandingCreativeDesign from './pages/BrandingCreativeDesign';
import WebsiteDesignDevelopment from './pages/WebsiteDesignDevelopment';
import MarketingStrategyConsulting from './pages/MarketingStrategyConsulting';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes({ onOpenConsultation }) {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10, filter: 'blur(3px)' }}
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home onOpenConsultation={onOpenConsultation} />} />
          <Route path="/about" element={<About onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services" element={<ServicesPage onOpenConsultation={onOpenConsultation} />} />

          {/* Service Detail Routes */}
          <Route path="/services/digital-marketing" element={<DigitalMarketing onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/seo" element={<SeoService onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/content-marketing" element={<ContentMarketing onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/branding-creative-design" element={<BrandingCreativeDesign onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/website-design-development" element={<WebsiteDesignDevelopment onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/marketing-strategy-consulting" element={<MarketingStrategyConsulting onOpenConsultation={onOpenConsultation} />} />

          {/* Alias Service Routes */}
          <Route path="/services/branding" element={<BrandingCreativeDesign onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/meta-ads" element={<PerformanceMarketing onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/google-ads" element={<PerformanceMarketing onOpenConsultation={onOpenConsultation} />} />
          <Route path="/services/web-design-development" element={<WebsiteDesignDevelopment onOpenConsultation={onOpenConsultation} />} />

          <Route path="/work" element={<WorkPage onOpenConsultation={onOpenConsultation} />} />
          <Route path="/workdetails" element={<WorkDetails onOpenConsultation={onOpenConsultation} />} />
          <Route path="/buckeez" element={<Buckeez onOpenConsultation={onOpenConsultation} />} />
          <Route path="/cobolt" element={<Cobolt onOpenConsultation={onOpenConsultation} />} />
          <Route path="/culinary" element={<Culinary onOpenConsultation={onOpenConsultation} />} />
          <Route path="/entrainlabs" element={<Entrainlabs onOpenConsultation={onOpenConsultation} />} />
          <Route path="/testimonials" element={<TestimonialsPage onOpenConsultation={onOpenConsultation} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <CustomCursor />

      <div className="flex flex-col min-h-screen relative font-sans text-[#101827] bg-[#F3F1EE] selection:bg-[#4355A5] selection:text-white">
        <Navbar onOpenConsultation={handleOpenConsultation} />

        <div className="flex-grow">
          <AnimatedRoutes onOpenConsultation={handleOpenConsultation} />
        </div>

        <Footer onOpenConsultation={handleOpenConsultation} />

        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
        />
      </div>
    </Router>
  );
}
