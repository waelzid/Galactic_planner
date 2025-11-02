import React from 'react';

export const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600 mb-6">Customize your calendar preferences.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time Zone
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>UTC</option>
              <option>America/New_York</option>
              <option>Europe/London</option>
              <option>Asia/Tokyo</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Week starts on
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Sunday</option>
              <option>Monday</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};