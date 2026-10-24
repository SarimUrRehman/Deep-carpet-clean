import { Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

export function FloatingCallButton() {
  return (
    <aside aria-label="Quick mobile call action" className="sm:hidden">
      <a
        href={BUSINESS_CONFIG.phoneTel}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-[#F2A33A] hover:bg-[#e29329] active:bg-[#c97f1f] text-[#1B2A33] font-bold text-sm px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-150 active:scale-95 border border-amber-300/60"
        aria-label={`Call Deep Carpet Restoration at ${BUSINESS_CONFIG.phoneDisplay}`}
      >
        <Phone className="w-4 h-4 fill-current shrink-0" />
        <span>Call Now</span>
      </a>
    </aside>
  );
}
