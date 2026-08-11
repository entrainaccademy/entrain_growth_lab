import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, Loader2 } from 'lucide-react';
import Button from './Button';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'SEO',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your goals';
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

    const emailSubject = `New Consultation Request - ${formData.name}`;
    const emailBody =
      `New Strategy Session Request Details:\n\n` +
      `Full Name: ${formData.name}\n` +
      `Business Email: ${formData.email}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Company Name: ${formData.company}\n` +
      `Primary Service Interest: ${formData.service}\n\n` +
      `Growth Goals / Message:\n${formData.message}`;

    const mailtoUrl = `mailto:entraingrowthpartners@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    const messageText =
      `*New Consultation Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Company:* ${formData.company}\n` +
      `*Service Interest:* ${formData.service}\n` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919745235226?text=${encodeURIComponent(messageText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = mailtoUrl;
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'SEO',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto cursor-default">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#11152B]/80 backdrop-blur-md cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#F2F3F8] text-[#050505] rounded-3xl overflow-hidden z-10 my-8 shadow-2xl shadow-[#4355A5]/10 cursor-default"
        >
          {/* Header */}
          <div className="bg-[#11152B] p-6 sm:p-8 border-b border-[#F2F3F8]/15 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#F2F3F8] hover:text-[#FFFFFF] rounded-full bg-white/10 hover:bg-[#4355A5] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-bold tracking-widest text-[#4355A5] uppercase block mb-2">
              
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#FFFFFF]">
              Book a Free Consultation
            </h3>
            <p className="text-[#F2F3F8]/80 text-sm mt-1">
              Tell us about your business goals and main marketing challenges.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 bg-[#FFFFFF]">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#4355A5]/10 text-[#4355A5] border border-[#4355A5]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display text-2xl font-bold text-[#050505] mb-2">
                  Consultation Request Received!
                </h4>
                <p className="text-[#050505]/70 max-w-md mx-auto mb-6 text-sm">
                  Thank you for reaching out to Entrain Growth Lab. Our strategy team will review your details and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-[#4355A5] text-[#FFFFFF] font-bold text-sm hover:bg-[#34458F] transition-all duration-200 cursor-pointer shadow-md shadow-[#4355A5]/25"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#050505]/70 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#F2F3F8]/60 border text-sm text-[#050505] placeholder-[#050505]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all cursor-text ${errors.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-[#F2F3F8] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                        }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#050505]/70 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#F2F3F8]/60 border text-sm text-[#050505] placeholder-[#050505]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all cursor-text ${errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-[#F2F3F8] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#050505]/70 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#F2F3F8]/60 border text-sm text-[#050505] placeholder-[#050505]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all cursor-text ${errors.phone
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-[#F2F3F8] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                        }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#050505]/70 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#F2F3F8]/60 border text-sm text-[#050505] placeholder-[#050505]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all cursor-text ${errors.company
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-[#F2F3F8] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                        }`}
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#050505]/70 mb-1">
                    Primary Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F2F3F8]/60 border border-[#F2F3F8] text-sm text-[#050505] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20 cursor-pointer transition-all"
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

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#050505]/70 mb-1">
                    Growth Goals / Message *
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business goals and main marketing challenges..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#F2F3F8]/60 border text-sm text-[#050505] placeholder-[#050505]/40 focus:bg-[#FFFFFF] focus:outline-none transition-all cursor-text ${errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-[#F2F3F8] focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                      }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-8 rounded-full bg-[#4355A5] text-[#FFFFFF] font-bold text-sm hover:bg-[#34458F] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#4355A5]/25 hover:shadow-xl hover:shadow-[#4355A5]/35 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing Consultation...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Request Consultation
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
