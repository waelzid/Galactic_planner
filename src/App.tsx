import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { CalendarView } from './components/Calendar/CalendarView';
import { EventsPage } from './components/Events/EventsPage';
import { SettingsPage } from './components/Settings/SettingsPage';
import type { ViewType, DateRange } from './types';
import { sampleEvents } from './data/sampleEvents';
import { formatDateRange } from './utils/dateUtils';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedRange, setSelectedRange] = useState<DateRange>({ start: null, end: null });

  return (
    <div className="min-h-screen bg-gradient-to-br from-galactic-cream-dark via-galactic-cream to-white flex">
      <Sidebar
        currentView={currentView}
        sidebarOpen={sidebarOpen}
        onViewChange={setCurrentView}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-8">
          {currentView === 'dashboard' && <Dashboard events={sampleEvents} />}
          
          {currentView === 'calendar' && (
            <div className="space-y-8">
              {/* Header with ornamental design */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg width="300" height="60" viewBox="0 0 300 60">
                    <path d="M10 30 Q40 15 70 30" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
                    <path d="M230 30 Q260 15 290 30" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
                    <circle cx="70" cy="30" r="3" fill="#C9A961"/>
                    <circle cx="230" cy="30" r="3" fill="#C9A961"/>
                    <line x1="80" y1="30" x2="220" y2="30" stroke="#C9A961" strokeWidth="1"/>
                    <circle cx="150" cy="30" r="5" fill="#C9A961"/>
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-galactic-navy font-serif mb-2">Calendar</h2>
                <div className="bg-galactic-gold/20 border-2 border-galactic-gold rounded-md p-4 inline-block mt-4">
                  <span className="text-sm text-galactic-navy/70 font-serif">Selected Range: </span>
                  <span className="font-bold text-galactic-navy font-serif">
                    {formatDateRange(selectedRange.start, selectedRange.end)}
                  </span>
                </div>
                <div className="flex justify-center mt-4">
                  <svg width="300" height="60" viewBox="0 0 300 60">
                    <path d="M10 30 Q40 45 70 30" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
                    <path d="M230 30 Q260 45 290 30" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
                    <circle cx="70" cy="30" r="3" fill="#C9A961"/>
                    <circle cx="230" cy="30" r="3" fill="#C9A961"/>
                    <line x1="80" y1="30" x2="220" y2="30" stroke="#C9A961" strokeWidth="1"/>
                    <circle cx="150" cy="30" r="5" fill="#C9A961"/>
                  </svg>
                </div>
              </div>
              
              <CalendarView events={sampleEvents} onDateSelect={setSelectedRange} />
            </div>
          )}

          {currentView === 'events' && <EventsPage events={sampleEvents} />}
          {currentView === 'settings' && <SettingsPage />}
        </div>
      </main>
    </div>
  );
};

export default App;