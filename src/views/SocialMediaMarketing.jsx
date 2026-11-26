import React from 'react';
import { MeshGradient } from '@paper-design/shaders-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import {
  ArrowRight, ArrowUpRight, BarChart3, CalendarCheck, Layers, Lock, Megaphone, TrendingUp, User, Zap,
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from '../lib/router';
import Faq from '../sections/Faq';
import { socialMediaFaqs } from '../data/socialMediaFaq';

const eyebrow = 'text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase block mb-3';
const h2 = 'font-display text-3xl sm:text-5xl font-extrabold text-[#101827] tracking-tight leading-[1.08]';
const card = 'bg-white p-6 sm:p-7 rounded-3xl border border-neutral-200/90 shadow-sm';
const section = 'px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto';

const platforms = [
  { icon: FaInstagram, name: 'Instagram' },
  { icon: FaFacebookF, name: 'Facebook' },
  { icon: FaTiktok, name: 'TikTok' },
  { icon: FaLinkedinIn, name: 'LinkedIn' },
  { icon: FaXTwitter, name: 'X' },
];

const brands = [
  { name: 'Entrain Culinary Academy', to: '/culinary' },
  { name: 'Cobolt Machineries', to: '/cobolt' },
  { name: 'Buckeez', to: '/buckeez' },
];

const whyChoose = [
  { icon: BarChart3, title: 'Done-for-you strategy & content', text: 'Stop guessing what to post or when. We plan and produce every piece for you.' },
  { icon: User, title: 'A dedicated strategist', text: 'One point of contact who knows your brand — not a rotating account manager.' },
  { icon: TrendingUp, title: 'Data-driven ad management', text: 'We test, measure, and reallocate budget weekly to lower your cost per lead.' },
  { icon: CalendarCheck, title: 'Transparent monthly reporting', text: 'Reports tied to real business outcomes — leads and sales, not just likes.' },
  { icon: Layers, title: 'Platform-specific expertise', text: 'Dedicated playbooks for Instagram, Facebook, TikTok, LinkedIn, and X.' },
  { icon: Zap, title: 'Faster results', text: 'Proven frameworks replace trial and error, so you grow faster from day one.' },
];

const included = [
  { title: 'Strategy & audits', text: 'Competitor and audience research plus a 90-day content roadmap.' },
  { title: 'Content creation & design', text: 'Graphics, short-form video, captions, and on-brand templates.' },
  { title: 'Community management', text: 'Comments, DMs, and reviews handled daily, in your brand voice.' },
  { title: 'Paid social advertising', text: 'Campaign setup, targeting, creative testing, and budget optimization.' },
  { title: 'Influencer & UGC campaigns', text: 'Sourcing creators and managing collaborations from brief to post.' },
  { title: 'Analytics & reporting', text: 'Monthly dashboards tied to leads, sales, and return on ad spend.' },
];

const pricing = [
  { icon: Megaphone, title: 'Fee and ad spend, always separate', text: 'Our management fee never includes your ad budget. You see exactly what goes to Meta, TikTok, or LinkedIn and what goes to us, on every invoice.' },
  { icon: Lock, title: 'You own every account, always', text: 'Pages, ad managers, and business accounts stay registered in your name, with full admin access — during the engagement and after it ends.' },
  { icon: ArrowRight, title: "Cancel with 30 days' notice", text: 'No long-term lock-in. A simple 30-day rolling agreement, and a full handover of accounts, content, and data if you ever leave.' },
];

const first30 = [
  { tag: 'Week 1', title: 'Discovery & audit', text: 'We review your channels, audience, and competitors to find quick wins.' },
  { tag: 'Week 2', title: 'Strategy sign-off', text: 'You approve a 30/60/90-day plan and content calendar before anything goes live.' },
  { tag: 'Week 3', title: 'Content & ads go live', text: 'First posts publish and campaigns launch; we test weekly to improve performance.' },
  { tag: 'Day 30', title: 'First report & scale', text: "Your first full report lands, and we double down on what's working." },
];

