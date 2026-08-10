import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import logoImg from '../assets/entrain-growth-logo.png';
import Button from './Button';
import { mainNavigation, legalNavigation } from '../data/navigation';

export default function Footer({ onOpenConsultation }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
    { name: 'Facebook', icon: FaFacebookF, href: '#' },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F0] pt-20 pb-12 border-t border-[#282828] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Callout Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-[#282828] items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#C7FF3D] uppercase bg-[#141414] px-3 py-1 rounded-full border border-[#282828] inline-block">
              // ENTRAIN GROWTH LAB
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Let's build something that grows.
            </h3>
            <p className="text-[#9A9A94] text-base sm:text-lg max-w-xl font-light">
              "Growth Isn't Luck. It's Strategy." Partner with us to engineer sustainable organic momentum.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button
              variant="primary"
              size="lg"
              showArrow={true}
              onClick={onOpenConsultation}
            >
              Get Your Free Strategy Call
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">

          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 bg-white/90 p-2.5 rounded-xl">
              <img
                src={logoImg}
                alt="Entrain Growth Lab"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-[#9A9A94] text-sm leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">Growth Partners.</strong> We help businesses build sustainable, organic growth through research-backed strategy, disciplined execution, and continuous optimization.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => e.preventDefault()}
                    className="w-9 h-9 rounded-lg bg-[#141414] border border-[#282828] text-[#9A9A94] hover:text-[#C7FF3D] hover:border-[#C7FF3D] flex items-center justify-center transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-[#C7FF3D] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {mainNavigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#9A9A94] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div>
            <h4 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-[#C7FF3D] mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-[#9A9A94]">
              <li><Link to="/services" className="hover:text-white transition-colors">SEO & Organic Strategy</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Paid Advertising</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Content Marketing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Web Design & Dev</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Branding & Identity</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Placeholders */}
          <div>
            <h4 className="font-display text-xs font-mono font-bold uppercase tracking-widest text-[#C7FF3D] mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[#9A9A94]">
              <p>Email:</p>
              <p className="text-white font-medium">[EMAIL ADDRESS]</p>
              <p className="pt-2">Phone:</p>
              <p className="text-white font-medium">[PHONE NUMBER]</p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="text-xs text-[#C7FF3D] hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>Go to Contact Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#282828] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9A9A94] gap-4">
          <p>© {currentYear} Entrain Growth Lab. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {legalNavigation.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
