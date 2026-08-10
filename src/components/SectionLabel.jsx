import React from 'react';
import Reveal from './Reveal';

export default function SectionLabel({ label, className = '' }) {
  if (!label) return null;

  return (
    <Reveal direction="down" delay={0.1} className={className}>
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#282828] text-xs font-mono font-bold tracking-widest text-[#C7FF3D] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF3D] animate-pulse" />
        <span>{label}</span>
      </div>
    </Reveal>
  );
}
