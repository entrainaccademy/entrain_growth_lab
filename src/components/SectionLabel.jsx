import React from 'react';
import Reveal from './Reveal';

export default function SectionLabel({ label, className = '' }) {
  if (!label) return null;

  return (
    <Reveal direction="down" delay={0.1} className={className}>
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4355A5]/10 border border-[#4355A5]/20 text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4355A5] animate-pulse" />
        <span>{label}</span>
      </div>
    </Reveal>
  );
}
