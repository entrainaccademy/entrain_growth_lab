import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import logoImg from '../assets/entrain-growth-logo.png';
import { mainNavigation } from '../data/navigation';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-white/95 backdrop-blur-md border-b border-[#4355A5]/15 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="p-1.5 rounded-xl  shadow-sm transition-transform group-hover:scale-105">
              <img
                src={logoImg}
                alt="Entrain Growth Lab"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
          
          </NavLink>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md transition-all duration-300 ${
              isScrolled
                ? 'bg-[#F6FAFC] border-slate-200 shadow-inner'
                : 'bg-white/10 border-white/20'
            }`}
          >
            {mainNavigation.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-xs lg:text-sm font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#4355A5] text-white shadow-md'
                      : isScrolled
                      ? 'text-[#101827] hover:text-[#4355A5] hover:bg-[#4355A5]/10'
                      : 'text-white hover:bg-white/20'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant={isScrolled ? 'primary' : 'white'}
              size="sm"
              showArrow={true}
              onClick={onOpenConsultation}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl border transition-colors focus:outline-none ${
              isScrolled
                ? 'bg-white text-[#101827] border-slate-200 hover:border-[#4355A5]'
                : 'bg-white/15 text-white border-white/20 hover:bg-white/30'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#4355A5]" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#101827] text-white pt-28 px-6 pb-12 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#2596BE] uppercase bg-[#2596BE]/10 px-3 py-1 rounded-full border border-[#2596BE]/20">
                // MENU
              </span>
              <div className="flex flex-col space-y-4">
                {mainNavigation.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-3xl font-display font-extrabold block py-2 border-b border-white/10 transition-colors ${
                          isActive ? 'text-[#2596BE]' : 'text-white hover:text-[#2596BE]'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center"
                showArrow={true}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
              >
                Book a Call
              </Button>
              <p className="text-center text-xs font-mono text-[#9AA8B5]">
                Growth Isn't Luck. It's Strategy.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
