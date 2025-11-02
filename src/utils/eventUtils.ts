import type { Event } from '../types';

export const getEventsForDate = (events: Event[], date: Date): Event[] => {
  return events.filter(e => e.date.toDateString() === date.toDateString());
};

export const getUpcomingEvents = (events: Event[], limit: number = 5): Event[] => {
  const today = new Date();
  return events
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, limit);
};

export const getEventsThisWeek = (events: Event[]): Event[] => {
  const today = new Date();
  return events.filter(e => {
    const diff = e.date.getTime() - today.getTime();
    return diff >= 0 && diff <= 7 * 24 * 60 * 60 * 1000;
  });
};