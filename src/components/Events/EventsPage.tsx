import React from 'react';
import type { Event } from '../../types';
import { EventCard } from './EventCard';

interface EventsPageProps {
  events: Event[];
}

export const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
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
        <h2 className="text-4xl font-bold text-galactic-navy font-serif">All Events</h2>
        <p className="text-galactic-navy/70 font-serif italic mt-2">Your cosmic schedule</p>
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

      <div className="bg-galactic-cream rounded-lg shadow-lg border-2 border-galactic-gold">
        <div className="p-6 space-y-4">
          {events.length === 0 ? (
            <p className="text-galactic-navy/60 text-center py-8 font-serif italic">No events found in your celestial diary</p>
          ) : (
            events.map(event => <EventCard key={event.id} event={event} />)
          )}
        </div>
      </div>
    </div>
  );
};