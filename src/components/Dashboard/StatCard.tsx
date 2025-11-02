import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="bg-galactic-cream p-6 rounded-lg shadow-lg border-2 border-galactic-gold relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <path d="M0 0 L20 0 L0 20 Z" fill="#C9A961" opacity="0.2"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <path d="M64 64 L44 64 L64 44 Z" fill="#C9A961" opacity="0.2"/>
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-galactic-gold/20 rounded-lg">
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <h3 className="font-semibold text-galactic-navy font-serif">{title}</h3>
        </div>
        <p className="text-4xl font-bold text-galactic-navy">{value}</p>
      </div>
    </div>
  );
};