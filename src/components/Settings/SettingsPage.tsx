import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Globe, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const SettingsPage: React.FC = () => {
  const { changePassword } = useAuth();
  const { i18n, t } = useTranslation();
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // Validation
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      return;
    }

    setIsLoading(true);

    try {
      await changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });
      
      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to change password' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
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
        <h2 className="text-4xl font-bold text-galactic-navy font-serif">{t('settings.title')}</h2>
        <p className="text-galactic-navy/70 font-serif italic mt-2">{t('settings.subtitle')}</p>
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

      {/* Preferences Settings */}
      <div className="bg-galactic-cream rounded-lg shadow-lg border-2 border-galactic-gold p-8">
        <h3 className="text-xl font-semibold text-galactic-navy font-serif mb-6 border-b-2 border-galactic-gold pb-2">
          Preferences
        </h3>
        
        <div className="space-y-4">
          {/* Language */}
          <div>
            <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif flex items-center gap-2">
              <Globe className="w-4 h-4 text-galactic-gold" />
              {t('settings.language')}
            </label>
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>

          {/* Time Zone */}
          <div>
            <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
              {t('settings.timezone')}
            </label>
            <select className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif">
              <option>UTC</option>
              <option>America/New_York</option>
              <option>Europe/London</option>
              <option>Europe/Paris</option>
              <option>Asia/Tokyo</option>
              <option>Australia/Sydney</option>
            </select>
          </div>
          
          {/* Week Start */}
          <div>
            <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
              {t('settings.weekStart')}
            </label>
            <select className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif">
              <option>{t('settings.sunday')}</option>
              <option>{t('settings.monday')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-galactic-cream rounded-lg shadow-lg border-2 border-galactic-gold p-8">
        <h3 className="text-xl font-semibold text-galactic-navy font-serif mb-6 border-b-2 border-galactic-gold pb-2 flex items-center gap-2">
          <Lock className="w-5 h-5 text-galactic-gold" />
          Change Password
        </h3>

        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-md border-2 flex items-start gap-3 ${
            message.type === 'success' 
              ? 'bg-green-50 border-green-400' 
              : 'bg-red-50 border-red-400'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <p className={`text-sm font-medium ${
              message.type === 'success' ? 'text-green-800' : 'text-red-800'
            }`}>
              {message.text}
            </p>
          </div>
        )}

        <form onSubmit={handlePasswordChange} className="space-y-4">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
              Current Password
            </label>
            <input
              type="password"
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
              className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
              required
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
              New Password
            </label>
            <input
              type="password"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
              placeholder="Min. 6 characters"
              required
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
              placeholder="Repeat new password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-galactic-gold text-white rounded-md hover:bg-galactic-gold-dark transition-colors font-serif font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Changing Password...' : 'Change Password'}
          </button>
        </form>
      </div>
    </div>
  );
};