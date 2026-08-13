import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, Loader2 } from 'lucide-react';

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
      `Company Name: ${formData.company}\n\n` +
      `Growth Goals / Message:\n${formData.message}`;

    const mailtoUrl = `mailto:entraingrowthpartners@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    const messageText =
      `*New Consultation Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Company:* ${formData.company}\n` +
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
      <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-5 sm:px-6 sm:py-8 overflow-y-auto cursor-default">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#101827]/75 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-lg sm:max-w-xl max-h-[92vh] sm:max-h-[88vh] bg-white border border-neutral-200/90 text-[#101827] rounded-3xl overflow-hidden z-10 my-auto shadow-2xl flex flex-col cursor-default"
        >
          {/* Modal Header */}
          <div className="bg-[#101827] px-6 py-5 sm:px-8 sm:py-6 relative text-white shrink-0 border-b border-neutral-800">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-full bg-white/10 hover:bg-[#4355A5] transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-white pr-8">
              Book a Free Consultation
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm mt-1 max-w-md font-light leading-relaxed">
              Tell us about your business goals and main marketing challenges.
            </p>
          </div>

          {/* Form Content Body */}
          <div className="px-6 py-6 sm:px-8 sm:py-8 bg-white overflow-y-auto flex-1">
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#4355A5]/10 text-[#4355A5] border border-[#4355A5]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#4355A5]" />
                </div>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#101827] mb-2">
                  Consultation Request Received!
                </h4>
                <p className="text-neutral-600 max-w-md mx-auto mb-6 text-xs sm:text-sm font-light leading-relaxed">
                  Thank you for reaching out to entrain growth labs. Our strategy team will review your details and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-[#4355A5] text-white font-bold text-xs sm:text-sm hover:bg-[#34458F] transition-all cursor-pointer shadow-md shadow-[#4355A5]/25"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-2.5 sm:py-3 rounded-2xl bg-[#F3F1EE]/80 border text-xs sm:text-sm text-[#101827] placeholder-neutral-400 focus:bg-white focus:outline-none transition-all cursor-text ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-neutral-200/90 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`w-full px-4 py-2.5 sm:py-3 rounded-2xl bg-[#F3F1EE]/80 border text-xs sm:text-sm text-[#101827] placeholder-neutral-400 focus:bg-white focus:outline-none transition-all cursor-text ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-neutral-200/90 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-2.5 sm:py-3 rounded-2xl bg-[#F3F1EE]/80 border text-xs sm:text-sm text-[#101827] placeholder-neutral-400 focus:bg-white focus:outline-none transition-all cursor-text ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-neutral-200/90 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={`w-full px-4 py-2.5 sm:py-3 rounded-2xl bg-[#F3F1EE]/80 border text-xs sm:text-sm text-[#101827] placeholder-neutral-400 focus:bg-white focus:outline-none transition-all cursor-text ${
                        errors.company
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-neutral-200/90 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                      }`}
                    />
                    {errors.company && <p className="text-red-500 text-[11px] mt-1">{errors.company}</p>}
                  </div>
                </div>

                {/* Growth Goals / Message */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Growth Goals / Message 
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business goals and main marketing challenges..."
                    className={`w-full px-4 py-2.5 sm:py-3 rounded-2xl bg-[#F3F1EE]/80 border text-xs sm:text-sm text-[#101827] placeholder-neutral-400 focus:bg-white focus:outline-none transition-all cursor-text ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-neutral-200/90 focus:border-[#4355A5] focus:ring-2 focus:ring-[#4355A5]/20'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 px-8 rounded-full bg-[#4355A5] text-white font-bold text-xs sm:text-sm hover:bg-[#34458F] active:scale-[0.99] transition-all duration-200 shadow-md shadow-[#4355A5]/25 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing Consultation...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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

