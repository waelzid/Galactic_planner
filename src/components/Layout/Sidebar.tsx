import React from 'react';
import { Home, Calendar, Clock, Settings, Menu, X } from 'lucide-react';
import type { ViewType, NavigationItem } from '../../types';

interface SidebarProps {
  currentView: ViewType;
  sidebarOpen: boolean;
  onViewChange: (view: ViewType) => void;
  onToggleSidebar: () => void;
}

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'events', label: 'Events', icon: Clock },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  sidebarOpen,
  onViewChange,
  onToggleSidebar,
}) => {
  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {sidebarOpen && <h1 className="text-xl font-bold text-gray-900">CalendarApp</h1>}
        <button 
          onClick={onToggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map(item => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id as ViewType)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                    currentView === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {sidebarOpen && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};