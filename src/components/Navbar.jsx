import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import logo from '../assets/entrain-growth-logo-cropped.png';
import { mainNavigation } from '../data/navigation';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const hasReadableBackground = isScrolled || location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasReadableBackground
            ? 'py-3 sm:py-3.5 bg-white/55 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_30px_rgba(16,24,39,0.08)]'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="transition-transform group-hover:scale-105">
              <img src={logo} alt="Entrain Growth Lab" className="h-7 sm:h-8 lg:h-9 w-auto object-contain" />
            </div>
          </NavLink>

          <nav
            className={`hidden md:flex items-center gap-1 lg:gap-1.5 p-1 sm:p-1.5 rounded-full border backdrop-blur-md transition-all duration-300 ${
              hasReadableBackground
                ? 'bg-[#F6FAFC] border-slate-200 shadow-inner'
                : 'bg-white/10 border-white/20'
            }`}
          >
            {mainNavigation.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#4355A5] text-white shadow-md'
                      : hasReadableBackground
                      ? 'text-[#101827] hover:text-[#4355A5] hover:bg-[#4355A5]/10'
                      : 'text-white hover:bg-white/20'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant={hasReadableBackground ? 'primary' : 'white'} size="sm" showArrow onClick={onOpenConsultation}>
              Book a Call
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:9745235226"
              className={`p-2.5 rounded-xl border transition-all shadow-sm flex items-center justify-center ${
                hasReadableBackground
                  ? 'bg-[#4355A5] text-white border-[#4355A5] hover:bg-[#34458F]'
                  : 'bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-md'
              }`}
              aria-label="Call 9745235226"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-xl border transition-colors focus:outline-none flex items-center justify-center ${
                hasReadableBackground
                  ? 'bg-white text-[#101827] border-slate-200 hover:border-[#4355A5]'
                  : 'bg-white/15 text-white border-white/20 hover:bg-white/30'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#4355A5]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#101827] text-white pt-24 sm:pt-28 px-6 sm:px-8 pb-8 sm:pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex flex-col space-y-2 sm:space-y-3">
                {mainNavigation.map((link, idx) => (
                  <motion.div key={link.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-2xl sm:text-3xl font-display font-extrabold block py-2.5 border-b border-white/10 transition-colors ${
                          isActive ? 'text-[#4355A5]' : 'text-white hover:text-[#4355A5]'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6">
              <a href="tel:9745235226" className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#4355A5] text-white font-bold text-sm hover:bg-[#34458F] transition-all shadow-lg shadow-[#4355A5]/25">
                <Phone className="w-4 h-4" />
                <span>Call Us: +91 9745235226</span>
              </a>
              <Button
                variant="white"
                size="lg"
                className="w-full justify-center py-3.5"
                showArrow
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
              >
                Book a Call
              </Button>
              <p className="text-center text-xs font-mono text-[#9AA8B5]">Growth Isn't Luck. It's Strategy.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
