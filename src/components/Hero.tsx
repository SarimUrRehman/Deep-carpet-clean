import { useEffect, useState } from 'react';
import { Phone, ArrowRight, Clock, Star } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import { getBusinessStatus, BusinessStatus } from '../utils/hoursChecker';

export function Hero() {
  const [status, setStatus] = useState<BusinessStatus>(() => getBusinessStatus());

  useEffect(() => {
    // Re-check operating status every 60 seconds
    const interval = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#0A4457] text-white overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28">
      {/* Background Image with Dark Teal Overlay Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_clean_living_room_carpet_1792874728390.jpg"
          alt="Clean restored living room carpet with professional vacuum lines"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle decorative carpet fiber & wave SVG pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 15 10, 30 20 T 60 20 M0 40 Q 15 30, 30 40 T 60 40' fill='none' stroke='%232BB6C4' stroke-width='1.2' stroke-opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Deep teal gradient scrim for maximum text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072F3D]/95 via-[#0A4457]/90 to-[#0E5C73]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          {/* Trust Metadata & Status Strip (Zero-Pill Discipline) */}
          <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 mb-6 text-sm text-cyan-100/90 font-medium">
            {/* 5.0 Star Rating */}
            <div className="flex items-center gap-1.5" aria-label="5.0 stars from 8 verified reviews">
              <span className="flex text-[#F2A33A] tracking-tighter" aria-hidden="true">
                <Star className="w-4 h-4 fill-current stroke-none" />
                <Star className="w-4 h-4 fill-current stroke-none" />
                <Star className="w-4 h-4 fill-current stroke-none" />
                <Star className="w-4 h-4 fill-current stroke-none" />
                <Star className="w-4 h-4 fill-current stroke-none" />
              </span>
              <span className="font-bold text-white">5.0</span>
              <span className="text-cyan-200/80">· 8 reviews</span>
            </div>

            <span className="hidden sm:inline text-cyan-300/40" aria-hidden="true">|</span>

            {/* Live Open / Closed Indicator */}
            <div className="inline-flex items-center gap-2" title="Operating hours in Middle Tennessee (Central Time)">
              <span
                className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                  status.isOpen ? 'bg-emerald-400 ring-2 ring-emerald-400/40' : 'bg-amber-400/80 ring-2 ring-amber-400/30'
                }`}
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {status.statusText}
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5 text-balance">
            Deep Clean. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#2BB6C4]">
              Fully Restored.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8 font-normal">
            Professional carpet cleaning and restoration across{' '}
            <strong className="font-semibold text-white">{BUSINESS_CONFIG.serviceAreaShort}</strong>. Bring your carpets back to life with deep-pile dirt extraction and gentle care.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            {/* Primary Action: Solid Amber Call Button */}
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F2A33A] hover:bg-[#e29329] active:bg-[#c97f1f] text-[#1B2A33] px-7 py-3.5 rounded-[10px] text-base font-bold shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5"
              aria-label={`Call Deep Carpet Restoration at ${BUSINESS_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-5 h-5 fill-current shrink-0" />
              <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            {/* Secondary Action: Outlined White Quote Button */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/80 hover:border-white text-white hover:bg-white/10 active:bg-white/20 px-6 py-3.5 rounded-[10px] text-base font-semibold transition-all duration-150"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Service Area Micro-note */}
          <p className="mt-5 text-xs text-cyan-200/70 text-center sm:text-left">
            Serving all of Middle Tennessee · Fast, friendly scheduling · Honest upfront pricing
          </p>
        </div>
      </div>

      {/* Gentle Curved Wave Divider Transitioning into White Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16 text-white fill-current"
          aria-hidden="true"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
