import React from 'react';
import type { Event } from '../../types';

interface EventListProps {
  events: Event[];
  title: string;
}

export const EventList: React.FC<EventListProps> = ({ events, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {events.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No upcoming events</p>
        ) : (
          events.map(event => (
            <div key={event.id} className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50">
              <div className={`w-3 h-3 rounded-full ${event.color}`} />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{event.title}</p>
                <p className="text-sm text-gray-500">
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