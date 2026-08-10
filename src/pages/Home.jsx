import React from 'react';
import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import WhyEntrain from '../sections/WhyEntrain';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Work from '../sections/Work';
import Testimonials from '../sections/Testimonials';
import BigStatement from '../sections/BigStatement';
import Team from '../sections/Team';
import CTA from '../sections/CTA';

export default function Home({ onOpenConsultation }) {
  return (
    <main>
      <Hero onOpenConsultation={onOpenConsultation} />
      <Intro />
      <WhyEntrain />
      <Services onOpenConsultation={onOpenConsultation} />
      <Process />
      <Work onOpenConsultation={onOpenConsultation} />
      <Testimonials />
      <BigStatement onOpenConsultation={onOpenConsultation} />
      <Team />
      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
