import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-galactic-cream-dark via-galactic-cream to-white flex items-center justify-center">
        <div className="text-center">
          <svg width="80" height="80" viewBox="0 0 100 100" className="animate-spin mx-auto mb-4">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A961" strokeWidth="4" strokeDasharray="60 200"/>
          </svg>
          <p className="text-galactic-navy font-serif text-lg">Loading your cosmos...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};