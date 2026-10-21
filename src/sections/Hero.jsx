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

      <div className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-14 sm:pb-20 relative z-10 w-full">
        <Reveal direction="up" delay={0.1}>
          <h1 className="max-w-6xl font-display text-[clamp(2.5rem,5vw,5.5rem)] font-semibold tracking-[-0.05em] leading-[1.04]">
            Digital Marketing Agency in Kerala
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <p className="mt-5 sm:mt-7 max-w-5xl font-display text-[clamp(2rem,4.5vw,4.5rem)] font-medium tracking-[-0.035em] leading-[1.08] text-[#4355A5]">
            Growth isn&apos;t luck. It&apos;s strategy.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.25}>
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-[#101827]/65 leading-relaxed">
            We help businesses build visibility, attract customers, and generate leads through tailored digital marketing strategy.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.3}>
          <div className="hero-actions mt-7 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={onOpenConsultation}>Book a Free Consultation</Button>
            <Button variant="secondary" size="lg" to="/services">Explore Our Services</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
