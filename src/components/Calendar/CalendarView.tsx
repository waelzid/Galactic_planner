import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Event, DateRange } from '../../types';
import { useCalendar } from '../../hooks/useCalendar';
import { getDaysInMonth, isToday, isSameMonth, getMonthYear } from '../../utils/dateUtils';
import { getEventsForDate } from '../../utils/eventUtils';

interface CalendarViewProps {
  events: Event[];
  onDateSelect?: (range: DateRange) => void;
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CalendarView: React.FC<CalendarViewProps> = ({ events, onDateSelect }) => {
  const {
    currentMonth,
    hoverDate,
    setHoverDate,
    navigateMonth,
    handleDateClick: handleCalendarDateClick,
    isDateInRange,
    isStartDate,
    isEndDate,
  } = useCalendar();

  const handleDateClick = (date: Date) => {
    handleCalendarDateClick(date);
  };

  const days = getDaysInMonth(currentMonth);
  const monthYear = getMonthYear(currentMonth);

  return (
    <div className="bg-galactic-cream rounded-lg shadow-lg border-2 border-galactic-gold overflow-hidden">
      {/* Calendar Header */}
      <div className="bg-gradient-to-r from-galactic-cream-dark to-galactic-cream px-6 py-4 border-b-2 border-galactic-gold">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigateMonth('prev')} 
            className="p-2 hover:bg-galactic-gold/20 rounded-md transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-galactic-gold" />
          </button>
          
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <svg width="60" height="15" viewBox="0 0 60 15">
                <path d="M0 7 Q15 3 30 7 T60 7" stroke="#C9A961" strokeWidth="1" fill="none"/>
                <circle cx="30" cy="7" r="2" fill="#C9A961"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-galactic-navy font-serif">{monthYear}</h2>
          </div>
          
          <button 
            onClick={() => navigateMonth('next')} 
            className="p-2 hover:bg-galactic-gold/20 rounded-md transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-galactic-gold" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
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
                onClick={() => handleDateClick(date)}
                onMouseEnter={() => setHoverDate(date)}
                onMouseLeave={() => setHoverDate(null)}
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