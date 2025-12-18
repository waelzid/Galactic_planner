import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';

export const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    date_of_birth: '',
    time_of_birth: '',
    birthplaceName: '',
    longitude: '',
    latitude: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      await signup({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        date_of_birth: formData.date_of_birth || undefined,
        time_of_birth: formData.time_of_birth || undefined,
        birthplaceName: formData.birthplaceName || undefined,
        longitude: formData.longitude ? parseFloat(formData.longitude) : undefined,
        latitude: formData.latitude ? parseFloat(formData.latitude) : undefined,
      });
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-galactic-cream-dark via-galactic-cream to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
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
        </div>

        {/* Sign Up Card */}
        <div className="bg-galactic-cream rounded-lg shadow-2xl border-2 border-galactic-gold overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-galactic-cream-dark to-galactic-cream px-8 py-6 border-b-2 border-galactic-gold">
            <div className="flex items-center justify-center gap-3">
              <UserPlus className="w-6 h-6 text-galactic-gold" />
              <h2 className="text-2xl font-bold text-galactic-navy font-serif">Create Account</h2>
            </div>
            <p className="text-center text-galactic-navy/70 text-sm mt-2 font-serif italic">
              Begin your cosmic journey
            </p>
          </div>

          {/* Card Body */}
          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-400 rounded-md flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800 font-medium">{error}</p>
              </div>
            )}

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-galactic-navy font-serif border-b-2 border-galactic-gold pb-2">
                  Basic Information
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-galactic-gold" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy placeholder-galactic-navy/50 focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-galactic-gold" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy placeholder-galactic-navy/50 focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                      Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-galactic-gold" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy placeholder-galactic-navy/50 focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                        placeholder="Min. 6 characters"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-galactic-gold" />
                      </div>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy placeholder-galactic-navy/50 focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                        placeholder="Repeat password"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Birth Information (Optional) */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-galactic-navy font-serif border-b-2 border-galactic-gold pb-2">
                  Birth Information <span className="text-sm font-normal text-galactic-navy/60">(Optional)</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-galactic-gold" />
                      </div>
                      <input
                        type="date"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                      />
                    </div>
                  </div>

                  {/* Time of Birth */}
                  <div>
                    <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                      Time of Birth
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="h-5 w-5 text-galactic-gold" />
                      </div>
                      <input
                        type="time"
                        name="time_of_birth"
                        value={formData.time_of_birth}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                      />
                    </div>
                  </div>
                </div>

                {/* Birth Place */}
                <div>
                  <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                    Birth Place
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-galactic-gold" />
                    </div>
                    <input
                      type="text"
                      name="birthplaceName"
                      value={formData.birthplaceName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy placeholder-galactic-navy/50 focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                {/* Coordinates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                      Latitude
                    </label>
                    <input
                      type="number"
                      name="latitude"
                      value={formData.latitude}
                      onChange={handleChange}
                      step="any"
                      className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy placeholder-galactic-navy/50 focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                      placeholder="e.g., 48.8566"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                      Longitude
                    </label>
                    <input
                      type="number"
                      name="longitude"
                      value={formData.longitude}
                      onChange={handleChange}
                      step="any"
                      className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy placeholder-galactic-navy/50 focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                      placeholder="e.g., 2.3522"
                    />
                  </div>
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
                    Creating Account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-galactic-navy/70 font-serif">
                Already have an account?{' '}
                <Link to="/login" className="text-galactic-gold hover:text-galactic-gold-dark font-semibold">
                  Sign In
                </Link>
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