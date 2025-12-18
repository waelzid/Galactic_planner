import React from 'react';
import type { Event } from '../../types';
import { getWeekDays, isToday, isSameDay } from '../../utils/dateUtils';

interface WeekViewProps {
  currentDate: Date;
  events: Event[];
}

export const WeekView: React.FC<WeekViewProps> = ({ currentDate, events }) => {
  const weekDays = getWeekDays(currentDate);

  const getEventsForDay = (date: Date) => {
    return events.filter(e => isSameDay(e.date, date));
  };

  return (
    <div className="bg-galactic-cream rounded-lg border-2 border-galactic-gold overflow-hidden">
      <div className="grid grid-cols-7 gap-0">
        {weekDays.map((day, idx) => {
          const dayEvents = getEventsForDay(day);
          const today = isToday(day);
          
          return (
            <div 
              key={idx} 
              className="border-r border-galactic-gold/30 last:border-r-0 min-h-[300px]"
            >
              {/* Day Header */}
              <div className={`p-4 border-b-2 border-galactic-gold flex flex-col items-center ${
                today ? 'bg-galactic-gold/20' : 'bg-gradient-to-b from-galactic-cream-dark to-galactic-cream'
              }`}>
                <span className="text-xs font-semibold text-galactic-gold uppercase tracking-wide">
                  {day.toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
                <span className={`text-2xl font-bold mt-1 ${
                  today 
                    ? 'bg-galactic-gold text-white w-10 h-10 rounded-full flex items-center justify-center' 
                    : 'text-galactic-navy'
                }`}>
                  {day.getDate()}
                </span>
              </div>

              {/* Events for this day */}
              <div className="p-2 space-y-2">
                {dayEvents.length === 0 ? (
                  <p className="text-xs text-galactic-navy/40 text-center py-8 font-serif italic">
                    No events
                  </p>
                ) : (
                  dayEvents.map(event => (
                    <div
                      key={event.id}
                      className={`${event.color} text-white rounded-md p-3 cursor-pointer hover:opacity-90 transition-opacity shadow-sm border border-galactic-gold/30`}
                    >
                      <div className="font-semibold text-sm mb-1">{event.title}</div>
                      {event.location && (
                        <div className="text-xs opacity-90">📍 {event.location}</div>
                      )}
                      {event.description && (
                        <div className="text-xs opacity-80 mt-1 line-clamp-2">
                          {event.description}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};