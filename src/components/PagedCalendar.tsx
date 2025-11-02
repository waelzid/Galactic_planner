import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface DateRange {
  start: Date | null;
  end: Date | null;
}

const PagedCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState<DateRange>({ start: null, end: null });
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days: (Date | null)[] = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const handleDateClick = (date: Date) => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      // Start new range
      setSelectedRange({ start: date, end: null });
    } else {
      // Complete the range
      if (date < selectedRange.start) {
        setSelectedRange({ start: date, end: selectedRange.start });
      } else {
        setSelectedRange({ start: selectedRange.start, end: date });
      }
    }
  };

  const isDateInRange = (date: Date) => {
    if (!selectedRange.start) return false;
    
    const compareDate = hoverDate && !selectedRange.end ? hoverDate : selectedRange.end;
    if (!compareDate) return date.getTime() === selectedRange.start.getTime();
    
    const start = selectedRange.start < compareDate ? selectedRange.start : compareDate;
    const end = selectedRange.start < compareDate ? compareDate : selectedRange.start;
    
    return date >= start && date <= end;
  };

  const isStartDate = (date: Date) => {
    return selectedRange.start && date.getTime() === selectedRange.start.getTime();
  };

  const isEndDate = (date: Date) => {
    if (!selectedRange.end) return false;
    return date.getTime() === selectedRange.end.getTime();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSameMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth() && 
           date.getFullYear() === currentMonth.getFullYear();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentMonth);
    if (direction === 'next') {
      newDate.setMonth(currentMonth.getMonth() + 1);
    } else {
      newDate.setMonth(currentMonth.getMonth() - 1);
    }
    setCurrentMonth(newDate);
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
  };

  const formatDateRange = () => {
    if (!selectedRange.start) return 'No dates selected';
    if (!selectedRange.end) {
      return selectedRange.start.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    }
    
    const start = selectedRange.start.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
    const end = selectedRange.end.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
    
    return `${start} - ${end}`;
  };

  const days = getDaysInMonth(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const monthYear = currentMonth.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-semibold text-gray-900">Date Range Picker</h1>
            </div>
            <button
              onClick={goToToday}
              className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Today
            </button>
          </div>
          
          {/* Selected Range Display */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
            <div className="text-sm text-gray-600 mb-1">Selected Range:</div>
            <div className="text-lg font-medium text-gray-900">{formatDateRange()}</div>
          </div>
        </div>

        {/* Calendar Container */}
        <div className="bg-white shadow-sm border-x border-gray-200">
          {/* Month Navigation */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <h2 className="text-xl font-semibold text-gray-900">{monthYear}</h2>
            
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Next month"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            {/* Week Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {weekDays.map(day => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-gray-600 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((date, index) => {
                if (!date) {
                  return <div key={`empty-${index}`} className="aspect-square" />;
                }

                const inRange = isDateInRange(date);
                const isStart = isStartDate(date);
                const isEnd = isEndDate(date);
                const today = isToday(date);
                const sameMonth = isSameMonth(date);

                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(date)}
                    onMouseEnter={() => setHoverDate(date)}
                    onMouseLeave={() => setHoverDate(null)}
                    className={`
                      aspect-square rounded-md flex items-center justify-center text-sm font-medium
                      transition-all duration-150
                      ${!sameMonth ? 'text-gray-300 cursor-default' : 'text-gray-700 cursor-pointer'}
                      ${today && sameMonth ? 'ring-2 ring-blue-500' : ''}
                      ${inRange && sameMonth ? 'bg-blue-100' : ''}
                      ${(isStart || isEnd) && sameMonth ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
                      ${!inRange && !isStart && !isEnd && sameMonth ? 'hover:bg-gray-100' : ''}
                    `}
                    disabled={!sameMonth}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-b-lg shadow-sm border border-gray-200 p-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Click a date to start selecting, click another to complete the range
          </div>
          <button
            onClick={() => setSelectedRange({ start: null, end: null })}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Clear Selection
          </button>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-6 text-sm text-gray-600 bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md ring-2 ring-blue-500 flex items-center justify-center text-xs">1</div>
            <span>Today</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs">1</div>
            <span>Start/End Date</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-xs">1</div>
            <span>In Range</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagedCalendar;