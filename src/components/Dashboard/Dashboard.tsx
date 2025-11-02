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
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h2>
        <p className="text-gray-600">Welcome back! Here's your calendar overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Events"
          value={events.length}
          icon={Calendar}
          color="text-blue-600"
        />
        <StatCard
          title="Upcoming"
          value={upcomingEvents.length}
          icon={Clock}
          color="text-green-600"
        />
        <StatCard
          title="This Week"
          value={eventsThisWeek.length}
          icon={Users}
          color="text-purple-600"
        />
      </div>

      <EventList events={upcomingEvents} title="Upcoming Events" />
    </div>
  );
};