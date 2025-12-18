import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif flex items-center gap-2">
        <Globe className="w-4 h-4 text-galactic-gold" />
        Langue / Language
      </label>
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};