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
    <div className="min-h-screen bg-gray-50 flex">
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
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Calendar</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-3 inline-block">
                  <span className="text-sm text-gray-600">Selected: </span>
                  <span className="font-medium text-gray-900">
                    {formatDateRange(selectedRange.start, selectedRange.end)}
                  </span>
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