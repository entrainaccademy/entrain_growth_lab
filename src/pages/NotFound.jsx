import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Briefcase, FileText, Mail, Home } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  const helpfulLinks = [
    { title: 'Explore Services', desc: 'SEO, Ads, Social Media & Web Design', url: '/services', icon: Compass },
    { title: 'Client Work', desc: 'Case studies & measurable client results', url: '/work', icon: Briefcase },
    { title: 'Growth Journal', desc: 'Playbooks and organic marketing insights', url: '/blog', icon: FileText },
    { title: 'Contact Us', desc: 'Book a free growth strategy consultation', url: '/contact', icon: Mail },
  ];

  return (
    <main className="min-h-[80vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F3F1EE] text-[#101827] flex items-center justify-center font-sans">
      <div className="max-w-3xl mx-auto text-center">
        {/* Subtle Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#4355A5]/10 text-[#4355A5] text-xs font-mono font-bold uppercase tracking-widest mb-6">
          Error 404 • Page Not Found
        </span>

        {/* Heading */}
        <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-[#101827] mb-6">
          Lost in Strategy?
        </h1>

        <p className="text-neutral-600 text-lg sm:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
          The link you followed may be broken or the page may have been moved. Let's get you back to growing your business.
        </p>

        {/* Primary Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" size="lg" to="/" showArrow={false} className="w-full sm:w-auto">
            <span className="flex items-center gap-2">
              <Home className="w-4 h-4" /> Return to Homepage
            </span>
          </Button>
          <Button variant="secondary" size="lg" to="/services" showArrow={false} className="w-full sm:w-auto">
            <span className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Browse All Services
            </span>
          </Button>
        </div>

        {/* Helpful Links Grid */}
        <div className="text-left pt-10 border-t border-neutral-300/80">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 mb-6 text-center">
            Helpful Starting Points
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {helpfulLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.url}
                  className="group bg-white p-5 rounded-2xl border border-neutral-200/80 hover:border-[#4355A5]/50 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F3F1EE] group-hover:bg-[#4355A5] group-hover:text-white transition-colors flex items-center justify-center shrink-0 text-[#4355A5]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-[#101827] group-hover:text-[#4355A5] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-light mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
