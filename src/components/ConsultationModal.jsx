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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
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
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0A0A]/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#141414] border border-[#282828] text-[#F5F5F0] rounded-3xl overflow-hidden z-10 my-8 shadow-2xl"
        >
          {/* Header */}
          <div className="bg-[#0A0A0A] p-6 sm:p-8 border-b border-[#282828] relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#9A9A94] hover:text-[#C7FF3D] rounded-full bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C7FF3D] uppercase block mb-2">
              // STRATEGY SESSION
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Book a Free Consultation
            </h3>
            <p className="text-[#9A9A94] text-sm mt-1">
              Tell us about your business goals and main marketing challenges.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#C7FF3D]/20 text-[#C7FF3D] border border-[#C7FF3D]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white mb-2">
                  Consultation Request Received!
                </h4>
                <p className="text-[#9A9A94] max-w-md mx-auto mb-6 text-sm">
                  Thank you for reaching out to Entrain Growth Lab. Our strategy team will review your details and get back to you within 24 hours.
                </p>
                <Button variant="primary" onClick={handleReset}>
                  Done
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#9A9A94] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0A0A0A] border text-sm text-white focus:outline-none transition-all ${errors.name
                          ? 'border-red-500'
                          : 'border-[#282828] focus:border-[#C7FF3D]'
                        }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#9A9A94] mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0A0A0A] border text-sm text-white focus:outline-none transition-all ${errors.email
                          ? 'border-red-500'
                          : 'border-[#282828] focus:border-[#C7FF3D]'
                        }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#9A9A94] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0A0A0A] border text-sm text-white focus:outline-none transition-all ${errors.phone
                          ? 'border-red-500'
                          : 'border-[#282828] focus:border-[#C7FF3D]'
                        }`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#9A9A94] mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0A0A0A] border text-sm text-white focus:outline-none transition-all ${errors.company
                          ? 'border-red-500'
                          : 'border-[#282828] focus:border-[#C7FF3D]'
                        }`}
                    />
                    {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#9A9A94] mb-1">
                    Primary Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0A0A0A] border border-[#282828] text-sm text-white focus:outline-none focus:border-[#C7FF3D]"
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
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#9A9A94] mb-1">
                    Growth Goals / Message *
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business goals and main marketing challenges..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#0A0A0A] border text-sm text-white focus:outline-none transition-all ${errors.message
                        ? 'border-red-500'
                        : 'border-[#282828] focus:border-[#C7FF3D]'
                      }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full justify-center py-3.5"
                    disabled={isSubmitting}
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
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
