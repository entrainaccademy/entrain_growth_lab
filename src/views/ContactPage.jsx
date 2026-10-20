import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa6';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

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

    const message = [
      'New enquiry from the Entrain Growth Partners website',
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Company: ${formData.company.trim()}`,
      formData.website.trim() && `Website: ${formData.website.trim()}`,
      `Service: ${formData.service}`,
      `Message: ${formData.message.trim()}`,
    ].filter(Boolean).join('\n');
    const url = `https://wa.me/919745235226?text=${encodeURIComponent(message)}`;
    setWhatsAppUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <main className="pt-20 pb-0 text-[#202124] bg-[#F3F1EE]">
      
      {/* Header Banner */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#2596BE] via-[#4355A5] to-[#34448F] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal direction="up" delay={0.2}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] tracking-tight mb-4">
              Let&apos;s <span className="text-[#4355A5] bg-white px-4 py-0.5 rounded-2xl shadow-lg inline-block">Talk.</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto font-light">
              Tell us about your business and the growth you want to build. Reach us by WhatsApp, phone, or email.
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
                        Your WhatsApp message is ready
                      </h3>
                      <p className="text-[#202124]/70 text-base max-w-md mx-auto mb-8 font-light">
                        Review the message in WhatsApp and tap Send to complete your enquiry.
                      </p>
                      <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1fb95a]">
                        <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> Open WhatsApp
                      </a>
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
                        className="mt-3 block mx-auto px-8 py-3.5 rounded-full bg-[#4355A5] text-[#FFFFFF] font-bold text-sm hover:bg-[#34458F] transition-all duration-200 shadow-md shadow-[#4355A5]/25"
                      >
                        Start Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-[#202124] mb-2">Tell us about your project</h3>
                        <p className="text-sm text-[#202124]/65">This form prepares a WhatsApp message for you to review and send.</p>
                      </div>

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
                            placeholder="+91 97452 35226"
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
                          <option value="Performance Marketing">Performance Marketing (Google & Meta Ads)</option>
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
                          Growth Goals / Message 
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
                          className="w-full py-4 px-8 rounded-full bg-[#4355A5] text-[#FFFFFF] font-bold text-base hover:bg-[#34458F] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#4355A5]/25 hover:shadow-xl hover:shadow-[#4355A5]/35 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                          Continue in WhatsApp
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
                <div className="p-8 sm:p-10 rounded-3xl bg-white text-[#202124] space-y-6 shadow-xl shadow-[#4355A5]/5 border border-[#E6E5E2] relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#4355A5]/5 rounded-full blur-3xl pointer-events-none" />
                  
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#202124]">
                    Contact Details
                  </h3>

                  <div className="space-y-6 text-sm text-[#202124]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#4355A5]/30">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#202124]/60 font-mono block uppercase">EMAIL</span>
                        <a href="mailto:entraingrowthpartners@gmail.com" className="text-[#202124] hover:text-[#4355A5] font-medium text-base break-all transition-colors">entraingrowthpartners@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#4355A5]/30">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#202124]/60 font-mono block uppercase">DIRECT LINE</span>
                        <a href="tel:+919745235226" className="text-[#202124] hover:text-[#4355A5] font-medium text-base transition-colors cursor-pointer block">
                          +91 97452 35226
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#4355A5]/30">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#202124]/60 font-mono block uppercase">OFFICE LOCATION</span>
                        <address className="text-[#202124] font-medium text-base not-italic">Entrain Academy, Veemboor Narukara, Ernad, Malappuram-676122, Kerala, India</address>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#4355A5] text-[#FFFFFF] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#4355A5]/30">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-[#202124]/60 font-mono block uppercase">WORKING HOURS</span>
                        <span className="text-[#202124] font-medium text-base">Monday to Saturday, 9:00 AM–5:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-[#4355A5]/20 space-y-3">
                    <span className="text-xs font-mono text-[#202124]/60 block uppercase tracking-wider">
                      CONNECT WITH US
                    </span>
                    <div className="flex items-center gap-3">
                      <a href="https://www.instagram.com/entrain.growth.partners/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-white text-[#4355A5] hover:bg-[#4355A5] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105">
                        <FaInstagram className="w-4 h-4" />
                      </a>
                      <a href="https://www.linkedin.com/in/entrain-growth-partners-b64109430" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-white text-[#4355A5] hover:bg-[#4355A5] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105">
                        <FaLinkedinIn className="w-4 h-4" />
                      </a>
                      <a href="https://www.facebook.com/people/Entrain-growth-partners/61593178871374/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-white text-[#4355A5] hover:bg-[#4355A5] hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105">
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
