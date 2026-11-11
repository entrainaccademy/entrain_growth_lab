import React from 'react';
import Button from '../components/Button';

const services = ['Digital Marketing Strategy', 'Social Media Management', 'Organic Instagram Marketing', 'Website Development', 'SEO', 'Content Creation', 'Video Production', 'Admission Campaigns'];

const initiatives = [
  ['Organic Instagram Marketing', "We created a consistent content strategy using cooking videos, student activities, workshop highlights, and engaging reels. This helped showcase the academy's practical training experience and connect with aspiring culinary students."],
  ['Content Creation & Video Production', 'Our team produced student testimonials, chef-led cooking videos, food presentation reels, professional voice-over content, and creative promotional materials. Each piece of content focused on building trust and showing real learning experiences.'],
  ['Website Development & SEO', 'We developed an SEO-focused website with optimized culinary course content to help students discover the academy through search engines. Our work focused on improving online visibility, course information, and organic student enquiries.'],
  ['Admission Campaigns', 'We planned and executed course admission campaigns, workshop promotions, and creative social media content to reach potential students and encourage enquiries.']
];

const results = [
  ['Organic Instagram Growth', 'Improved audience reach, reel views, follower growth, and engagement through consistent content marketing.'],
  ['Student Enquiries', 'Generated enquiries through organic Instagram content, website visits, and SEO.'],
  ['Course Admissions', 'Supported course registrations and admissions through targeted promotional content.'],
  ['Brand Awareness', "Strengthened the academy's digital presence and recognition among aspiring chefs and food entrepreneurs."],
  ['Audience Trust', "Used real student testimonials, practical cooking videos, and workshop content to communicate the academy's training experience."]
];

export default function Culinary({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 bg-[#F3F1EE] text-[#101827] min-h-screen">
      <article className="pt-8 sm:pt-12 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight max-w-5xl">Entrain Culinary Academy – Building a Strong Digital Presence for Culinary Education</h1>
          <div className="mt-8 text-neutral-700">
            <p><strong className="text-[#101827]">Industry:</strong> Culinary Education &amp; Professional Cooking Training</p>
          </div>
          <div className="mt-5">
            <p className="font-semibold mb-3">Services</p>
            <div className="flex flex-wrap gap-2">{services.map((service) => <span key={service} className="rounded-full bg-white border border-slate-200 px-3 py-1.5 text-sm text-neutral-700">{service}</span>)}</div>
          </div>
        </header>

        <div className="w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900/5 mb-16">
          <img src="/images/mockup1.png" alt="Entrain Culinary Academy website showcase" className="w-full h-auto block" />
        </div>

        <div className="max-w-4xl mx-auto space-y-16 text-neutral-700 text-base sm:text-lg leading-relaxed">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">The Challenge</h2>
            <p>Entrain Culinary Academy needed to build a strong digital presence and attract students interested in professional culinary training. As a growing academy, the main challenge was creating brand awareness, reaching the right audience, and turning online interest into student enquiries and course admissions.</p>
            <p className="mt-4">The goal was to establish the academy as a trusted culinary training destination in Kerala while maintaining consistent engagement across digital platforms.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">Our Strategy &amp; What We Did</h2>
            <p>At Entrain Growth Partners, we developed a digital marketing strategy focused on brand visibility, organic audience growth, and student lead generation.</p>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">{initiatives.map(([title, description]) => (
              <div key={title} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="font-display text-xl font-bold text-[#101827] mb-3">{title}</h3>
                <p className="text-base">{description}</p>
              </div>
            ))}</div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">The Results</h2>
            <p>Our ongoing digital marketing efforts have supported Entrain Culinary Academy's growth since its launch.</p>
            <ul className="mt-6 space-y-4">{results.map(([title, description]) => (
              <li key={title} className="border-l-4 border-[#4355A5] pl-5"><strong className="text-[#101827]">{title}:</strong> {description}</li>
            ))}</ul>
            <p className="mt-6">We continue to monitor Instagram Insights, website performance, student enquiries, and admission activity to evaluate marketing effectiveness.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">SEO &amp; AI Search Visibility</h2>
            <p className="mb-6">These captured search-result examples show Entrain Academy appearing in recommendations for culinary training searches in Kerala and Malappuram.</p>
            <figure className="bg-white p-4 sm:p-6 rounded-3xl shadow-md border border-slate-200/80">
              <img src="/images/case-studies/entrain-ai-search-results.png" alt="Six captured AI search result examples featuring Entrain Academy for culinary training searches" loading="lazy" className="w-full h-auto rounded-xl" />
              <figcaption className="text-sm mt-3">Captured AI search recommendations; results may change over time.</figcaption>
            </figure>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">Social Presence</h2>
            <p className="mb-6">A snapshot of the academy's Instagram and Facebook profiles.</p>
            <div className="grid gap-6">
              <figure className="bg-white p-4 sm:p-6 rounded-3xl shadow-md border border-slate-200/80">
                <img src="/images/case-studies/entrain-instagram.png" alt="Entrain Academy Instagram profile screenshot showing 37.4K followers" loading="lazy" className="w-full h-auto rounded-xl" />
                <figcaption className="text-sm mt-3">Entrain Academy on Instagram</figcaption>
              </figure>
              <figure className="bg-white p-4 sm:p-6 rounded-3xl shadow-md border border-slate-200/80">
                <img src="/images/case-studies/entrain-facebook.png" alt="Entrain Academy Facebook profile screenshot showing 35K followers" loading="lazy" className="w-full h-auto rounded-xl" />
                <figcaption className="text-sm mt-3">Entrain Academy on Facebook</figcaption>
              </figure>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">Building Long-Term Growth</h2>
            <p>Our partnership with Entrain Culinary Academy began at its launch and continues today. By combining organic social media marketing, SEO, creative storytelling, and consistent admission campaigns, we help the academy connect with aspiring chefs and food entrepreneurs.</p>
            <p className="mt-4">This project shows how a well-planned digital marketing strategy can support brand awareness, student engagement, and sustainable growth in the education sector.</p>
          </section>
        </div>

        <div className="text-center pt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="https://entraincullinaryschool.com" target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" showArrow>Visit Live Website</Button>
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow>Book Strategy Call</Button>
        </div>
      </article>
    </main>
  );
}
