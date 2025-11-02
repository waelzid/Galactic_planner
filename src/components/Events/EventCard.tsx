import React from 'react';
import type { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-md hover:bg-gray-50 border border-gray-200">
      <div className={`w-4 h-4 rounded-full ${event.color} flex-shrink-0`} />
      <div className="flex-1">
        <p className="font-semibold text-gray-900">{event.title}</p>
        <p className="text-sm text-gray-500">
          {event.date.toLocaleDateString('en-US', { 
            weekday: 'long',
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
        {event.location && (
          <p className="text-sm text-gray-500 mt-1">📍 {event.location}</p>
        )}
        {event.description && (
          <p className="text-sm text-gray-600 mt-1">{event.description}</p>
        )}
      </div>
    </div>
  );
};