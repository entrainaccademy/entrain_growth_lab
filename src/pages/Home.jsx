import React from 'react';
import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import Clients from '../sections/Clients';
import WhyEntrain from '../sections/WhyEntrain';
import OfficeHours from '../sections/OfficeHours';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Work from '../sections/Work';
// import Testimonials from '../sections/Testimonials';
import BigStatement from '../sections/BigStatement';

export default function Home({ onOpenConsultation }) {
  return (
    <main>
      <Hero onOpenConsultation={onOpenConsultation} />
      <Clients />
      <Intro />
      <WhyEntrain />
      <Services onOpenConsultation={onOpenConsultation} />
      <Process />
      <Work onOpenConsultation={onOpenConsultation} />
      <OfficeHours />
      {/* <Testimonials /> */}
      <BigStatement onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
