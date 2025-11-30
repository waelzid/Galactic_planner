import React from 'react';
import { Home, Calendar, Clock, Settings, Menu, X, LogOut,Star } from 'lucide-react';
import type { ViewType, NavigationItem } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  currentView: ViewType;
  sidebarOpen: boolean;
  onViewChange: (view: ViewType) => void;
  onToggleSidebar: () => void;
}

const navigationItems: NavigationItem[] = [
  { id: 'birthChart', label: 'Birth Chart', icon: Star },
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
  const { logout, user } = useAuth();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-galactic-cream border-r-2 border-galactic-gold transition-all duration-300 flex flex-col shadow-lg`}>
      {/* Header */}
      <div className="p-4 border-b-2 border-galactic-gold flex items-center justify-between bg-gradient-to-b from-galactic-cream-dark to-galactic-cream">
        {sidebarOpen && (
          <div className="flex flex-col items-center w-full">
            <svg width="40" height="40" viewBox="0 0 100 100" className="mb-2">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A961" strokeWidth="2"/>
              <circle cx="50" cy="50" r="15" fill="#C9A961"/>
              <path d="M50 10 L55 30 L50 25 L45 30 Z" fill="#C9A961"/>
              <path d="M50 90 L55 70 L50 75 L45 70 Z" fill="#C9A961"/>
              <path d="M10 50 L30 45 L25 50 L30 55 Z" fill="#C9A961"/>
              <path d="M90 50 L70 45 L75 50 L70 55 Z" fill="#C9A961"/>
            </svg>
            <h1 className="text-lg font-bold text-galactic-navy font-serif tracking-wider">GALACTIC</h1>
            <p className="text-xs text-galactic-gold tracking-widest">PLANNER</p>
          </div>
        )}
        <button 
          onClick={onToggleSidebar}
          className="p-2 hover:bg-galactic-gold/20 rounded-md transition-colors"
        >
          {sidebarOpen ? <X className="w-5 h-5 text-galactic-navy" /> : <Menu className="w-5 h-5 text-galactic-gold" />}
        </button>
      </div>

      {/* User Info */}
      {sidebarOpen && user && (
        <div className="px-4 py-3 border-b-2 border-galactic-gold bg-galactic-beige/30">
          <p className="text-xs text-galactic-navy/60 font-serif">Logged in as</p>
          <p className="text-sm font-semibold text-galactic-navy truncate">{user.name}</p>
          <p className="text-xs text-galactic-navy/60 truncate">{user.email}</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map(item => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id as ViewType)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 ${
                    currentView === item.id
                      ? 'bg-galactic-gold text-white shadow-md'
                      : 'text-galactic-navy hover:bg-galactic-beige'
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

      {/* Logout Button */}
      <div className="p-4 border-t-2 border-galactic-gold">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          {sidebarOpen && <span className="font-medium">Logout</span>}
        </button>
        
        {sidebarOpen && (
          <div className="mt-4 text-center text-xs text-galactic-navy/60">
            <div className="flex justify-center mb-2">
              <svg width="60" height="20" viewBox="0 0 60 20">
                <path d="M0 10 Q15 5 30 10 T60 10" stroke="#C9A961" strokeWidth="1" fill="none"/>
                <circle cx="30" cy="10" r="2" fill="#C9A961"/>
              </svg>
            </div>
            <p className="font-serif italic">Plan Your Cosmos</p>
          </div>
        )}
      </div>
    </aside>
  );
};