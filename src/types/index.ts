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
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: any;
}

export type ViewType = 'dashboard' | 'calendar' | 'events' | 'settings';