import { useState, useEffect, FormEvent } from 'react';
import { Phone, MapPin, Clock, Mail, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import { getBusinessStatus, BusinessStatus } from '../utils/hoursChecker';

export function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: BUSINESS_CONFIG.services[0]?.title || 'Carpet Cleaning',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<BusinessStatus>(() => getBusinessStatus());

  useEffect(() => {
    // Keep Central Time status updated
    const interval = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Listen for anchor link hash parameter to auto-select service
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes('service=')) {
        const serviceId = hash.split('service=')[1];
        const matched = BUSINESS_CONFIG.services.find((s) => s.id === serviceId);
        if (matched) {
          setFormData((prev) => ({ ...prev, service: matched.title }));
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else {
      // Basic phone check: at least 7 digits
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length < 7) {
        newErrors.phone = 'Please enter a valid phone number (at least 7 digits)';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate brief client-side response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: BUSINESS_CONFIG.services[0]?.title || 'Carpet Cleaning',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div id="contact" className="bg-[#F2F8FA] pt-20 sm:pt-24 scroll-mt-16">
      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0E5C73] mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A33] tracking-tight mb-3">
            Ready for Restored Carpets?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out by phone or submit the short form below for a free, transparent quote. We look forward to serving your home.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: Contact Form (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-[10px] p-6 sm:p-9 border border-slate-200/80 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center" role="alert" aria-live="polite">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B2A33] mb-2">Quote Request Received!</h3>
                <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1B2A33]">{formData.name}</span>. We have received your request for{' '}
                  <span className="font-semibold text-[#0E5C73]">{formData.service}</span>. Our team will contact you shortly at{' '}
                  <span className="font-semibold text-[#1B2A33]">{formData.phone}</span>.
                </p>
                <div className="p-4 bg-[#F2F8FA] rounded-[8px] max-w-sm mx-auto text-xs text-slate-500 mb-6 border border-slate-200/60">
                  Need faster service? Feel free to call us directly at{' '}
                  <a href={BUSINESS_CONFIG.phoneTel} className="font-bold text-[#0E5C73] hover:underline">
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E5C73] hover:text-[#0A4457] hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1B2A33] mb-1">Request a Free Quote</h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill out this form and we'll reply with pricing and schedule availability.
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="form-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 text-sm bg-white border ${
                      errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-[#2BB6C4]'
                    } rounded-[8px] text-[#1B2A33] placeholder-slate-400 transition-colors`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-amber-600">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="e.g. (615) 555-0123"
                      className={`w-full px-4 py-3 text-sm bg-white border ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-[#2BB6C4]'
                      } rounded-[8px] text-[#1B2A33] placeholder-slate-400 transition-colors`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-amber-600">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-3 text-sm bg-white border ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300 focus:border-[#2BB6C4]'
                      } rounded-[8px] text-[#1B2A33] placeholder-slate-400 transition-colors`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="form-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Needed
                  </label>
                  <select
                    id="form-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 focus:border-[#2BB6C4] rounded-[8px] text-[#1B2A33] transition-colors"
                  >
                    {BUSINESS_CONFIG.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Multiple Services / Whole Home">Multiple Services / Whole Home</option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="form-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Details / Rooms / Stains <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the areas you'd like cleaned, stain types, or preferred dates..."
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 focus:border-[#2BB6C4] rounded-[8px] text-[#1B2A33] placeholder-slate-400 transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F2A33A] hover:bg-[#e29329] active:bg-[#c97f1f] text-[#1B2A33] font-bold text-base py-3.5 px-6 rounded-[10px] shadow-sm hover:shadow transition-all duration-150 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Request Free Quote</span>
                      <Sparkles className="w-4 h-4 fill-current shrink-0" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  No payment required today. We respect your privacy and never share your details.
                </p>
              </form>
            )}
          </div>

          {/* Column 2: Direct Contact, Service Area & Hours Table (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone & Service Area Card */}
            <div className="bg-white rounded-[10px] p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <h3 className="text-base font-bold text-[#1B2A33] mb-4 uppercase tracking-wider text-xs">
                Direct Contact
              </h3>

              {/* Clickable Phone Number */}
              <div className="mb-5">
                <a
                  href={BUSINESS_CONFIG.phoneTel}
                  className="group inline-flex items-center gap-3.5 text-[#0E5C73] hover:text-[#0A4457] transition-colors"
                  aria-label={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
                >
                  <div className="w-11 h-11 rounded-[8px] bg-[#0E5C73]/10 group-hover:bg-[#0E5C73]/15 flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-5 h-5 text-[#0E5C73]" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase">Call or Text</span>
                    <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0E5C73] group-hover:underline">
                      {BUSINESS_CONFIG.phoneDisplay}
                    </span>
                  </div>
                </a>
              </div>

              {/* Service Area line (No street address provided or shown) */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2BB6C4] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Service Area
                  </span>
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {BUSINESS_CONFIG.serviceArea}
                  </span>
                </div>
              </div>
            </div>

            {/* Weekly Hours Table Card */}
            <div className="bg-white rounded-[10px] p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0E5C73]" />
                  <h3 className="text-sm font-bold text-[#1B2A33] uppercase tracking-wider">
                    Weekly Hours (CT)
                  </h3>
                </div>

                {/* Live Open / Closed Pill */}
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen ? 'bg-emerald-500' : 'bg-slate-400'
                    }`}
                  />
                  <span className={status.isOpen ? 'text-emerald-700 font-bold' : 'text-slate-600'}>
                    {status.badgeLabel}
                  </span>
                </div>
              </div>

              {/* Hours Table */}
              <div className="divide-y divide-slate-100 text-sm">
                {BUSINESS_CONFIG.hours.map((item) => {
                  const isToday = item.dayIndex === status.todayDayIndex;
                  return (
                    <div
                      key={item.dayName}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-[6px] transition-colors ${
                        isToday
                          ? 'bg-[#2BB6C4]/15 font-semibold text-[#0E5C73] ring-1 ring-[#2BB6C4]/30'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.dayName}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#0E5C73] bg-white px-1.5 py-0.5 rounded shadow-2xs">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={`tabular-nums ${item.isClosed ? 'text-slate-400' : 'text-[#1B2A33]'}`}>
                        {item.displayHours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-3 text-[11px] text-slate-500 italic">
                * Times shown in Central Time (CT). Emergency spill calls accommodated when available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slim Dark Teal Footer */}
      <footer className="bg-[#0A4457] text-white border-t border-[#0E5C73]/40 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo in dark variant */}
            <Logo variant="dark" />

            {/* Quick Contact & Details */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-cyan-100/90 font-medium">
              <a
                href={BUSINESS_CONFIG.phoneTel}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#2BB6C4]" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
              <span className="hidden sm:inline text-cyan-300/30">·</span>
              <span>Serving {BUSINESS_CONFIG.serviceAreaShort}</span>
              <span className="hidden sm:inline text-cyan-300/30">·</span>
              <span>5.0 Rating (8 Reviews)</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-cyan-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cyan-200/60">
            <p>
              &copy; {new Date().getFullYear()} {BUSINESS_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-[11px]">
              Professional carpet cleaning & restoration in Middle Tennessee.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
