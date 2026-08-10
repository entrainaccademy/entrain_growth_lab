import React from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import { User } from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      role: 'Founder / Growth Strategist',
      title: '[FOUNDER NAME]',
      bio: 'Directs overall agency growth frameworks, unit economics analysis, and multi-channel campaign architectures.',
    },
    {
      id: 2,
      role: 'SEO Lead',
      title: '[SEO LEAD NAME]',
      bio: 'Specializes in technical SEO architecture, topical keyword topologies, and authority link acquisition strategy.',
    },
    {
      id: 3,
      role: 'Performance Marketing Lead',
      title: '[PERFORMANCE LEAD NAME]',
      bio: 'Manages Meta & Google ad spend efficiency, conversion funnels, and data attribution modeling.',
    },
    {
      id: 4,
      role: 'Creative / Content Lead',
      title: '[CREATIVE LEAD NAME]',
      bio: 'Oversees brand messaging, video ad scripts, social media assets, and editorial copy production.',
    },
    {
      id: 5,
      role: 'Web Development Lead',
      title: '[DEV LEAD NAME]',
      bio: 'Engineers lightning-fast React web platforms built strictly for conversion rate optimization and performance.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F6FAFC] text-[#101827] relative border-b border-[#101827]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionLabel label="TEAM & EXPERTISE" variant="light" className="mb-4" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal direction="up" delay={0.15}>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#101827] tracking-tight">
              The minds behind <br />
              <span className="text-[#4355A5]">your growth.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <p className="text-[#607080] text-base max-w-md font-light">
              Every client receives direct and dedicated focus from senior growth strategists — never passed around to junior account managers.
            </p>
          </Reveal>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.08} direction="up">
              <div className="group rounded-2xl bg-white border border-slate-200 p-7 flex flex-col justify-between h-full hover:border-[#4355A5] hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#EAF7FB] text-[#4355A5] flex items-center justify-center mb-6 group-hover:bg-[#4355A5] group-hover:text-white transition-colors">
                    <User className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase block mb-1">
                    {member.role}
                  </span>

                  <h3 className="font-display text-xl font-bold text-[#101827] mb-3">
                    {member.title}
                  </h3>

                  <p className="text-[#607080] text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-[#607080]">
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn" className="hover:text-[#4355A5] transition-colors p-1.5">
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter" className="hover:text-[#4355A5] transition-colors p-1.5">
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} aria-label="Email" className="hover:text-[#4355A5] transition-colors p-1.5">
                    <FaEnvelope className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
