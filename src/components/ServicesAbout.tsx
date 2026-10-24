import { Check, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG, ServiceItem } from '../config/businessInfo';

// Bespoke clean line icons for each service category
function ServiceIcon({ type }: { type: ServiceItem['iconName'] }) {
  const strokeColor = '#0E5C73';
  const accentColor = '#2BB6C4';

  switch (type) {
    case 'vacuum':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
          aria-hidden="true"
        >
          {/* Carpet cleaner / vacuum wand & extraction head */}
          <path d="M5 21h14" />
          <path d="M6 18h12l-2-4H8l-2 4Z" />
          <path d="M12 14V3" />
          <path d="M9 3h6" stroke={accentColor} />
          {/* Suction flow lines */}
          <path d="M3 18l1 1" stroke={accentColor} />
          <path d="M21 18l-1 1" stroke={accentColor} />
        </svg>
      );
    case 'sparkle':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
          aria-hidden="true"
        >
          {/* Large sparkle & restorative shine */}
          <path
            d="m12 3-1.9 5.6a2 2 0 0 1-1.2 1.2L3 12l5.6 1.9a2 2 0 0 1 1.2 1.2L12 21l1.9-5.6a2 2 0 0 1 1.2-1.2L21 12l-5.6-1.9a2 2 0 0 1-1.2-1.2L12 3z"
            stroke={accentColor}
          />
          <path d="M5 5l1.5 1.5" />
          <path d="M19 5l-1.5 1.5" />
          <path d="M19 19l-1.5-1.5" />
        </svg>
      );
    case 'paw':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
          aria-hidden="true"
        >
          {/* Paw print line art for pet stain & odor treatment */}
          <ellipse cx="6.5" cy="9.5" rx="1.8" ry="2.2" stroke={accentColor} />
          <ellipse cx="10.5" cy="5.5" rx="1.8" ry="2.2" stroke={accentColor} />
          <ellipse cx="15" cy="5.5" rx="1.8" ry="2.2" stroke={accentColor} />
          <ellipse cx="18.5" cy="9.5" rx="1.8" ry="2.2" stroke={accentColor} />
          <path d="M7.5 14.5c0-2 2-3.5 4.5-3.5s4.5 1.5 4.5 3.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5z" />
        </svg>
      );
    case 'sofa':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
          aria-hidden="true"
        >
          {/* Sofa and area rug outline */}
          <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
          <path d="M2 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5Z" />
          <path d="M4 18v3" />
          <path d="M20 18v3" />
          <path d="M7 14h10" stroke={accentColor} />
        </svg>
      );
  }
}

export function ServicesAbout() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#2BB6C4] mb-2">
            Restoration & Cleaning Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A33] tracking-tight mb-4">
            Expert Care for Your Carpets & Fabrics
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every home is treated with dedicated attention. We use deep extraction and targeted treatments to revive fibers, remove stains, and leave rooms smelling fresh.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {BUSINESS_CONFIG.services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#F2F8FA] hover:bg-white rounded-[10px] p-7 border border-slate-200/80 hover:border-[#2BB6C4]/60 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with aqua glow accent on hover */}
                <div className="w-14 h-14 rounded-[8px] bg-white group-hover:bg-[#F2F8FA] border border-slate-200/70 flex items-center justify-center mb-6 shadow-2xs transition-colors duration-200">
                  <ServiceIcon type={service.iconName} />
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-[#1B2A33] group-hover:text-[#0E5C73] transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action link towards quote form with service pre-selected */}
              <a
                href={`#contact?service=${service.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5C73] group-hover:text-[#0A4457] hover:underline pt-2 border-t border-slate-200/60"
              >
                <span>Request quote for this</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* "Why Choose Deep Carpet Restoration" Strip */}
        <div id="about" className="scroll-mt-28 bg-[#F2F8FA] rounded-[10px] border border-slate-200/70 p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A33] tracking-tight mb-3">
              Why Choose Deep Carpet Restoration
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Serving homeowners and businesses throughout Middle Tennessee with honest craftsmanship and respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BUSINESS_CONFIG.whyChoosePoints.map((point) => (
              <div key={point.title} className="flex flex-col items-start bg-white p-5 rounded-[8px] border border-slate-200/50 shadow-2xs">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#2BB6C4]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0E5C73] stroke-[3]" />
                  </div>
                  <h4 className="text-base font-bold text-[#1B2A33] leading-snug">
                    {point.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
