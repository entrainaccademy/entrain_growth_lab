import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { submitLead } from '../lib/submitLead';

const inputClass = 'w-full rounded-xl border border-[#D9DFEF] bg-white px-4 py-3 text-sm text-[#101827] placeholder:text-[#101827]/40 focus:outline-none focus:ring-2 focus:ring-[#4355A5]';

export default function HomeEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    setIsSubmitting(true);
    setStatus('');
    try {
      await submitLead({
        name: String(form.get('name')).trim(),
        phone: String(form.get('phone')).trim(),
        email: String(form.get('email') || '').trim(),
        message: String(form.get('message')).trim(),
        source: 'Homepage form',
      });
      formElement.reset();
      setStatus('Thanks! Your enquiry has been received. We’ll be in touch soon.');
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
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
          <p className="max-w-sm text-xs leading-relaxed text-[#64748B]">Send your details and our team will contact you.</p>
          <button type="submit" disabled={isSubmitting} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#4355A5] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#344590] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4355A5] disabled:opacity-60">
            {isSubmitting ? 'Sending...' : 'Send enquiry'} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>
      {status && <p role="status" className="mt-5 border-t border-[#E0E5F1] pt-4 text-sm text-[#475569]">{status}</p>}
    </div>
  );
}
