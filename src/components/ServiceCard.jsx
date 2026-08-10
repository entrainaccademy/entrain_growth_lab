import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ServiceCard({
  number,
  title,
  shortTitle,
  description,
  includes = [],
  icon: Icon,
  isActive = false,
  onSelect,
  index = 0,
}) {
  return (
    <AnimatedSection delay={index * 0.08} direction="up" className="h-full">
      <div
        onClick={onSelect}
        className={`group relative h-full p-7 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
          isActive
            ? 'bg-white border-[#3B51A3] shadow-md'
            : 'bg-white border-slate-200 hover:border-[#3B51A3]'
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono font-bold tracking-wider text-[#3B51A3] bg-[#3B51A3]/10 px-2.5 py-1 rounded-full">
              {number}
            </span>
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                isActive
                  ? 'bg-[#3B51A3] text-white'
                  : 'bg-slate-100 text-[#090D16] group-hover:bg-[#3B51A3] group-hover:text-white'
              }`}
            >
              {Icon && <Icon className="w-5 h-5" />}
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-[#090D16] mb-2 group-hover:text-[#3B51A3] transition-colors">
            {title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {description}
          </p>

          {includes.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-slate-100">
              {includes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <Check className="w-3.5 h-3.5 text-[#3B51A3] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#090D16] group-hover:text-[#3B51A3] transition-colors">
          <span>Explore Capabilities</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </AnimatedSection>
  );
}
