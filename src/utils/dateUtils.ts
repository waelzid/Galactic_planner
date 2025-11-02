export const getDaysInMonth = (date: Date): (Date | null)[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  const days: (Date | null)[] = [];
  
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }
  
  return days;
};

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

export const isSameMonth = (date: Date, currentMonth: Date): boolean => {
  return date.getMonth() === currentMonth.getMonth() && 
         date.getFullYear() === currentMonth.getFullYear();
};

export const formatDateRange = (start: Date | null, end: Date | null): string => {
  if (!start) return 'No dates selected';
  
  if (!end) {
    return start.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }
  
  const startStr = start.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
  const endStr = end.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
  
  return `${startStr} - ${endStr}`;
};

export const getMonthYear = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });
};