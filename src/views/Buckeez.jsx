import React from 'react';
import Button from '../components/Button';

const services = ['Digital Marketing Strategy', 'Pre-Launch Marketing', 'Social Media Management', 'Food Photography', 'Creative Content', 'Video Production', 'Website Development', 'SEO'];

const initiatives = [
  ['Pre-Launch Marketing & Brand Awareness', "We began promoting Buckeez before its opening to introduce the brand and create awareness among potential customers. Our pre-launch content built curiosity, presented the brand's identity, and prepared an audience for the restaurant's arrival. After launch, we continued with consistent social media marketing to keep the brand visible and connected with customers."],
  ['Social Media Marketing & Content Creation', "We developed a content strategy focused on Buckeez's food, brand personality, and customer experience. Our team created Instagram reels, creative posters, product highlights, and promotional content featuring fried chicken, burgers, wraps, and other menu items. Regular content helped maintain audience interest and encourage interactions."],
  ['Food Photography & Video Production', "Food presentation plays an important role in restaurant marketing. We produced food photography and short-form videos to highlight Buckeez's menu items in an appealing and professional way. From crispy fried chicken to burgers and wraps, our visual content encouraged customers to explore the menu."],
  ['Website Development & SEO', 'We developed an SEO-friendly restaurant website to give Buckeez a stronger online presence beyond social media. Our website strategy focused on clear menu information, easy navigation, mobile-friendly design, and search visibility. We also worked on SEO content and optimization to help customers discover Buckeez online.'],
  ['Ongoing Brand Marketing', 'Our marketing work continued after the restaurant opened. We created promotional campaigns, food-focused reels, creative designs, and social media content to maintain brand awareness and support customer engagement. The approach focused on consistent organic content and long-term brand recognition rather than paid advertising.']
];

const results = [
  ['Brand Awareness', 'Established and maintained an active digital presence through consistent marketing.'],
  ['Organic Social Media Growth', 'Supported Instagram reach, audience engagement, and brand visibility through regular content.'],
  ['Customer Engagement', 'Encouraged customer interactions through food videos, creative posts, and promotional campaigns.'],
  ['Website & SEO', 'Built a digital platform where customers can discover the brand, explore its menu, and find relevant information.'],
  ['Product Visibility', "Showcased Buckeez's food offerings through professional photography and engaging visual content."],
  ['Business Growth', "Supported the restaurant's ongoing marketing efforts to attract customers and encourage sales."]
];

const profiles = [
  ['/images/case-studies/buckeez-instagram.png', 'Buckeez on Instagram', 'Buckeez Instagram profile screenshot showing 143K followers'],
  ['/images/case-studies/buckeez-facebook.png', 'Buckeez on Facebook', 'Buckeez Facebook profile screenshot showing 53K followers'],
  ['/images/case-studies/buckeez-youtube.png', 'Buckeez on YouTube', 'Buckeez YouTube channel screenshot showing 9.11K subscribers']
];

export default function Buckeez({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 bg-[#F3F1EE] text-[#101827] min-h-screen">
      <article className="pt-8 sm:pt-12 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-5xl">Buckeez</h1>
          <p className="mt-3 max-w-3xl text-lg sm:text-2xl leading-relaxed text-neutral-600">Building a fried chicken brand through digital marketing</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-base sm:text-lg text-neutral-700">
            <a href="https://www.buckeezfried.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4355A5] hover:underline">www.buckeezfried.com ↗</a>
            <p><strong className="text-[#101827]">Industry:</strong> Food &amp; Restaurant</p>
            <p><strong className="text-[#101827]">Brand:</strong> Buckeez – Fried Chicken Restaurant</p>
          </div>
          <div className="mt-5">
            <p className="font-semibold mb-3">Services</p>
            <div className="flex flex-wrap gap-2">{services.map((service) => <span key={service} className="rounded-full bg-white border border-slate-200 px-3 py-1.5 text-sm text-neutral-700">{service}</span>)}</div>
          </div>
        </header>

        <div className="w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900/5 mb-16">
          <img src="/images/buckeezmockup.png" alt="Buckeez website showcase" className="w-full h-auto block" />
        </div>
        <figure className="max-w-4xl mx-auto mb-16">
          <img src="/images/buckeez-color-palette.png" alt="Buckeez brand color palette" loading="lazy" className="w-full h-auto block rounded-2xl" />
        </figure>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <img src="/images/buckeez-brand-names.png" alt="Buckeez brand identity and name treatments" loading="lazy" className="w-full h-auto rounded-2xl" />
          <img src="/images/buckeez-fonts.png" alt="Buckeez brand typography" loading="lazy" className="w-full h-auto rounded-2xl" />
        </div>

        <div className="max-w-4xl mx-auto space-y-16 text-neutral-700 text-base sm:text-lg leading-relaxed">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">The Challenge</h2>
            <p>Building a new restaurant brand requires more than great food. It also needs strong brand awareness, customer interest, and a clear identity in a competitive food market.</p>
            <p className="mt-4">For Buckeez, the challenge was to establish an online presence before the restaurant officially launched. The goal was to introduce the brand to potential customers, create excitement around its food, and build an audience from the beginning.</p>
            <p className="mt-4">As a new fried chicken restaurant, Buckeez needed a digital marketing strategy that could attract food lovers, encourage customer engagement, and support long-term business growth.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">Our Strategy &amp; What We Did</h2>
            <p>At Entrain Growth Partners, we developed a restaurant digital marketing strategy that started before the brand's launch and continued as the business grew.</p>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">{initiatives.map(([title, description]) => (
              <div key={title} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="font-display text-xl font-bold text-[#101827] mb-3">{title}</h3>
                <p className="text-base">{description}</p>
              </div>
            ))}</div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">The Results</h2>
            <p>Our digital marketing efforts have supported Buckeez's brand development from its pre-launch stage to its ongoing operations.</p>
            <ul className="mt-6 space-y-4">{results.map(([title, description]) => (
              <li key={title} className="border-l-4 border-[#4355A5] pl-5"><strong className="text-[#101827]">{title}:</strong> {description}</li>
            ))}</ul>
            <p className="mt-6">We monitor Instagram reach, reel views, audience engagement, website traffic, and customer interactions to evaluate performance and improve our content strategy.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">Social Presence</h2>
            <p className="mb-6">A snapshot of Buckeez's Instagram, Facebook, and YouTube profiles.</p>
            <div className="grid gap-6">{profiles.map(([src, caption, alt]) => (
              <figure key={src} className="bg-white p-4 sm:p-6 rounded-3xl shadow-md border border-slate-200/80">
                <img src={src} alt={alt} loading="lazy" className="w-full h-auto rounded-xl" />
                <figcaption className="text-sm mt-3">{caption}</figcaption>
              </figure>
            ))}</div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">Building Long-Term Growth</h2>
            <p>Our partnership with Buckeez began before the restaurant's launch and continues through ongoing digital marketing support.</p>
            <p className="mt-4">By combining pre-launch marketing, organic social media management, food photography, creative video production, website development, and SEO, we help Buckeez maintain a consistent brand presence across digital platforms.</p>
            <p className="mt-4">This project highlights how a well-planned restaurant marketing strategy can build early awareness, connect with food lovers, and support a growing food business without relying on paid advertising.</p>
          </section>
        </div>

        <div className="text-center pt-16"><Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow>Book Strategy Call</Button></div>
      </article>
    </main>
  );
}
