import React from 'react';
import Hero from '../sections/Hero';
import Intro from '../sections/Intro';
import Clients from '../sections/Clients';
// import WhyEntrain from '../sections/WhyEntrain';
import OfficeHours from '../sections/OfficeHours';
import Faq from '../sections/Faq';
import Services from '../sections/Services';
import Process from '../sections/Process';
import WhyChooseEntrain from '../sections/WhyChooseEntrain';
import Work from '../sections/Work';
// import Testimonials from '../sections/Testimonials';
import BigStatement from '../sections/BigStatement';

export default function Home({ onOpenConsultation }) {
  return (
    <main>
      <Hero onOpenConsultation={onOpenConsultation} />
      <Clients />
      <Intro />
      {/* <WhyEntrain /> */}
      <Services onOpenConsultation={onOpenConsultation} />
      <Process />
      <WhyChooseEntrain />
      <Work onOpenConsultation={onOpenConsultation} />
      <OfficeHours />
      <Faq />
      {/* <Testimonials /> */}
      <BigStatement />
    </main>
  );
}
