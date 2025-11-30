import React from 'react';
import type { Event } from '../../types';
import { getDaysInMonth, isToday, isSameMonth } from '../../utils/dateUtils';
import { getEventsForDate } from '../../utils/eventUtils';

interface MonthViewProps {
  currentMonth: Date;
  events: Event[];
  selectedRange: { start: Date | null; end: Date | null };
  hoverDate: Date | null;
  onDateClick: (date: Date) => void;
  onDateHover: (date: Date | null) => void;
  isDateInRange: (date: Date) => boolean;
  isStartDate: (date: Date) => boolean;
  isEndDate: (date: Date) => boolean;
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const MonthView: React.FC<MonthViewProps> = ({
  currentMonth,
  events,
  hoverDate,
  onDateClick,
  onDateHover,
  isDateInRange,
  isStartDate,
  isEndDate,
}) => {
  const days = getDaysInMonth(currentMonth);

  return (
    <div className="bg-galactic-cream rounded-lg border-2 border-galactic-gold overflow-hidden">
      <div className="p-6">
        {/* Week Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map(day => (
            <div
              key={day}
              className="text-center text-sm font-bold text-galactic-gold py-2 font-serif tracking-wider"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((date, index) => {
            if (!date) return <div key={`empty-${index}`} className="aspect-square" />;

            const inRange = isDateInRange(date);
            const isStart = isStartDate(date);
            const isEnd = isEndDate(date);
            const today = isToday(date);
            const sameMonth = isSameMonth(date, currentMonth);
            const dateEvents = getEventsForDate(events, date);

            return (
              <button
                key={index}
                onClick={() => onDateClick(date)}
                onMouseEnter={() => onDateHover(date)}
                onMouseLeave={() => onDateHover(null)}
                disabled={!sameMonth}
                className={`
                  aspect-square rounded-md flex flex-col items-center justify-center text-sm font-medium
                  transition-all duration-150 relative border-2
                  ${!sameMonth ? 'text-galactic-navy/30 cursor-default border-transparent' : 'text-galactic-navy cursor-pointer border-galactic-gold/20'}
                  ${today && sameMonth ? 'ring-2 ring-galactic-gold' : ''}
                  ${inRange && sameMonth ? 'bg-galactic-gold/20' : ''}
                  ${(isStart || isEnd) && sameMonth ? 'bg-galactic-gold text-white border-galactic-gold hover:bg-galactic-gold-dark' : ''}
                  ${!inRange && !isStart && !isEnd && sameMonth ? 'hover:bg-galactic-beige' : ''}
                `}
              >
                <span className="font-serif">{date.getDate()}</span>
                {dateEvents.length > 0 && (
                  <div className="flex gap-0.5 mt-1">
                    {dateEvents.slice(0, 3).map(e => (
                      <div key={e.id} className={`w-1.5 h-1.5 rounded-full ${e.color} ring-1 ring-galactic-gold/30`} />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};