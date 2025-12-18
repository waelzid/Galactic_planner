import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-galactic-cream-dark via-galactic-cream to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Decorative Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <svg width="80" height="80" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A961" strokeWidth="2"/>
              <circle cx="50" cy="50" r="15" fill="#C9A961"/>
              <path d="M50 10 L55 30 L50 25 L45 30 Z" fill="#C9A961"/>
              <path d="M50 90 L55 70 L50 75 L45 70 Z" fill="#C9A961"/>
              <path d="M10 50 L30 45 L25 50 L30 55 Z" fill="#C9A961"/>
              <path d="M90 50 L70 45 L75 50 L70 55 Z" fill="#C9A961"/>
            </svg>
          </div>
          
          <div className="flex justify-center mb-4">
            <svg width="200" height="40" viewBox="0 0 200 40">
              <path d="M10 20 Q30 10 50 20" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
              <path d="M150 20 Q170 10 190 20" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
              <circle cx="50" cy="20" r="2" fill="#C9A961"/>
              <circle cx="150" cy="20" r="2" fill="#C9A961"/>
              <line x1="55" y1="20" x2="145" y2="20" stroke="#C9A961" strokeWidth="1"/>
              <circle cx="100" cy="20" r="3" fill="#C9A961"/>
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-galactic-navy mb-2 font-serif">GALACTIC</h1>
          <p className="text-galactic-gold text-sm tracking-widest font-serif">PLANNER</p>
          
          <div className="flex justify-center mt-4">
            <svg width="200" height="40" viewBox="0 0 200 40">
              <path d="M10 20 Q30 30 50 20" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
              <path d="M150 20 Q170 30 190 20" stroke="#C9A961" strokeWidth="1.5" fill="none"/>
              <circle cx="50" cy="20" r="2" fill="#C9A961"/>
              <circle cx="150" cy="20" r="2" fill="#C9A961"/>
              <line x1="55" y1="20" x2="145" y2="20" stroke="#C9A961" strokeWidth="1"/>
              <circle cx="100" cy="20" r="3" fill="#C9A961"/>
            </svg>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-galactic-cream rounded-lg shadow-2xl border-2 border-galactic-gold overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-galactic-cream-dark to-galactic-cream px-8 py-6 border-b-2 border-galactic-gold">
            <div className="flex items-center justify-center gap-3">
              <LogIn className="w-6 h-6 text-galactic-gold" />
              <h2 className="text-2xl font-bold text-galactic-navy font-serif">Sign In</h2>
            </div>
            <p className="text-center text-galactic-navy/70 text-sm mt-2 font-serif italic">
              Enter your cosmic credentials
            </p>
          </div>

          {/* Card Body */}
          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-400 rounded-md flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-red-800 font-medium">{error}</p>
                  <p className="text-xs text-red-600 mt-1">
                    Demo: admin@galactic.com / admin123
                  </p>
                </div>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-galactic-gold" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy placeholder-galactic-navy/50 focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                    placeholder="admin@galactic.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-galactic-gold" />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy placeholder-galactic-navy/50 focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-galactic-gold hover:bg-galactic-gold-dark text-white font-semibold rounded-md transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-serif text-lg"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing In...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-galactic-navy/70 font-serif">
                Don't have an account?{' '}
                <Link to="/signup" className="text-galactic-gold hover:text-galactic-gold-dark font-semibold">
                  Create Account
                </Link>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-galactic-gold/10 border border-galactic-gold/30 rounded-md">
              <p className="text-xs text-galactic-navy/70 font-serif text-center">
                <span className="font-semibold">Demo Credentials:</span>
                <br />
                Email: admin@galactic.com
                <br />
                Password: admin123
              </p>
            </div>
          </div>

          {/* Card Footer */}
          <div className="px-8 py-4 bg-gradient-to-r from-galactic-cream-dark to-galactic-cream border-t-2 border-galactic-gold">
            <div className="flex justify-center">
              <svg width="150" height="20" viewBox="0 0 150 20">
                <path d="M0 10 Q25 5 50 10" stroke="#C9A961" strokeWidth="1" fill="none"/>
                <path d="M100 10 Q125 5 150 10" stroke="#C9A961" strokeWidth="1" fill="none"/>
                <circle cx="50" cy="10" r="1.5" fill="#C9A961"/>
                <circle cx="100" cy="10" r="1.5" fill="#C9A961"/>
                <line x1="52" y1="10" x2="98" y2="10" stroke="#C9A961" strokeWidth="0.5"/>
                <circle cx="75" cy="10" r="2" fill="#C9A961"/>
              </svg>
            </div>
            <p className="text-center text-xs text-galactic-navy/60 mt-2 font-serif italic">
              Plan Your Cosmos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};