const howWeWork = [
  { title: "What's in your monthly report", text: 'Reach, engagement, and follower growth; leads or sales generated; ad spend versus result, by platform. Delivered the first week of every month, with a 30-minute review call on request.' },
  { title: 'How content gets approved', text: 'Every post and ad is shared for review before it goes live. Standard turnaround on revisions is one business day, so nothing ships without your sign-off.' },
  { title: 'If something goes wrong', text: 'Negative comments, a PR issue, or a flagged ad get a same-business-day response from your strategist — never a ticket queue.' },
];

const stats = [
  { value: '143K', label: 'Instagram followers on the Buckeez account', client: 'Food & restaurant' },
  { value: '74.7K', label: 'Instagram followers on the Cobolt Machineries account', client: 'B2B manufacturing' },
];

const stories = [
  { to: '/buckeez', name: 'Buckeez', tag: 'Case study · Food & restaurant', text: 'Established and maintained an active digital presence through consistent marketing, supporting Instagram reach, audience engagement, and brand visibility through regular content.' },
  { to: '/cobolt', name: 'Cobolt Machineries', tag: 'Case study · B2B manufacturing', text: "Improved the brand's digital presence through consistent social media marketing and creative campaigns, supporting ongoing interactions with potential customers." },
];

export default function SocialMediaMarketing({ onOpenConsultation }) {
  return (
    <main className="bg-[#F3F1EE] text-[#101827] font-sans overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-[#F3F1EE] overflow-hidden">
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
            <h1 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] font-semibold tracking-[-0.045em] leading-[1.04]">
              Social Media Marketing Services That Turn Followers Into Paying Customers
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#101827]/65 leading-relaxed">
              Partner with a social media marketing team that builds the strategy, creates the content, and manages the ad spend — so your brand grows on Instagram, Facebook, TikTok, LinkedIn, and X without eating up your time.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={false}>Get My Free Social Media Audit →</Button>
              <Button variant="secondary" size="lg" href="#how-it-works" showArrow={false}>See how it works</Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-2xl p-6 sm:p-8">
              <p className="font-display text-lg font-bold mb-5">Platforms we manage</p>
              <ul className="space-y-3">
                {platforms.map(({ icon: Icon, name }) => (
                  <li key={name} className="flex items-center gap-4 rounded-2xl bg-[#F3F1EE]/70 px-4 py-3">
                    <span className="w-10 h-10 rounded-xl bg-[#4355A5]/10 text-[#4355A5] flex items-center justify-center"><Icon className="w-5 h-5" /></span>
                    <span className="font-semibold">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRANDS STRIP ================= */}
      <section className="bg-white border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 shrink-0">Brands we've grown</span>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {brands.map((b) => (
              <li key={b.name}>
                <Link to={b.to} className="font-display font-bold text-neutral-500 hover:text-[#4355A5] transition-colors">{b.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className={`${section} py-16 sm:py-24`}>
        <span className={eyebrow}>Why Entrain Growth Partners</span>
        <h2 className={`${h2} max-w-3xl`}>Why Businesses Choose Our Social Media Marketing Services</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map(({ icon: Icon, title, text }) => (
            <div key={title} className={card}>
              <span className="w-11 h-11 rounded-2xl bg-[#4355A5]/10 text-[#4355A5] flex items-center justify-center mb-5"><Icon className="w-5 h-5" /></span>
              <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT'S INCLUDED ================= */}
      <section className="bg-white">
        <div className={`${section} py-16 sm:py-24`}>
          <span className={eyebrow}>What's included</span>
          <h2 className={`${h2} max-w-3xl`}>Full-Service Social Media Marketing, Handled End to End</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, idx) => (
              <div key={item.title} className="rounded-3xl bg-[#F3F1EE] border border-neutral-200/90 p-6 sm:p-7">
                <div className="font-mono text-xs font-bold text-[#4355A5] mb-3">0{idx + 1}</div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={false}>See Full Service Packages →</Button>
          </div>
        </div>
      </section>

      {/* ================= PRICING & OWNERSHIP ================= */}
      <section className={`${section} py-16 sm:py-24`}>
        <span className={eyebrow}>Pricing & ownership</span>
        <h2 className={`${h2} max-w-3xl`}>How Pricing Actually Works — No Hidden Line Items</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map(({ icon: Icon, title, text }) => (
            <div key={title} className={card}>
              <span className="w-11 h-11 rounded-2xl bg-[#101827] text-white flex items-center justify-center mb-5"><Icon className="w-5 h-5" /></span>
              <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FIRST 30 DAYS ================= */}
      <section id="how-it-works" className="bg-[#101827] text-white scroll-mt-20">
        <div className={`${section} py-16 sm:py-24`}>
          <span className="text-xs font-mono font-bold tracking-widest text-[#9DB0FF] uppercase block mb-3">Your first 30 days</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.08]">Exactly What Happens After You Sign Up</h2>
          <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block absolute top-3 left-0 right-0 h-px bg-white/15" aria-hidden="true" />
            {first30.map((step) => (
              <div key={step.tag} className="relative">
                <span className="relative inline-block rounded-full bg-[#4355A5] ring-4 ring-[#101827] px-3 py-1 text-xs font-bold mb-5">{step.tag}</span>
                <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-white/65 font-light leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="white" size="lg" onClick={onOpenConsultation} showArrow={false}>Book a Free Strategy Call →</Button>
          </div>
        </div>
      </section>

      {/* ================= PROOF ================= */}
      <section className={`${section} py-16 sm:py-24`}>
        <span className={eyebrow}>Proof</span>
        <h2 className={`${h2} max-w-3xl`}>Real Results From Brands Like Yours</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.value} className={`${card} text-center`}>
              <p className="font-display text-5xl sm:text-6xl font-extrabold text-[#4355A5] leading-none">{stat.value}</p>
              <p className="mt-3 text-sm text-neutral-600 font-light leading-relaxed">{stat.label}</p>
              <p className="mt-1 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">{stat.client}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <Link key={story.to} to={story.to} className={`${card} group block hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4355A5]">{story.tag}</span>
              <h3 className="font-display text-2xl font-bold mt-3 mb-3 group-hover:text-[#4355A5] transition-colors">{story.name}</h3>
              <p className="text-base text-neutral-700 font-light leading-relaxed mb-5">{story.text}</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-[#4355A5]">Read the case study <ArrowUpRight className="w-4 h-4" /></span>
            </Link>
          ))}
        </div>
        <p className="mt-8">
          <Link to="/cobolt" className="inline-flex items-center gap-1 text-sm font-bold text-[#4355A5] hover:underline">
            Read the full social media case study <ArrowUpRight className="w-4 h-4" />
          </Link>
        </p>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-white">
        <div className={`${section} py-16 sm:py-24`}>
          <span className={eyebrow}>How we work with you</span>
          <h2 className={`${h2} max-w-3xl`}>Reporting, Approvals, and Response Times — In Writing</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {howWeWork.map((item) => (
              <div key={item.title} className="rounded-3xl bg-[#F3F1EE] border border-neutral-200/90 p-6 sm:p-7">
                <h3 className="font-display text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <Faq faqs={socialMediaFaqs} heading="Social Media Marketing Services FAQs" intro="" />

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#101827] text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16 sm:py-24 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.08]">Ready to Grow Your Brand on Social Media?</h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto">
            Stop guessing what to post and start seeing real growth. Get a free, no-obligation audit of your current social presence and a custom growth plan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="primary" size="lg" onClick={onOpenConsultation} showArrow={false}>Get My Free Social Media Audit →</Button>
            <Button variant="outline" size="lg" onClick={onOpenConsultation} showArrow={false}>Book a Strategy Call →</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
