import React from 'react';

export const SettingsPage: React.FC = () => {
  return (
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
        <h2 className="text-4xl font-bold text-galactic-navy font-serif">Settings</h2>
        <p className="text-galactic-navy/70 font-serif italic mt-2">Customize your cosmic experience</p>
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

      <div className="bg-galactic-cream rounded-lg shadow-lg border-2 border-galactic-gold p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
              Time Zone
            </label>
            <select className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif">
              <option>Sunday</option>
              <option>Monday</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
              Calendar Theme
            </label>
            <select className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif">
              <option>Galactic Gold</option>
              <option>Celestial Blue</option>
              <option>Cosmic Purple</option>
            </select>
          </div>

          <div className="pt-4 border-t-2 border-galactic-gold">
            <button className="w-full px-6 py-3 bg-galactic-gold text-white rounded-md hover:bg-galactic-gold-dark transition-colors font-serif font-semibold shadow-md">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};