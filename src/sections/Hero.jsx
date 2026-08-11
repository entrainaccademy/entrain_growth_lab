import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-[#F3F1EE] text-[#101827] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <MeshGradient
          className="h-full w-full"
          colors={['#F3F1EE', '#4355A5', '#2596BE', '#7E91F2', '#F3F1EE']}
          speed={0.2}
          distortion={0.85}
          swirl={0.7}
          grainMixer={0.08}
          grainOverlay={0.04}
          minPixelRatio={1}
          maxPixelCount={1920 * 1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3F1EE] via-[#F3F1EE]/75 to-[#F3F1EE]/10" />
      </div>

      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20 relative z-10 w-full">
        <Reveal direction="up" delay={0.1}>
          <h1 className="max-w-6xl font-display text-[clamp(3.5rem,8.6vw,8.8rem)] font-semibold tracking-[-0.055em] leading-[0.9]">
            Growth isn&apos;t luck.<br />It&apos;s <span className="text-[#4355A5]">strategy.</span>
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-[#101827]/65 leading-relaxed">
            Entrain Growth Lab helps businesses build sustainable, organic growth through tailored strategy, consistent execution, and continuous improvement.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={onOpenConsultation}>Book a Free Consultation</Button>
            <Button variant="secondary" size="lg" to="/services">Explore Our Services</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
