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
    <main className="pt-28 pb-0 text-[#202124] bg-[#F3F1EE]">
      
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-[#202124] text-[#FFFFFF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4355A5_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal direction="down" delay={0.1}>
           
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] tracking-tight mb-4">
              Let's Scale Your <span className="text-[#4355A5]">Growth</span>
            </h1>
            <p className="text-[#E6E5E2] text-lg sm:text-xl max-w-2xl mx-auto font-light">
              Have a project in mind or want to discuss strategic marketing? Reach out to our team of experts today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 sm:py-24 bg-[#F3F1EE] text-[#202124]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={0.1}>
                <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E6E5E2] shadow-xl shadow-[#4355A5]/5">
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#4355A5]/10 text-[#4355A5] border border-[#4355A5]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="font-display text-3xl font-extrabold text-[#202124] mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-[#202124]/70 text-base max-w-md mx-auto mb-8 font-light">
                        Thank you for reaching out to Entrain Growth Lab. Our strategy team is reviewing your information and will respond within 24 hours.
                      </p>
                      <button
                        type="button"
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
                        className="px-8 py-3.5 rounded-full bg-[#4355A5] text-[#FFFFFF] font-bold text-sm hover:bg-[#34458F] transition-all duration-200 shadow-md shadow-[#4355A5]/25"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="font-display text-2xl font-bold text-[#202124] mb-6">
                        Strategy Inquiry Form
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#202124]/70 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 rounded-xl bg-[#E6E5E2]/50 border text-sm text-[#202124] placeholder-[#202124]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all duration-200 ${
                              errors.name
                                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                                : 'border-[#E6E5E2] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                            }`}
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#202124]/70 mb-2">
                            Business Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={`w-full px-4 py-3 rounded-xl bg-[#E6E5E2]/50 border text-sm text-[#202124] placeholder-[#202124]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all duration-200 ${
                              errors.email
                                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                                : 'border-[#E6E5E2] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#202124]/70 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className={`w-full px-4 py-3 rounded-xl bg-[#E6E5E2]/50 border text-sm text-[#202124] placeholder-[#202124]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all duration-200 ${
                              errors.phone
                                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                                : 'border-[#E6E5E2] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                            }`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#202124]/70 mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Corp"
                            className={`w-full px-4 py-3 rounded-xl bg-[#E6E5E2]/50 border text-sm text-[#202124] placeholder-[#202124]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all duration-200 ${
                              errors.company
                                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                                : 'border-[#E6E5E2] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                            }`}
                          />
                          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                        </div>
                      </div>

                      {/* Website */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#202124]/70 mb-2">
                          Company Website (Optional)
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#E6E5E2]/50 border border-[#E6E5E2] text-sm text-[#202124] placeholder-[#202124]/40 focus:bg-[#FFFFFF] focus:outline-none focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20 transition-all duration-200"
                        />
                      </div>

                      {/* Services Dropdown */}
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#202124]/70 mb-2">
                          Services Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#E6E5E2]/50 border border-[#E6E5E2] text-sm text-[#202124] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20 transition-all duration-200"
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
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#202124]/70 mb-2">
                          Growth Goals / Message *
                        </label>
                        <textarea
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your business goals and main marketing challenges..."
                          className={`w-full px-4 py-3 rounded-xl bg-[#E6E5E2]/50 border text-sm text-[#202124] placeholder-[#202124]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all duration-200 ${
                            errors.message
                              ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                              : 'border-[#E6E5E2] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                          }`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>

                      {/* Submit button */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 px-8 rounded-full bg-[#4355A5] text-[#FFFFFF] font-bold text-base hover:bg-[#34458F] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#4355A5]/25 hover:shadow-xl hover:shadow-[#4355A5]/35 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
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
                        </button>
                      </div>
                    </form>
                  )}

                </div>
              </Reveal>
            </div>

            {/* Right Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal direction="up" delay={0.2}>
                <div className="p-8 sm:p-10 rounded-3xl bg-[#202124] text-[#FFFFFF] space-y-6 shadow-xl border border-[#4355A5]/30 relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#4355A5]/20 rounded-full blur-3xl pointer-events-none" />

                  <span className="text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase block">
                    // DIRECT CONTACT
                  </span>
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
                    Contact Details
                  </h3>

                  <div className="space-y-6 text-sm text-[#E6E5E2]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#4355A5]/30">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#E6E5E2] font-mono block uppercase">STRATEGY EMAIL</span>
                        <span className="text-[#FFFFFF] font-medium text-base">hello@entraingrowthlabs.com</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#4355A5]/30">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#E6E5E2] font-mono block uppercase">DIRECT LINE</span>
                        <a href="tel:9745235226" className="text-[#FFFFFF] hover:text-[#4355A5] font-medium text-base transition-colors cursor-pointer block">
                          +91 9745235226
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#4355A5]/30">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#E6E5E2] font-mono block uppercase">OFFICE LOCATION</span>
                        <span className="text-[#FFFFFF] font-medium text-base">San Francisco, CA & Global Remote</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#4355A5]/30">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#E6E5E2] font-mono block uppercase">RESPONSE TIME</span>
                        <span className="text-[#FFFFFF] font-medium text-base">Within 24 Hours</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-[#E6E5E2]/20 space-y-3">
                    <span className="text-xs font-mono text-[#E6E5E2] block uppercase tracking-wider">
                      CONNECT WITH US
                    </span>
                    <div className="flex items-center gap-3">
                      <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram" className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 text-[#FFFFFF] hover:bg-[#4355A5] hover:text-[#FFFFFF] flex items-center justify-center transition-all duration-200 hover:scale-105">
                        <FaInstagram className="w-4 h-4" />
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 text-[#FFFFFF] hover:bg-[#4355A5] hover:text-[#FFFFFF] flex items-center justify-center transition-all duration-200 hover:scale-105">
                        <FaLinkedinIn className="w-4 h-4" />
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()} aria-label="Facebook" className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 text-[#FFFFFF] hover:bg-[#4355A5] hover:text-[#FFFFFF] flex items-center justify-center transition-all duration-200 hover:scale-105">
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
