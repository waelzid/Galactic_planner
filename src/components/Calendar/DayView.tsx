import React from 'react';
import type { Event } from '../../types';
import { formatTime, isSameDay } from '../../utils/dateUtils';
import { Clock, MapPin } from 'lucide-react';

interface DayViewProps {
  currentDate: Date;
  events: Event[];
}

export const DayView: React.FC<DayViewProps> = ({ currentDate, events }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  const dayEvents = events.filter(e => isSameDay(e.date, currentDate));

  const getEventPosition = (event: Event) => {
    const startHour = event.date.getHours() + event.date.getMinutes() / 60;
    const endTime = event.endTime?.split(':');
    const endHour = endTime ? parseInt(endTime[0]) + parseInt(endTime[1]) / 60 : startHour + 1;
    const duration = endHour - startHour;
    
    return {
      top: `${startHour * 80}px`,
      height: `${duration * 80}px`
    };
  };

  return (
    <div className="bg-galactic-cream rounded-lg border-2 border-galactic-gold overflow-hidden">
      <div className="flex">
        {/* Time Column */}
        <div className="w-20 flex-shrink-0 border-r-2 border-galactic-gold bg-galactic-cream-dark">
          <div className="h-16 border-b-2 border-galactic-gold"></div>
          {hours.map(hour => (
            <div key={hour} className="h-20 border-b border-galactic-gold/30 pr-2 text-right py-1">
              <span className="text-xs text-galactic-navy/70 font-serif">
                {formatTime(hour)}
              </span>
            </div>
          ))}
        </div>

        {/* Day Column */}
        <div className="flex-1 relative">
          {/* Header */}
          <div className="h-16 border-b-2 border-galactic-gold bg-gradient-to-r from-galactic-cream-dark to-galactic-cream flex items-center justify-center">
            <span className="text-lg font-semibold text-galactic-navy font-serif">
              {currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </span>
          </div>

          {/* Hour Grid */}
          <div className="relative">
            {hours.map(hour => (
              <div 
                key={hour} 
                className="h-20 border-b border-galactic-gold/20 hover:bg-galactic-beige/30 transition-colors"
              ></div>
            ))}

            {/* Events */}
            {dayEvents.map(event => {
              const pos = getEventPosition(event);
              return (
                <div
                  key={event.id}
                  className={`absolute left-2 right-2 ${event.color} text-white rounded-lg px-3 py-2 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-md border-2 border-galactic-gold/30`}
                  style={pos}
                >
                  <div className="font-semibold text-sm mb-1">{event.title}</div>
                  <div className="flex items-center gap-1 text-xs opacity-90 mb-1">
                    <Clock className="w-3 h-3" />
                    <span>{event.startTime} - {event.endTime}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-1 text-xs opacity-90">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};