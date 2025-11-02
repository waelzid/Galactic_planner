import React from 'react';
import type { Event } from '../../types';

interface EventListProps {
  events: Event[];
  title: string;
}

export const EventList: React.FC<EventListProps> = ({ events, title }) => {
  return (
    <div className="bg-galactic-cream rounded-lg shadow-lg border-2 border-galactic-gold p-6">
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center gap-3">
          <svg width="40" height="20" viewBox="0 0 40 20">
            <path d="M0 10 L10 10" stroke="#C9A961" strokeWidth="1.5"/>
            <circle cx="15" cy="10" r="2" fill="#C9A961"/>
          </svg>
          <h3 className="text-xl font-semibold text-galactic-navy font-serif">{title}</h3>
          <svg width="40" height="20" viewBox="0 0 40 20">
            <circle cx="25" cy="10" r="2" fill="#C9A961"/>
            <path d="M30 10 L40 10" stroke="#C9A961" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>
      
      <div className="space-y-3">
        {events.length === 0 ? (
          <p className="text-galactic-navy/60 text-center py-8 font-serif italic">No upcoming events in your cosmic calendar</p>
        ) : (
          events.map(event => (
            <div key={event.id} className="flex items-center gap-4 p-4 rounded-md hover:bg-galactic-beige transition-colors border border-galactic-gold/30">
              <div className={`w-3 h-3 rounded-full ${event.color} ring-2 ring-galactic-gold/30`} />
              <div className="flex-1">
                <p className="font-medium text-galactic-navy">{event.title}</p>
                <p className="text-sm text-galactic-navy/70 font-serif">
                  {event.date.toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};