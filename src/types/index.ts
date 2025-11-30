export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  color: string;
  location?: string;
  description?: string;
  startTime?: string;
  endTime?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: any;
}

export type ViewType = 'birthChart' | 'dashboard' | 'calendar' | 'events' | 'settings';

// NEW: Calendar view types
export type CalendarViewType = 'day' | 'week' | 'month';

