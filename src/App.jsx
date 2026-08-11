import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ConsultationModal from './components/ConsultationModal';

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
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
      <CustomCursor />

      <div className="flex flex-col min-h-screen relative font-sans text-[#101827] bg-[#2596BE] selection:bg-[#4355A5] selection:text-white">
        <Navbar onOpenConsultation={handleOpenConsultation} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/services" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/work" element={<WorkPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/workdetails" element={<WorkDetails onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/buckeez" element={<Buckeez onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/cobolt" element={<Cobolt onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/culinary" element={<Culinary onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/entrainlabs" element={<Entrainlabs onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/testimonials" element={<TestimonialsPage onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
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
