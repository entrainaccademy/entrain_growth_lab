import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function SectionHeading({
  badge,
  title,
  description,
  center = false,
  dark = false,
  className = '',
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {badge && (
        <AnimatedSection direction="up" delay={0.1}>
          <span
            className={`inline-block text-xs font-mono font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
              dark
                ? 'bg-white/10 text-slate-300'
                : 'bg-[#3B51A3]/10 text-[#3B51A3]'
            }`}
          >
            {badge}
          </span>
        </AnimatedSection>
      )}

      {title && (
        <AnimatedSection direction="up" delay={0.15}>
          <h2
            className={`font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 ${
              dark ? 'text-white' : 'text-[#090D16]'
            }`}
          >
            {title}
          </h2>
        </AnimatedSection>
      )}

      {description && (
        <AnimatedSection direction="up" delay={0.2}>
          <p
            className={`text-base sm:text-lg font-normal leading-relaxed ${
              dark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
