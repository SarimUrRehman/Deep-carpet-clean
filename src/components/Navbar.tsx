import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG } from '../config/businessInfo';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Brand Logo */}
          <div className="shrink-0">
            <Logo variant="light" />
          </div>

          {/* Zone 2: Nav Links (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-700"
          >
            <a
              href="#services"
              className="hover:text-[#0E5C73] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2BB6C4] hover:after:w-full after:transition-all"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-[#0E5C73] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2BB6C4] hover:after:w-full after:transition-all"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              className="hover:text-[#0E5C73] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2BB6C4] hover:after:w-full after:transition-all"
            >
              Contact & Hours
            </a>
          </nav>

          {/* Zone 3: Call CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Amber Call Button showing Phone Number */}
            <a
              href={BUSINESS_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 bg-[#F2A33A] hover:bg-[#e29329] text-[#1B2A33] px-3.5 sm:px-4 py-2.5 rounded-[10px] text-xs sm:text-sm font-bold shadow-xs transition-all duration-150 hover:shadow active:scale-[0.98] whitespace-nowrap"
              aria-label={`Call Deep Carpet Restoration at ${BUSINESS_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#1B2A33] shrink-0 fill-current" />
              <span className="hidden sm:inline">Call</span>
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-[10px] text-slate-700 hover:text-[#0E5C73] hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-[#2BB6C4]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-semibold text-slate-800 hover:text-[#0E5C73] hover:bg-slate-50 rounded-[8px] transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-semibold text-slate-800 hover:text-[#0E5C73] hover:bg-slate-50 rounded-[8px] transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-semibold text-slate-800 hover:text-[#0E5C73] hover:bg-slate-50 rounded-[8px] transition-colors"
            >
              Contact & Hours
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
