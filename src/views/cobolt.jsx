import React from 'react';
import Button from '../components/Button';

const services = ['Digital Marketing Strategy', 'Social Media Management', 'Meta Ads', 'Website Development', 'Search Engine Optimization (SEO)', 'Product Photography', 'Content Creation'];

const initiatives = [
  ['Social Media Marketing & Brand Awareness', "We built a consistent social media presence to introduce Cobolt Machineries and showcase its commercial kitchen equipment. Our content focused on product highlights, equipment features, manufacturing capabilities, and practical solutions for professional kitchens. Through creative posters and regular updates, we worked to improve brand visibility and audience engagement."],
  ['Product Photography & Creative Content', "We created product-focused visual content to present Cobolt's equipment clearly and professionally. Our photography and designs highlighted commercial cooking ranges, bakery equipment, stainless steel workstations, shawarma machines, and customized kitchen solutions. This helped potential customers understand the products and their applications."],
  ['Website Development & SEO', "We developed a professional website to showcase Cobolt Machineries' products, services, and manufacturing expertise. Our SEO strategy focused on relevant commercial kitchen equipment keywords, product information, and search visibility. We structured the website to help restaurant owners, bakery businesses, and other buyers explore equipment options and contact the company."],
  ['Meta Ads & Audience Targeting', 'We used Meta advertising campaigns to reach audiences interested in commercial kitchen equipment and food business operations. Our strategy focused on increasing brand exposure, promoting products, and creating opportunities for customer enquiries.']
];

const results = [
  ['Brand Awareness', "Improved the brand's digital presence through consistent social media marketing and creative campaigns."],
  ['Product Visibility', 'Helped customers discover commercial kitchen equipment through professional photography, product-focused content, and website listings.'],
  ['Website & SEO', "Strengthened the brand's online foundation with an SEO-focused website and organized product information."],
  ['Audience Engagement', 'Supported ongoing interactions with potential customers through relevant social media content.'],
  ['Business Enquiries', 'Created additional opportunities for customers to discover products and contact Cobolt through digital channels.'],
  ['Paid Advertising', 'Used Meta Ads to promote equipment and reach relevant business audiences.']
];

const evidence = [
  ['/images/case-studies/cobolt-facebook.png', 'Cobolt Machineries Facebook profile', 'Facebook profile screenshot showing 46K followers'],
  ['/images/case-studies/cobolt-instagram.png', 'Cobolt Machineries Instagram profile', 'Instagram profile screenshot showing 74.7K followers'],
  ['/images/case-studies/cobolt-youtube.png', 'Cobolt Machineries YouTube channel', 'YouTube channel screenshot showing 14.2K subscribers'],
  ['/images/case-studies/cobolt-search-console.png', 'Search performance', 'Google Search Console screenshot showing 151 clicks and 2.42K impressions over 28 days']
];

export default function Cobolt({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 bg-[#F3F1EE] text-[#101827] min-h-screen">
      <article className="pt-8 sm:pt-12 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-5xl">Cobolt Machineries</h1>
          <p className="mt-3 max-w-3xl text-lg sm:text-2xl leading-relaxed text-neutral-600">Building digital visibility for a commercial kitchen equipment brand</p>
          <div className="mt-8 text-neutral-700">
            <p><strong className="text-[#101827]">Industry:</strong> Commercial Kitchen Equipment Manufacturing &amp; Supply</p>
          </div>
          <a href="https://coboltmachineries.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300/80 text-sm sm:text-base font-semibold text-[#4355A5] hover:bg-[#4355A5] hover:text-white transition-all shadow-sm">
            coboltmachineries.com ↗
          </a>
          <div className="mt-5">
            <p className="font-semibold mb-3">Services</p>
            <div className="flex flex-wrap gap-2">{services.map((service) => <span key={service} className="rounded-full bg-white border border-slate-200 px-3 py-1.5 text-sm text-neutral-700">{service}</span>)}</div>
          </div>
        </header>

        <div className="w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900/5 mb-16">
          <img src="/images/coboldipad.png" alt="Cobolt Machineries website showcase" className="w-full h-auto block" />
        </div>

        <div className="max-w-4xl mx-auto space-y-16 text-neutral-700 text-base sm:text-lg leading-relaxed">
          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">The Challenge</h2>
            <p>Cobolt Machineries, a commercial kitchen equipment manufacturer and supplier based in Kerala, needed a stronger digital presence to reach potential customers in the food service and hospitality industries.</p>
            <p className="mt-4">The main challenge was improving brand awareness, showcasing a wide range of commercial kitchen equipment, and connecting with restaurant owners, bakery businesses, café founders, and other commercial kitchen operators.</p>
            <p className="mt-4">As a business serving different customer needs, Cobolt required a digital marketing strategy that could clearly communicate its products, manufacturing capabilities, and customized kitchen solutions. Our goal was to make the brand easier to discover online while creating opportunities for relevant business enquiries.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">Our Strategy &amp; What We Did</h2>
            <p>At Entrain Growth Partners, we developed a digital marketing strategy combining creative content, website development, SEO, and targeted advertising.</p>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">{initiatives.map(([title, description]) => (
              <div key={title} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="font-display text-xl font-bold text-[#101827] mb-3">{title}</h3>
                <p className="text-base">{description}</p>
              </div>
            ))}</div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">The Results</h2>
            <p>Our ongoing digital marketing activities have supported Cobolt Machineries' online growth since the beginning of our partnership.</p>
            <ul className="mt-6 space-y-4">{results.map(([title, description]) => (
              <li key={title} className="border-l-4 border-[#4355A5] pl-5"><strong className="text-[#101827]">{title}:</strong> {description}</li>
            ))}</ul>
            <p className="mt-6">We track social media reach, engagement, website traffic, search performance, and customer enquiries to understand campaign performance and identify opportunities for improvement.</p>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">Digital Presence &amp; Search Performance</h2>
            <p className="mb-6">A snapshot of Cobolt's social profiles and search performance.</p>
            <div className="grid gap-6">{evidence.map(([src, caption, alt]) => (
              <figure key={src} className="bg-white p-4 sm:p-6 rounded-3xl shadow-md border border-slate-200/80">
                <img src={src} alt={alt} loading="lazy" className="w-full h-auto rounded-xl" />
                <figcaption className="text-sm mt-3">{caption}</figcaption>
              </figure>
            ))}</div>
          </section>

          <section>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4355A5] mb-5">Building Long-Term Growth</h2>
            <p>Our partnership with Cobolt Machineries began during the brand's early marketing efforts and continues through ongoing digital marketing activities.</p>
            <p className="mt-4">By combining social media management, product photography, website development, SEO, and Meta advertising, we support Cobolt's efforts to reach more businesses and strengthen its online presence.</p>
            <p className="mt-4">This project demonstrates how a consistent B2B digital marketing strategy can help a commercial kitchen equipment manufacturer communicate its expertise, showcase its products, and connect with potential customers across the food service industry.</p>
          </section>
        </div>

        <div className="text-center pt-16">
          <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow>Book Strategy Call</Button>
        </div>
      </article>
    </main>
  );
}
