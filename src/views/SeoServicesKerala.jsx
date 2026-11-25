import React, { useState } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import {
  ArrowUpRight, BarChart3, Bot, CheckCircle2, Clock, Languages, Link2, Loader2, MapPin,
  MessageSquare, PenTool, Phone, Search, SearchX, Send, ShieldCheck, ShoppingCart, 
  Star, TrendingDown, Wallet, Wrench,
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from '../lib/router';
import Faq from '../sections/Faq';
import { seoKeralaFaqs } from '../data/seoKeralaFaq';
import { submitLead } from '../lib/submitLead';

const WHATSAPP = 'https://wa.me/919995103013?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20SEO%20for%20my%20business';
const PHONE_HREF = 'tel:+919995103013';

const eyebrow = 'text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase block mb-3';
const h2 = 'font-display text-3xl sm:text-5xl font-extrabold text-[#101827] tracking-tight leading-[1.08]';
const lead = 'text-neutral-600 text-base sm:text-lg leading-relaxed font-light max-w-3xl';
const card = 'bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/90 shadow-sm';
const section = 'px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto';
const input = 'w-full px-4 py-3 rounded-2xl bg-[#F3F1EE]/80 border border-neutral-200/90 text-sm text-[#101827] placeholder-neutral-400 focus:bg-white focus:outline-none focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20 transition-all';
const label = 'block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1.5';

const heroPoints = [
  'Rank in Google search and Google Maps for the cities you serve',
  'Get recommended in AI answers and featured snippets (GEO & AEO)',
  'Keyword research, on-page SEO, off-page SEO and technical SEO',
  'Monthly reports tied to calls, WhatsApp clicks and enquiries',
];

const promises = [
  { icon: ShieldCheck, title: 'You own everything', text: 'Accounts and content stay in your name' },
  { icon: BarChart3, title: 'Monthly reporting', text: 'Calls, WhatsApp clicks and enquiries' },
  { icon: Languages, title: 'Malayalam + English', text: 'Keywords in the language buyers use' },
  { icon: Clock, title: 'Reply in 1 business day', text: 'Free audit, no obligation' },
];

const problems = [
  { icon: TrendingDown, title: 'Great business, invisible online', text: "Your reputation is strong offline, but Google can't see why you're the best choice in your city." },
  { icon: Wallet, title: 'Paying for ads that stop when the budget stops', text: 'Ads rent attention. SEO builds an asset that keeps sending enquiries month after month.' },
  { icon: SearchX, title: 'Past agencies, no clear results', text: 'Reports full of impressions but no idea how many calls or sales came from them. We fix that.' },
];

const featured = [
  { icon: MapPin, tag: 'Local', title: 'Google Business Profile (GMB) optimisation', text: 'Rank in the Maps "local pack" for "near me" and "[service] in [city]" searches. Profile setup and optimisation, categories, services, photos, posts, Q&A and multi-branch management.' },
  { icon: Bot, tag: 'AI search', title: 'GEO: Generative Engine Optimization', text: 'Make your business easy for ChatGPT, Gemini, Perplexity and Google AI Overviews to understand and recommend, through entity clarity, authoritative content and consistent web mentions.' },
  { icon: MessageSquare, tag: 'Answers', title: 'AEO: Answer Engine Optimization', text: 'Win featured snippets, People Also Ask and voice answers with question-led content, concise answers and FAQ schema, so you become the answer, not just a result.' },
];

const services = [
  { icon: Star, title: 'Review & reputation management', text: 'A steady, genuine flow of Google reviews and professional replies. Reviews lift Maps visibility and are a signal AI tools weigh when recommending businesses.' },
  { icon: Wrench, title: 'Technical SEO', text: 'Site speed on mobile, crawl and indexing fixes, Core Web Vitals, schema markup, clean site structure so Google can read and trust your site.' },
  { icon: PenTool, title: 'Content & keyword strategy', text: 'Service pages and blogs built around what your buyers actually search, in English and Malayalam, written to rank and to convert.' },
  { icon: Link2, title: 'Link building & digital PR', text: 'Quality, relevant links from Kerala and national publications, directories and partners. No spammy networks.' },
  { icon: ShoppingCart, title: 'E-commerce SEO', text: 'Category and product page optimisation, structured data and faceted-navigation fixes for online stores selling across India.' },
  { icon: BarChart3, title: 'Conversion tracking & reporting', text: 'Calls, WhatsApp clicks and form leads tracked in GA4 and Search Console so you see exactly what SEO earns you.' },
];

const aiSearch = [
  {
    title: 'GMB: win the map',
    text: 'For local intent, the Maps pack is often the first thing people see.',
    points: ['Full profile audit and clean-up', 'Primary and secondary category strategy', 'Service, product and attribute listings', 'Weekly posts, photos and Q&A', 'Review requests via WhatsApp or QR', 'Call, direction and WhatsApp click tracking'],
  },
  {
    title: 'AEO: become the answer',
    text: 'We shape content so search engines can lift it straight into an answer.',
    points: ['Question research from real searches and PAA boxes', 'Short, direct answers on every key page', 'FAQ, HowTo and Service schema markup', 'Voice-search friendly phrasing in English and Malayalam', 'Featured snippet targeting'],
  },
  {
    title: 'GEO: get recommended by AI',
    text: 'We make your brand clear, credible and consistent wherever AI tools look.',
    points: ['Brand and entity clean-up across the web', 'Authoritative, citable content with real expertise', 'Organisation and LocalBusiness schema', 'Listings, directories and press mentions', 'Monthly check of how AI tools describe your brand'],
  },
];

const benefits = [
  { title: 'More qualified enquiries', text: "We target buyers who are ready to act, not vanity keywords, so the leads you get are worth your sales team's time." },
  { title: 'Lower cost per lead over time', text: 'Organic rankings keep working after the work is done. Many clients find SEO becomes their cheapest lead source.' },
  { title: 'Local dominance in your cities', text: 'Be the obvious choice in Kochi, Thrissur, Kozhikode or wherever you operate, in both Search and Maps.' },
  { title: 'Transparent, honest process', text: 'Clear scope, monthly reports, and a plain-language call every month. No jargon, no hidden work, and no ranking "guarantees" we can\'t keep.' },
];

const steps = [
  { title: 'Audit', text: 'We review your site, profile and competitors and find the biggest opportunities.' },
  { title: 'Strategy', text: 'You get a priority roadmap with targets, timelines and a fixed monthly scope.' },
  { title: 'Execute', text: 'We fix, write, optimise and build links, and keep you updated throughout.' },
  { title: 'Report & grow', text: 'Monthly reports on leads and revenue drivers, then we double down on what works.' },
];

const cityOptions = ['Kochi / Ernakulam', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Kannur', 'Kottayam', 'Malappuram', 'Alappuzha', 'Palakkad', 'Other in Kerala', 'Outside Kerala'];
const cities = ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Kannur', 'Kottayam', 'Malappuram', 'Alappuzha', 'Palakkad'];
const industries = ['Hospitals & clinics', 'Ayurveda & wellness', 'Resorts, homestays & tourism', 'Real estate & builders', 'Education & coaching', 'Jewellery & retail', 'Spices & exports', 'Restaurants & cafés', 'Professional services'];

/* ---------- Audit form (posts to /api/leads) ---------- */
function AuditForm({ id, tone = 'light' }) {
  const [data, setData] = useState({ name: '', phone: '', website: '', city: cityOptions[0] });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const change = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!data.name.trim() || data.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter your name and a valid 10-digit phone number.');
      return;
    }
    setError('');
    setBusy(true);
    try {
      await submitLead({
        name: data.name,
        phone: data.phone,
        website: data.website,
        service: 'SEO',
        message: `Free SEO audit request. City: ${data.city}.${data.website ? ` Website / Google Business link: ${data.website}.` : ''}`,
        source: 'SEO landing page',
      });
      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div id={id} className={`scroll-mt-28 rounded-3xl bg-white text-[#101827] p-6 sm:p-8 shadow-2xl ${tone === 'dark' ? 'border border-white/20' : 'border border-neutral-200/90'}`}>
      {done ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-[#4355A5]/10 border border-[#4355A5]/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-9 h-9 text-[#4355A5]" />
          </div>
          <h3 className="font-display text-2xl font-extrabold mb-2">Audit request received!</h3>
          <p className="text-sm text-neutral-600 font-light leading-relaxed">
            Thank you. Our team will review your business and reply within 1 business day.
          </p>
        </div>
      ) : (
        <>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">Get your free SEO audit</h2>
          <p className="text-neutral-600 text-sm font-light leading-relaxed mb-5">
            We'll review your site, Google Business Profile and top 3 competitors, then send a plain-language action plan.
          </p>
          <form onSubmit={submit} noValidate className="space-y-4">
            <div>
              <label className={label} htmlFor={`${id}-name`}>Your name *</label>
              <input id={`${id}-name`} name="name" value={data.name} onChange={change} autoComplete="name" placeholder="Your full name" className={input} />
            </div>
            <div>
              <label className={label} htmlFor={`${id}-phone`}>WhatsApp / phone *</label>
              <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" value={data.phone} onChange={change} autoComplete="tel" placeholder="+91 98765 43210" className={input} />
            </div>
            <div>
              <label className={label} htmlFor={`${id}-site`}>Website or Google Business link</label>
              <input id={`${id}-site`} name="website" value={data.website} onChange={change} placeholder="www.yourbusiness.com" className={input} />
            </div>
            <div>
              <label className={label} htmlFor={`${id}-city`}>Main city</label>
              <select id={`${id}-city`} name="city" value={data.city} onChange={change} className={input}>
                {cityOptions.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            {error && <p role="alert" className="text-xs text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={busy}
              className="w-full py-4 px-8 rounded-full bg-[#4355A5] text-white font-bold text-sm hover:bg-[#34448F] active:scale-[0.99] transition-all shadow-md shadow-[#4355A5]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {busy ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send my free audit request</>}
            </button>
          </form>
          {/* <p className="mt-4 text-center text-xs text-neutral-500">
            Prefer to talk? <a href={PHONE_HREF} className="font-semibold text-[#4355A5] hover:underline">Call +91 99951 03013</a>
          </p> */}
        </>
      )}
    </div>
  );
}

/* ---------- Illustrative mockups of the three places customers find you ---------- */
function ResultMockups() {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Google result */}
      <div className="rounded-3xl bg-white border border-neutral-200/90 shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-neutral-100 flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
          <Search className="w-3.5 h-3.5" /> Google search
        </div>
        <div className="p-5">
          <div className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600 mb-4">best dental clinic in kochi</div>
          <div className="rounded-2xl border-2 border-[#4355A5] bg-[#4355A5]/5 p-4 mb-3 relative">
            <span className="absolute -top-2.5 right-4 bg-[#4355A5] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">Your business</span>
            <p className="text-xs text-neutral-500">yourclinic.com › dental-kochi</p>
            <p className="text-[#4355A5] font-semibold leading-snug">Best Dental Clinic in Kochi | Book Today</p>
            <p className="text-xs text-neutral-600 mt-1">Trusted by families across Ernakulam. Painless treatment, clear pricing.</p>
          </div>
          {[70, 55].map((w) => (
            <div key={w} className="mb-3 opacity-50">
              <div className="h-2 rounded bg-neutral-300 mb-2" style={{ width: '40%' }} />
              <div className="h-2.5 rounded bg-neutral-300 mb-1.5" style={{ width: `${w}%` }} />
              <div className="h-2 rounded bg-neutral-200" style={{ width: '90%' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Maps pack */}
      <div className="rounded-3xl bg-white border border-neutral-200/90 shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-neutral-100 flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
          <MapPin className="w-3.5 h-3.5" /> Google Maps
        </div>
        <div className="relative h-32 bg-[#E6EAF7] overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)', backgroundSize: '34px 34px' }} />
          <MapPin className="absolute left-[22%] top-[30%] w-6 h-6 text-neutral-400" />
          <MapPin className="absolute left-[70%] top-[55%] w-6 h-6 text-neutral-400" />
          <MapPin className="absolute left-[45%] top-[22%] w-9 h-9 text-[#4355A5] fill-[#4355A5]/20" />
        </div>
        <div className="p-5 space-y-3">
          <div className="rounded-2xl border-2 border-[#4355A5] bg-[#4355A5]/5 p-3 flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-sm">Your Business</p>
              <p className="text-xs text-neutral-500 flex items-center gap-1">4.8 <Star className="w-3 h-3 fill-[#4355A5] text-[#4355A5]" /> · Open now</p>
            </div>
            <span className="bg-[#4355A5] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">#1</span>
          </div>
          {[1, 2].map((n) => (
            <div key={n} className="rounded-2xl border border-neutral-200 p-3 opacity-50">
              <div className="h-2.5 rounded bg-neutral-300 mb-2" style={{ width: '50%' }} />
              <div className="h-2 rounded bg-neutral-200" style={{ width: '35%' }} />
            </div>
          ))}
        </div>
      </div>

      {/* AI answer */}
      <div className="rounded-3xl bg-white border border-neutral-200/90 shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-neutral-100 flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
          <Bot className="w-3.5 h-3.5" /> AI answer
        </div>
        <div className="p-5 space-y-4">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#101827] text-white text-sm px-4 py-3">
            Best Ayurveda resort in Kumarakom?
          </div>
          <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-[#F3F1EE] text-sm px-4 py-3 text-neutral-700 leading-relaxed">
            For a calm, authentic stay, <span className="font-bold text-[#4355A5] bg-[#4355A5]/10 px-1 rounded">Your Resort</span> is frequently recommended for its Ayurveda programmes and backwater views.
          </div>
          <div className="flex flex-wrap gap-2">
            {['yourresort.com', 'Google reviews', 'Travel guide'].map((s) => (
              <span key={s} className="text-[11px] border border-neutral-200 rounded-full px-2.5 py-1 text-neutral-500">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SeoServicesKerala({ onOpenConsultation }) {
  return (
    <main className="bg-[#F3F1EE] text-[#101827] font-sans overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-[#F3F1EE] text-[#101827] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3F1EE] via-[#F3F1EE]/85 to-[#F3F1EE]/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[clamp(2.6rem,5.6vw,5rem)] font-semibold tracking-[-0.05em] leading-[1.02]">
              SEO Services in Kerala
            </h1>
            <p className="mt-4 sm:mt-5 font-display text-[clamp(1.6rem,3.4vw,3rem)] font-medium tracking-[-0.035em] leading-[1.1] text-[#4355A5]">
              That bring you customers, not just traffic.
            </p>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#101827]/65 leading-relaxed">
              When people in Kochi, Trivandrum, Kozhikode or anywhere in Kerala search for what you sell, your business should be the one they find, call and choose. Today that means showing up in Google, Google Maps and AI answers from ChatGPT, Gemini and AI Overviews.
            </p>
            <ul className="mt-7 space-y-3">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-[#101827]">
                  <CheckCircle2 className="w-5 h-5 text-[#4355A5] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" href="#audit">Get My Free SEO Audit</Button>
              <Button variant="secondary" size="lg" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <AuditForm id="audit" />
          </div>
        </div>
      </section>

      {/* ================= PROMISE STRIP ================= */}
      <section className="bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#4355A5]/10 text-[#4355A5] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-display font-bold text-sm sm:text-base leading-tight">{title}</p>
                <p className="text-xs sm:text-sm text-neutral-500 font-light mt-0.5">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className={`${section} py-16 sm:py-24`}>
        <span className={eyebrow}>Why SEO, why now</span>
        <h2 className={`${h2} max-w-3xl`}>Your customers in Kerala are already searching. Are they finding you?</h2>
        <p className={`${lead} mt-5`}>
          Whether it's "best dental clinic in Kochi", "Ayurveda resort Kumarakom" or "wholesale spices Kerala", the business that appears first gets the call. If your competitors show up and you don't, you're paying for it in lost enquiries every day.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, text }) => (
            <div key={title} className={card}>
              <span className="w-12 h-12 rounded-2xl bg-[#101827] text-white flex items-center justify-center mb-5"><Icon className="w-6 h-6" /></span>
              <h3 className="font-display text-xl font-bold mb-2 leading-snug">{title}</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="primary" size="lg" href="#audit">See what you're missing: free audit</Button>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="bg-white">
        <div className={`${section} py-16 sm:py-24`}>
          <span className={eyebrow}>What we do</span>
          <h2 className={`${h2} max-w-3xl`}>SEO, GEO, AEO & GMB services in Kerala</h2>
          <p className={`${lead} mt-5`}>
            One team covering everything that gets you found, from classic Google rankings and Maps to the AI answers your customers now rely on.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map(({ icon: Icon, tag, title, text }) => (
              <article key={title} className="rounded-3xl bg-[#101827] text-white p-7 sm:p-8 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#4355A5] flex items-center justify-center"><Icon className="w-6 h-6" /></span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9DB0FF] border border-white/20 rounded-full px-3 py-1">{tag}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 leading-snug">{title}</h3>
                <p className="text-sm text-white/70 font-light leading-relaxed">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl bg-[#F3F1EE] border border-neutral-200/90 p-6 sm:p-7">
                <Icon className="w-6 h-6 text-[#4355A5] mb-4" />
                <h3 className="font-display text-lg font-bold mb-2 leading-snug">{title}</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI SEARCH ================= */}
      <section id="ai-search" className={`${section} py-16 sm:py-24`}>
        <span className={eyebrow}>Future-proof your visibility</span>
        <h2 className={`${h2} max-w-4xl`}>Search has changed. Your customers now ask Google Maps, AI Overviews and ChatGPT.</h2>
        <p className={`${lead} mt-5`}>
          People in Kerala increasingly ask questions like "best Ayurveda resort in Kumarakom" or "good dentist near Edappally" and get a single answer or a short list. Being on page one is no longer enough. You need to be in the answer.
        </p>

        <ResultMockups />
        <p className="mt-3 text-xs text-neutral-400">Illustrative examples of where your business can appear.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiSearch.map(({ title, text, points }) => (
            <article key={title} className={card}>
              <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed mb-5">{text}</p>
              <ul className="space-y-2.5">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-[#101827]">
                    <CheckCircle2 className="w-4 h-4 text-[#4355A5] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-500 max-w-3xl">
          AI tools decide for themselves what to show, so no agency can guarantee a mention. We improve the signals that raise your chances and report what we see each month.
        </p>
        <div className="mt-6">
          <Button variant="primary" size="md" href="#audit">Check my AI & Maps visibility: free audit</Button>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-white">
        <div className={`${section} py-16 sm:py-24`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className={eyebrow}>Benefits</span>
              <h2 className={h2}>What working with us does for your business</h2>
              <div className="mt-8">
                <Button variant="primary" size="md" href="#audit">Start with a free audit</Button>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b, idx) => (
                <div key={b.title} className="rounded-3xl bg-[#F3F1EE] border border-neutral-200/90 p-6 sm:p-7">
                  <div className="font-mono text-sm font-bold text-[#4355A5] mb-3">0{idx + 1}</div>
                  <h3 className="font-display text-xl font-bold mb-2">{b.title}</h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-[#101827] text-white">
        <div className={`${section} py-16 sm:py-24`}>
          <span className="text-xs font-mono font-bold tracking-widest text-[#9DB0FF] uppercase block mb-3">How it works</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">A simple four-step process</h2>
          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block absolute top-5 left-5 right-5 h-px bg-white/15" aria-hidden="true" />
            {steps.map((step, idx) => (
              <div key={step.title} className="relative">
                <div className="relative w-10 h-10 rounded-full bg-[#4355A5] ring-4 ring-[#101827] flex items-center justify-center font-bold mb-5">{idx + 1}</div>
                <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-white/65 font-light leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COVERAGE ================= */}
      <section className={`${section} py-16 sm:py-24`}>
        <span className={eyebrow}>Where we work</span>
        <h2 className={h2}>SEO for businesses across every district of Kerala</h2>
        <p className={`${lead} mt-5`}>
          We understand how people in Kerala search and buy, from Malayalam queries to the seasonal peaks in tourism and festivals. Entrain Growth Partners is the{' '}
          <Link to="/" className="font-semibold text-[#4355A5] underline underline-offset-4">best digital marketing agency in Kerala</Link>{' '}
          for businesses that want measurable growth.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Cities we serve">
          {cities.map((city) => (
            <li key={city} className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#4355A5]" /> SEO in {city}
            </li>
          ))}
        </ul>
        <h3 className="font-display text-xl font-bold mt-12 mb-4">Industries we know well</h3>
        <ul className="flex flex-wrap gap-2.5">
          {industries.map((industry) => (
            <li key={industry} className="bg-[#4355A5]/10 text-[#34448F] rounded-full px-4 py-2 text-sm font-medium">{industry}</li>
          ))}
        </ul>
        <p className="mt-10">
          <Link to="/cobolt" className="inline-flex items-center gap-1 text-sm font-bold text-[#4355A5] hover:underline">
            Read the full case studies <ArrowUpRight className="w-4 h-4" />
          </Link>
        </p>
      </section>

      {/* ================= FAQ ================= */}
      <Faq
        faqs={seoKeralaFaqs}
        heading="SEO services in Kerala: your questions answered."
        intro="Straight answers on pricing, timelines, AI search and what you can expect from us."
      />

      {/* ================= FINAL CTA + FORM ================= */}
      <section className="relative bg-[#4355A5] text-white overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className={`${section} relative py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.08]">Ready to be the business Kerala finds first?</h2>
            <p className="mt-5 text-base sm:text-lg text-white/80 font-light max-w-xl">
              Get a free audit and a clear roadmap for ranking higher and getting more enquiries. No obligation, no jargon.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="white" size="lg" href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp us now</Button>
              <Button variant="outline" size="lg"  showArrow={false}>
                Call +91 99951 03013
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <AuditForm id="audit-bottom" tone="dark" />
          </div>
        </div>
      </section>
    </main>
  );
}
