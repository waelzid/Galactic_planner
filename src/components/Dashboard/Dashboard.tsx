import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import type { Event } from '../../types';
import { StatCard } from './StatCard';
import { EventList } from './EventList';
import { getUpcomingEvents, getEventsThisWeek } from '../../utils/eventUtils';

interface DashboardProps {
  events: Event[];
}

export const Dashboard: React.FC<DashboardProps> = ({ events }) => {
  const upcomingEvents = getUpcomingEvents(events);
  const eventsThisWeek = getEventsThisWeek(events);

  return (
    <div className="space-y-8">
      {/* Header with ornamental design */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <svg width="300" height="60" viewBox="0 0 300 60">
            <path d="M10 30 Q40 15 70 30" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
            <path d="M230 30 Q260 15 290 30" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
            <circle cx="70" cy="30" r="3" fill="#C9A961"/>
            <circle cx="230" cy="30" r="3" fill="#C9A961"/>
            <line x1="80" y1="30" x2="220" y2="30" stroke="#C9A961" strokeWidth="1"/>
            <circle cx="150" cy="30" r="5" fill="#C9A961"/>
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-galactic-navy mb-2 font-serif">Dashboard</h2>
        <p className="text-galactic-navy/70 font-serif italic">Welcome back to your cosmic journey</p>
        <div className="flex justify-center mt-4">
          <svg width="300" height="60" viewBox="0 0 300 60">
            <path d="M10 30 Q40 45 70 30" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
            <path d="M230 30 Q260 45 290 30" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
            <circle cx="70" cy="30" r="3" fill="#C9A961"/>
            <circle cx="230" cy="30" r="3" fill="#C9A961"/>
            <line x1="80" y1="30" x2="220" y2="30" stroke="#C9A961" strokeWidth="1"/>
            <circle cx="150" cy="30" r="5" fill="#C9A961"/>
          </svg>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Events"
          value={events.length}
          icon={Calendar}
          color="text-galactic-gold"
        />
        <StatCard
          title="Upcoming"
          value={upcomingEvents.length}
          icon={Clock}
          color="text-galactic-gold"
        />
        <StatCard
          title="This Week"
          value={eventsThisWeek.length}
          icon={Users}
          color="text-galactic-gold"
        />
      </div>

      {/* Events List */}
      <EventList events={upcomingEvents} title="Upcoming Events" />
    </div>
  );
};