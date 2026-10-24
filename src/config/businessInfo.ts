/**
 * =======================================================================
 * BUSINESS CONFIGURATION (EASY TO EDIT IN ONE PLACE)
 * =======================================================================
 * Edit your company details, service area, operating hours, and services below.
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'vacuum' | 'sparkle' | 'paw' | 'sofa';
}

export interface DayHours {
  dayName: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  displayHours: string;
  openMinutes: number | null; // e.g. 9 * 60 = 540 (9:00 AM)
  closeMinutes: number | null; // e.g. 17 * 60 = 1020 (5:00 PM)
  isClosed: boolean;
}

export const BUSINESS_CONFIG = {
  // Business Basics
  name: 'Deep Carpet Restoration',
  phoneDisplay: '+1 (615) 513-9686',
  phoneTel: 'tel:+16155139686',
  
  // Service Area (Middle Tennessee)
  serviceArea: 'Middle Tennessee (Nashville, Franklin, Brentwood, Murfreesboro & surrounding areas)',
  serviceAreaShort: 'Middle Tennessee',

  // Trust Rating (5.0 stars from 8 reviews)
  rating: {
    score: 5.0,
    reviewCount: 8,
    starsText: '★★★★★',
  },

  // Operating Hours (Central Time)
  // Monday to Friday: 9 AM to 5 PM
  // Saturday: 9 AM to 1 PM
  // Sunday: Closed
  timeZone: 'America/Chicago', // Central Time for Middle Tennessee
  hours: [
    {
      dayName: 'Monday',
      dayIndex: 1,
      displayHours: '9:00 AM – 5:00 PM',
      openMinutes: 9 * 60, // 540
      closeMinutes: 17 * 60, // 1020
      isClosed: false,
    },
    {
      dayName: 'Tuesday',
      dayIndex: 2,
      displayHours: '9:00 AM – 5:00 PM',
      openMinutes: 9 * 60,
      closeMinutes: 17 * 60,
      isClosed: false,
    },
    {
      dayName: 'Wednesday',
      dayIndex: 3,
      displayHours: '9:00 AM – 5:00 PM',
      openMinutes: 9 * 60,
      closeMinutes: 17 * 60,
      isClosed: false,
    },
    {
      dayName: 'Thursday',
      dayIndex: 4,
      displayHours: '9:00 AM – 5:00 PM',
      openMinutes: 9 * 60,
      closeMinutes: 17 * 60,
      isClosed: false,
    },
    {
      dayName: 'Friday',
      dayIndex: 5,
      displayHours: '9:00 AM – 5:00 PM',
      openMinutes: 9 * 60,
      closeMinutes: 17 * 60,
      isClosed: false,
    },
    {
      dayName: 'Saturday',
      dayIndex: 6,
      displayHours: '9:00 AM – 1:00 PM',
      openMinutes: 9 * 60,
      closeMinutes: 13 * 60, // 780
      isClosed: false,
    },
    {
      dayName: 'Sunday',
      dayIndex: 0,
      displayHours: 'Closed',
      openMinutes: null,
      closeMinutes: null,
      isClosed: true,
    },
  ] as DayHours[],

  // Offered Services
  services: [
    {
      id: 'carpet-cleaning',
      title: 'Carpet Cleaning',
      description: 'Deep cleaning that lifts dirt, dust, and allergens from your carpets.',
      iconName: 'vacuum',
    },
    {
      id: 'carpet-restoration',
      title: 'Deep Carpet Restoration',
      description: 'Bring worn, stained, and tired carpets back to life with restorative pile treatments.',
      iconName: 'sparkle',
    },
    {
      id: 'pet-stain-removal',
      title: 'Pet Stain & Odor Removal',
      description: 'Targeted bio-enzymatic treatment for stubborn pet stains and lingering smells.',
      iconName: 'paw',
    },
    {
      id: 'upholstery-cleaning',
      title: 'Upholstery & Area Rug Cleaning',
      description: 'Refresh sofas, chairs, cushions, and delicate area rugs of all sizes.',
      iconName: 'sofa',
    },
  ] as ServiceItem[],

  // "Why Choose Us" 4 Highlights
  whyChoosePoints: [
    {
      title: '5.0 Star Rated',
      description: 'Verified 5.0 rating across all customer reviews for quality and care.',
    },
    {
      title: 'Thorough & Effective Cleaning',
      description: 'Deep fiber extraction that lifts embedded grit, stains, and residue.',
    },
    {
      title: 'Careful With Your Home',
      description: 'Corner guards, shoe covers, and respectful care for your property.',
    },
    {
      title: 'Free Quotes',
      description: 'Transparent pricing with no hidden charges or high-pressure upselling.',
    },
  ],
};
