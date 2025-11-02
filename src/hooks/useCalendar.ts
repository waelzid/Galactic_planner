import { useState } from 'react';
import type { DateRange } from '../types';

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState<DateRange>({ start: null, end: null });
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() + (direction === 'next' ? 1 : -1));
    setCurrentMonth(newDate);
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
  };

  const handleDateClick = (date: Date) => {
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      setSelectedRange({ start: date, end: null });
    } else {
      if (date < selectedRange.start) {
        setSelectedRange({ start: date, end: selectedRange.start });
      } else {
        setSelectedRange({ start: selectedRange.start, end: date });
      }
    }
  };

  const clearSelection = () => {
    setSelectedRange({ start: null, end: null });
  };

  const isDateInRange = (date: Date): boolean => {
    if (!selectedRange.start) return false;
    
    const compareDate = hoverDate && !selectedRange.end ? hoverDate : selectedRange.end;
    if (!compareDate) return date.getTime() === selectedRange.start.getTime();
    
    const start = selectedRange.start < compareDate ? selectedRange.start : compareDate;
    const end = selectedRange.start < compareDate ? compareDate : selectedRange.start;
    
    return date >= start && date <= end;
  };

  const isStartDate = (date: Date): boolean => {
    return selectedRange.start ? date.getTime() === selectedRange.start.getTime() : false;
  };

  const isEndDate = (date: Date): boolean => {
    return selectedRange.end ? date.getTime() === selectedRange.end.getTime() : false;
  };

  return {
    currentMonth,
    selectedRange,
    hoverDate,
    setHoverDate,
    navigateMonth,
    goToToday,
    handleDateClick,
    clearSelection,
    isDateInRange,
    isStartDate,
    isEndDate,
  };
};