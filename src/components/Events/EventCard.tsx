import React from 'react';
import type { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex items-start gap-4 p-5 rounded-md hover:bg-galactic-beige transition-colors border-2 border-galactic-gold/30 bg-galactic-cream">
      <div className={`w-5 h-5 rounded-full ${event.color} flex-shrink-0 mt-1 ring-2 ring-galactic-gold/30`} />
      <div className="flex-1">
        <p className="font-bold text-lg text-galactic-navy font-serif mb-1">{event.title}</p>
        <p className="text-sm text-galactic-navy/70 font-serif">
          {event.date.toLocaleDateString('en-US', { 
            weekday: 'long',
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
        {event.location && (
          <p className="text-sm text-galactic-gold mt-2 flex items-center gap-1">
            <span>📍</span> {event.location}
          </p>
        )}
        {event.description && (
          <p className="text-sm text-galactic-navy/80 mt-2 italic">{event.description}</p>
        )}
      </div>
    </div>
  );
};