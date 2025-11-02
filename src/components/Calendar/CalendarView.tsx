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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <button 
          onClick={() => navigateMonth('prev')} 
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h2 className="text-xl font-semibold text-gray-900">{monthYear}</h2>
        <button 
          onClick={() => navigateMonth('next')} 
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weekDays.map(day => (
            <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
              {day}
            </div>
          ))}
        </div>

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
                  transition-all duration-150 relative
                  ${!sameMonth ? 'text-gray-300 cursor-default' : 'text-gray-700 cursor-pointer'}
                  ${today && sameMonth ? 'ring-2 ring-blue-500' : ''}
                  ${inRange && sameMonth ? 'bg-blue-100' : ''}
                  ${(isStart || isEnd) && sameMonth ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
                  ${!inRange && !isStart && !isEnd && sameMonth ? 'hover:bg-gray-100' : ''}
                `}
              >
                <span>{date.getDate()}</span>
                {dateEvents.length > 0 && (
                  <div className="flex gap-0.5 mt-1">
                    {dateEvents.slice(0, 3).map(e => (
                      <div key={e.id} className={`w-1 h-1 rounded-full ${e.color}`} />
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