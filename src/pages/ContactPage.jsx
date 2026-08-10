import React, { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: 'SEO',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your business goals';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="pt-32 pb-0 bg-[#2596BE] text-white">
      
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-[#2596BE] border-b border-white/15 bg-grid-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="START THE CONVERSATION" variant="blue" className="mb-4" />

          <Reveal direction="up" delay={0.15}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
              Let's build <br />
              <span className="text-[#4355A5] bg-white px-3 py-0.5 rounded-2xl shadow-md inline-block">something that grows.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.25} className="mt-6">
            <p className="text-white/90 text-lg sm:text-xl font-light max-w-2xl">
              Tell us where you are, where you want to go, and we'll help you figure out the next move.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-20 sm:py-28 bg-[#F6FAFC] text-[#101827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={0.1}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#2596BE]/20 text-[#2596BE] border border-[#2596BE]/40 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="font-display text-3xl font-extrabold text-[#101827] mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-[#607080] text-base max-w-md mx-auto mb-8 font-light">
                        Thank you for reaching out to Entrain Growth Lab. Our strategy team is reviewing your information and will respond within 24 hours.
                      </p>
                      <Button
                        variant="primary"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            website: '',
                            service: 'SEO',
                            message: '',
                          });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="font-display text-2xl font-bold text-[#101827] mb-6">
                        Strategy Inquiry Form
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#607080] mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 rounded-xl bg-[#F6FAFC] border text-sm text-[#101827] focus:outline-none transition-all ${
                              errors.name
                                ? 'border-red-500'
                                : 'border-slate-200 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                            }`}
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#607080] mb-2">
                            Business Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={`w-full px-4 py-3 rounded-xl bg-[#F6FAFC] border text-sm text-[#101827] focus:outline-none transition-all ${
                              errors.email
                                ? 'border-red-500'
                                : 'border-slate-200 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#607080] mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className={`w-full px-4 py-3 rounded-xl bg-[#F6FAFC] border text-sm text-[#101827] focus:outline-none transition-all ${
                              errors.phone
                                ? 'border-red-500'
                                : 'border-slate-200 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                            }`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#607080] mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Corp"
                            className={`w-full px-4 py-3 rounded-xl bg-[#F6FAFC] border text-sm text-[#101827] focus:outline-none transition-all ${
                              errors.company
                                ? 'border-red-500'
                                : 'border-slate-200 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                            }`}
                          />
                          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                        </div>
                      </div>

                      {/* Website */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#607080] mb-2">
                          Company Website (Optional)
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#F6FAFC] border border-slate-200 text-sm text-[#101827] focus:outline-none focus:border-[#4355A5]"
                        />
                      </div>

                      {/* Services Dropdown */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#607080] mb-2">
                          Services Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#F6FAFC] border border-slate-200 text-sm text-[#101827] focus:outline-none focus:border-[#4355A5]"
                        >
                          <option value="SEO">SEO (Search Engine Optimization)</option>
                          <option value="Paid Advertising">Paid Advertising (Google & Meta Ads)</option>
                          <option value="Social Media Marketing">Social Media Marketing</option>
                          <option value="Content Marketing">Content Marketing</option>
                          <option value="Web Design & Development">Web Design & Development</option>
                          <option value="Branding">Branding & Visual Identity</option>
                          <option value="Full Strategy Package">Full Growth Strategy</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#607080] mb-2">
                          Growth Goals / Message *
                        </label>
                        <textarea
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your business goals and main marketing challenges..."
                          className={`w-full px-4 py-3 rounded-xl bg-[#F6FAFC] border text-sm text-[#101827] focus:outline-none transition-all ${
                            errors.message
                              ? 'border-red-500'
                              : 'border-slate-200 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                          }`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>

                      {/* Submit button */}
                      <div>
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="w-full justify-center"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Sending Message...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="w-4 h-4" />
                              Start the Conversation →
                            </span>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}

                </div>
              </Reveal>
            </div>

            {/* Right Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal direction="up" delay={0.2}>
                <div className="p-8 rounded-3xl bg-[#101827] text-white space-y-6 shadow-xl border border-[#4355A5]/30">
                  
                  <span className="text-xs font-mono font-bold tracking-widest text-[#2596BE] uppercase block">
                    // DIRECT CONTACT
                  </span>
                  
                  <h3 className="font-display text-2xl font-bold text-white">
                    Contact Details
                  </h3>

                  <div className="space-y-6 text-sm text-[#9AA8B5]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-white flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#9AA8B5] font-mono block">STRATEGY EMAIL</span>
                        <span className="text-white font-medium text-base">[EMAIL ADDRESS]</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-white flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#9AA8B5] font-mono block">DIRECT LINE</span>
                        <span className="text-white font-medium text-base">[PHONE NUMBER]</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-white flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#9AA8B5] font-mono block">OFFICE LOCATION</span>
                        <span className="text-white font-medium text-base">[OFFICE ADDRESS]</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-white flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#9AA8B5] font-mono block">RESPONSE TIME</span>
                        <span className="text-white font-medium text-base">Within 24 Hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <span className="text-xs font-mono text-[#9AA8B5] block uppercase">
                      SOCIAL MEDIA
                    </span>
                    <div className="flex items-center gap-3">
                      <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram" className="w-10 h-10 rounded-xl bg-white/10 text-[#2596BE] hover:bg-[#4355A5] hover:text-white flex items-center justify-center transition-colors">
                        <FaInstagram className="w-4 h-4" />
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-white/10 text-[#2596BE] hover:bg-[#4355A5] hover:text-white flex items-center justify-center transition-colors">
                        <FaLinkedinIn className="w-4 h-4" />
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook" className="w-10 h-10 rounded-xl bg-white/10 text-[#2596BE] hover:bg-[#4355A5] hover:text-white flex items-center justify-center transition-colors">
                        <FaFacebookF className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
