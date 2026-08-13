import React from 'react';
import { Sparkles, Search, Layout, Palette, Target } from 'lucide-react';

const ICONS = { Sparkles, Search, Layout, Palette, Target };

const GRADIENTS = {
  'Case Studies': 'from-[#2596BE] via-[#4355A5] to-[#34448F]',
  SEO: 'from-[#4355A5] to-[#18181B]',
  'Web Design': 'from-[#34448F] to-[#2596BE]',
  Branding: 'from-[#101827] to-[#4355A5]',
  Strategy: 'from-[#18181B] via-[#34448F] to-[#4355A5]',
};

export default function BlogCover({ category, iconName, image, alt = '', className = '' }) {
  if (image) {
    return (
      <div className={`relative w-full overflow-hidden bg-[#4355A5] ${className}`}>
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-contain object-center mix-blend-screen"
        />
      </div>
    );
  }

  const Icon = ICONS[iconName] || Sparkles;
  const gradient = GRADIENTS[category] || GRADIENTS['Case Studies'];

  return (
    <div className={`relative w-full overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative h-full w-full flex items-center justify-center">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white/90" strokeWidth={1.5} />
      </div>
    </div>
  );
}
