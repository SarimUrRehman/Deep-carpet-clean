import { BUSINESS_CONFIG } from '../config/businessInfo';

export interface BusinessStatus {
  isOpen: boolean;
  statusText: string;
  badgeLabel: string;
  todayDayIndex: number; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  todayDayName: string;
}

/**
 * Calculates whether Deep Carpet Restoration is currently open
 * based on the business's local Central Time (America/Chicago).
 */
export function getBusinessStatus(customDate?: Date): BusinessStatus {
  const now = customDate || new Date();
  const timeZone = BUSINESS_CONFIG.timeZone;

  try {
    // Extract current time and day in Central Time
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    let weekdayStr = '';
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === 'weekday') weekdayStr = part.value;
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    const currentMinutes = hour * 60 + minute;

    // Map weekday string to dayIndex (0 = Sun, 1 = Mon, ..., 6 = Sat)
    const dayMap: Record<string, number> = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };

    const todayDayIndex = dayMap[weekdayStr] ?? now.getDay();
    const todaySchedule = BUSINESS_CONFIG.hours.find((h) => h.dayIndex === todayDayIndex);

    if (!todaySchedule || todaySchedule.isClosed || todaySchedule.openMinutes === null || todaySchedule.closeMinutes === null) {
      // Find next open day
      const nextOpenText = todayDayIndex === 0 ? 'Opens Monday at 9:00 AM' : 'Opens tomorrow at 9:00 AM';
      return {
        isOpen: false,
        statusText: `Closed now · ${nextOpenText} CT`,
        badgeLabel: 'Closed Now',
        todayDayIndex,
        todayDayName: weekdayStr || 'Today',
      };
    }

    if (currentMinutes < todaySchedule.openMinutes) {
      return {
        isOpen: false,
        statusText: 'Closed now · Opens today at 9:00 AM CT',
        badgeLabel: 'Closed Now',
        todayDayIndex,
        todayDayName: weekdayStr || 'Today',
      };
    }

    if (currentMinutes >= todaySchedule.openMinutes && currentMinutes < todaySchedule.closeMinutes) {
      const closeDisplay = todaySchedule.displayHours.split('–')[1]?.trim() || '5:00 PM';
      return {
        isOpen: true,
        statusText: `Open now · Closes at ${closeDisplay} CT`,
        badgeLabel: 'Open Now',
        todayDayIndex,
        todayDayName: weekdayStr || 'Today',
      };
    }

    // After hours today
    const isSaturday = todayDayIndex === 6;
    const nextDayText = isSaturday ? 'Opens Monday at 9:00 AM CT' : 'Opens tomorrow at 9:00 AM CT';
    return {
      isOpen: false,
      statusText: `Closed now · ${nextDayText}`,
      badgeLabel: 'Closed Now',
      todayDayIndex,
      todayDayName: weekdayStr || 'Today',
    };
  } catch {
    // Fallback if Intl fails
    const fallbackDay = now.getDay();
    const isWeekday = fallbackDay >= 1 && fallbackDay <= 5;
    return {
      isOpen: isWeekday,
      statusText: isWeekday ? 'Open today 9:00 AM – 5:00 PM CT' : 'Closed now',
      badgeLabel: isWeekday ? 'Open Today' : 'Closed Now',
      todayDayIndex: fallbackDay,
      todayDayName: 'Today',
    };
  }
}
