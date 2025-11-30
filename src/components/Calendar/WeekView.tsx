import React from 'react';
import type { Event } from '../../types';
import { getWeekDays, formatTime, isSameDay, isToday } from '../../utils/dateUtils';
import { Clock, MapPin } from 'lucide-react';

interface WeekViewProps {
  currentDate: Date;
  events: Event[];
}

export const WeekView: React.FC<WeekViewProps> = ({ currentDate, events }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const weekDays = getWeekDays(currentDate);

  const getEventsForDay = (date: Date) => {
    return events.filter(e => isSameDay(e.date, date));
  };

  const getEventPosition = (event: Event) => {
    const startHour = event.date.getHours() + event.date.getMinutes() / 60;
    const endTime = event.endTime?.split(':');
    const endHour = endTime ? parseInt(endTime[0]) + parseInt(endTime[1]) / 60 : startHour + 1;
    const duration = endHour - startHour;
    
    return {
      top: `${startHour * 60}px`,
      height: `${duration * 60}px`
    };
  };

  return (
    <div className="bg-galactic-cream rounded-lg border-2 border-galactic-gold overflow-hidden">
      <div className="flex">
        {/* Time Column */}
        <div className="w-20 flex-shrink-0 border-r-2 border-galactic-gold bg-galactic-cream-dark">
          <div className="h-16 border-b-2 border-galactic-gold"></div>
          {hours.map(hour => (
            <div key={hour} className="h-[60px] border-b border-galactic-gold/30 pr-2 text-right">
              <span className="text-xs text-galactic-navy/70 -mt-2 inline-block font-serif">
                {formatTime(hour)}
              </span>
            </div>
          ))}
        </div>

        {/* Days Columns */}
        <div className="flex-1 flex overflow-x-auto">
          {weekDays.map((day, idx) => {
            const dayEvents = getEventsForDay(day);
            const today = isToday(day);
            
            return (
              <div key={idx} className="flex-1 min-w-[120px] border-r border-galactic-gold/30 last:border-r-0 relative">
                {/* Day Header */}
                <div className={`h-16 border-b-2 border-galactic-gold flex flex-col items-center justify-center ${
                  today ? 'bg-galactic-gold/20' : 'bg-gradient-to-b from-galactic-cream-dark to-galactic-cream'
                }`}>
                  <span className="text-xs font-semibold text-galactic-gold uppercase tracking-wide">
                    {day.toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                  <span className={`text-lg font-bold mt-1 ${
                    today 
                      ? 'bg-galactic-gold text-white w-8 h-8 rounded-full flex items-center justify-center' 
                      : 'text-galactic-navy'
                  }`}>
                    {day.getDate()}
                  </span>
                </div>

                {/* Hour Grid */}
                <div className="relative">
                  {hours.map(hour => (
                    <div 
                      key={hour} 
                      className="h-[60px] border-b border-galactic-gold/20 hover:bg-galactic-beige/30 cursor-pointer transition-colors"
                    ></div>
                  ))}

                  {/* Events */}
                  {dayEvents.map(event => {
                    const pos = getEventPosition(event);
                    return (
                      <div
                        key={event.id}
                        className={`absolute left-1 right-1 ${event.color} text-white rounded px-2 py-1 text-xs overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-sm border border-galactic-gold/30`}
                        style={pos}
                      >
                        <div className="font-semibold truncate">{event.title}</div>
                        <div className="flex items-center gap-1 mt-0.5 opacity-90">
                          <Clock className="w-2.5 h-2.5" />
                          <span className="text-[10px]">{event.startTime}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};