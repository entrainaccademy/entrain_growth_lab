import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const inputClass = 'w-full rounded-xl border border-[#D9DFEF] bg-white px-4 py-3 text-sm text-[#101827] placeholder:text-[#101827]/40 focus:outline-none focus:ring-2 focus:ring-[#4355A5]';

export default function HomeEnquiryForm() {
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      'New enquiry from the Entrain Growth Partners homepage',
      `Name: ${String(form.get('name')).trim()}`,
      `Phone: ${String(form.get('phone')).trim()}`,
      form.get('email') && `Email: ${String(form.get('email')).trim()}`,
      `Business goals: ${String(form.get('message')).trim()}`,
    ].filter(Boolean).join('\n');
    const url = `https://wa.me/919745235226?text=${encodeURIComponent(message)}`;
    setWhatsAppUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#E0E5F1] bg-white p-5 text-left shadow-xl shadow-[#4355A5]/10 sm:mt-12 sm:p-8">
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="home-enquiry-name" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#475569]">Your name *</label>
          <input id="home-enquiry-name" name="name" type="text" autoComplete="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="home-enquiry-phone" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#475569]">Phone number *</label>
          <input id="home-enquiry-phone" name="phone" type="tel" autoComplete="tel" required className={inputClass} placeholder="+91 98765 43210" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="home-enquiry-email" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#475569]">Email address <span className="normal-case tracking-normal text-[#64748B]">(optional)</span></label>
          <input id="home-enquiry-email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@company.com" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="home-enquiry-message" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#475569]">What would you like to grow? *</label>
          <textarea id="home-enquiry-message" name="message" rows="3" required className={inputClass} placeholder="Tell us a little about your business and goals" />
        </div>
        <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-xs leading-relaxed text-[#64748B]">This opens a prepared WhatsApp message. Review it and tap Send to contact us.</p>
          <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#4355A5] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#344590] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4355A5]">
            <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> Continue in WhatsApp <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>
      {whatsAppUrl && (
        <p role="status" className="mt-5 border-t border-[#E0E5F1] pt-4 text-sm text-[#475569]">
          WhatsApp didn&apos;t open? <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4355A5] underline underline-offset-4">Open your prepared message</a>.
        </p>
      )}
    </div>
  );
}
