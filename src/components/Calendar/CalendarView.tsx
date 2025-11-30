import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import type { Event, DateRange, CalendarViewType } from '../../types';
import { useCalendar } from '../../hooks/useCalendar';
import { getMonthYear, formatDayHeader } from '../../utils/dateUtils';
import { DayView } from './DayView';
import { WeekView } from './WeekView';
import { MonthView } from './MonthView';

interface CalendarViewProps {
  events: Event[];
  onDateSelect?: (range: DateRange) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ events, onDateSelect }) => {
  const [calendarView, setCalendarView] = useState<CalendarViewType>('month');
  
  const {
    currentMonth,
    hoverDate,
    setHoverDate,
    navigateMonth,
    goToToday,
    handleDateClick,
    isDateInRange,
    isStartDate,
    isEndDate,
  } = useCalendar();

  const getHeaderText = () => {
    switch (calendarView) {
      case 'day':
        return formatDayHeader(currentMonth);
      case 'week':
        return getMonthYear(currentMonth);
      case 'month':
        return getMonthYear(currentMonth);
    }
  };

  const navigateCalendar = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentMonth);
    
    switch (calendarView) {
      case 'day':
        newDate.setDate(currentMonth.getDate() + (direction === 'next' ? 1 : -1));
        break;
      case 'week':
        newDate.setDate(currentMonth.getDate() + (direction === 'next' ? 7 : -7));
        break;
      case 'month':
        newDate.setMonth(currentMonth.getMonth() + (direction === 'next' ? 1 : -1));
        break;
    }
    
    navigateMonth(direction);
  };

  return (
    <div className="space-y-4">
      {/* View Controls */}
      <div className="bg-galactic-cream rounded-lg shadow-lg border-2 border-galactic-gold p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateCalendar('prev')}
              className="p-2 hover:bg-galactic-gold/20 rounded-md transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-galactic-gold" />
            </button>
            
            <div className="text-center min-w-[200px]">
              <h2 className="text-xl font-bold text-galactic-navy font-serif">{getHeaderText()}</h2>
            </div>
            
            <button
              onClick={() => navigateCalendar('next')}
              className="p-2 hover:bg-galactic-gold/20 rounded-md transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-galactic-gold" />
            </button>
          </div>

          {/* View Type Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToToday}
              className="px-4 py-2 text-sm font-medium text-galactic-gold border-2 border-galactic-gold rounded-md hover:bg-galactic-gold hover:text-white transition-colors font-serif"
            >
              Today
            </button>
            
            <div className="flex border-2 border-galactic-gold rounded-md overflow-hidden">
              <button
                onClick={() => setCalendarView('day')}
                className={`px-4 py-2 text-sm font-medium transition-colors font-serif ${
                  calendarView === 'day'
                    ? 'bg-galactic-gold text-white'
                    : 'text-galactic-navy hover:bg-galactic-beige'
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setCalendarView('week')}
                className={`px-4 py-2 text-sm font-medium border-x-2 border-galactic-gold transition-colors font-serif ${
                  calendarView === 'week'
                    ? 'bg-galactic-gold text-white'
                    : 'text-galactic-navy hover:bg-galactic-beige'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setCalendarView('month')}
                className={`px-4 py-2 text-sm font-medium transition-colors font-serif ${
                  calendarView === 'month'
                    ? 'bg-galactic-gold text-white'
                    : 'text-galactic-navy hover:bg-galactic-beige'
                }`}
              >
                Month
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Views */}
      {calendarView === 'day' && (
        <DayView currentDate={currentMonth} events={events} />
      )}
      
      {calendarView === 'week' && (
        <WeekView currentDate={currentMonth} events={events} />
      )}
      
      {calendarView === 'month' && (
        <MonthView
          currentMonth={currentMonth}
          events={events}
          selectedRange={{ start: null, end: null }}
          hoverDate={hoverDate}
          onDateClick={handleDateClick}
          onDateHover={setHoverDate}
          isDateInRange={isDateInRange}
          isStartDate={isStartDate}
          isEndDate={isEndDate}
        />
      )}
    </div>
  );
};