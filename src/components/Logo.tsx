interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' for white header, 'dark' for dark teal footer
  className?: string;
}

export function Logo({ variant = 'light', className = '' }: LogoProps) {
  const isDark = variant === 'dark';
  const primaryTextColor = isDark ? 'text-white' : 'text-[#0E5C73]';
  const subTextColor = isDark ? 'text-cyan-200/90' : 'text-[#0E5C73]/80';
  const carpetStroke = isDark ? '#2BB6C4' : '#0E5C73';
  const sparkleFill = isDark ? '#F2A33A' : '#2BB6C4';

  return (
    <a
      href="#root"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#2BB6C4] focus-visible:ring-offset-2 rounded-sm ${className}`}
      aria-label="Deep Carpet Restoration - Home"
    >
      {/* Rolled Carpet & Restoration Sparkle SVG Icon */}
      <div className="relative flex items-center justify-center shrink-0 w-10 h-10">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Subtle background pill/container */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="8"
            className={isDark ? 'fill-[#0A4457]/80' : 'fill-[#F2F8FA]'}
          />
          {/* Carpet swatch roll outline */}
          <path
            d="M9 25C9 22.2386 11.2386 20 14 20H28C29.6569 20 31 21.3431 31 23C31 24.6569 29.6569 26 28 26H13C10.7909 26 9 27.7909 9 30H27"
            stroke={carpetStroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Rolled carpet top curl */}
          <path
            d="M10 20C10 14.4772 14.4772 10 20 10H29C30.1046 10 31 10.8954 31 12C31 13.1046 30.1046 14 29 14H18C14.6863 14 12 16.6863 12 20"
            stroke={carpetStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Restoration Sparkle */}
          <path
            d="M26 6L27.2 9.8L31 11L27.2 12.2L26 16L24.8 12.2L21 11L24.8 9.8L26 6Z"
            fill={sparkleFill}
          />
          {/* Tiny accent gleam */}
          <circle cx="17" cy="8" r="1.5" fill={sparkleFill} opacity="0.85" />
        </svg>
      </div>

      {/* Typography: "Deep" in bold teal, "CARPET RESTORATION" in letter-spaced capitals */}
      <div className="flex flex-col leading-none">
        <span className={`text-[22px] font-extrabold tracking-tight ${primaryTextColor}`}>
          Deep
        </span>
        <span className={`text-[9.5px] font-bold tracking-[0.22em] uppercase mt-0.5 ${subTextColor}`}>
          Carpet Restoration
        </span>
      </div>
    </a>
  );
}
