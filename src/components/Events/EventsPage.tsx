import React from 'react';
import type { Event } from '../../types';
import { EventCard } from './EventCard';

interface EventsPageProps {
  events: Event[];
}

export const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">All Events</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 space-y-3">
          {events.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No events found</p>
          ) : (
            events.map(event => <EventCard key={event.id} event={event} />)
          )}
        </div>
      </div>
    </div>
  );
};