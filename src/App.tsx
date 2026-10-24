/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Deep Carpet Restoration - Single-Page Website
 * 
 * To edit services, operating hours, service area, or phone number:
 * Check /src/config/businessInfo.ts where all business details are defined.
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesAbout } from './components/ServicesAbout';
import { ContactFooter } from './components/ContactFooter';
import { FloatingCallButton } from './components/FloatingCallButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B2A33] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Sticky Header (White, Logo, Nav links, Amber Call button) */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Deep teal, 5.0 star rating, Open/Closed indicator, CTAs, wave divider) */}
        <Hero />

        {/* 3. Services + About Section (4 service cards with line icons + Why Choose Us strip) */}
        <ServicesAbout />

        {/* 4. Contact + Footer Section (Quote form, direct phone, Central Time hours table, slim footer) */}
        <ContactFooter />
      </main>

      {/* Floating Amber Call Button (Mobile only) */}
      <FloatingCallButton />
    </div>
  );
}
