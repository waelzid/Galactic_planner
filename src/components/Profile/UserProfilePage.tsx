import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Calendar, Clock, MapPin, Save, AlertCircle, CheckCircle } from 'lucide-react';

export const UserProfilePage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    date_of_birth: user?.date_of_birth || '',
    time_of_birth: user?.time_of_birth || '',
    birthplaceName: user?.birthplaceName || '',
    longitude: user?.longitude?.toString() || '',
    latitude: user?.latitude?.toString() || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    try {
      await updateUser({
        name: formData.name,
        email: formData.email,
        date_of_birth: formData.date_of_birth || undefined,
        time_of_birth: formData.time_of_birth || undefined,
        birthplaceName: formData.birthplaceName || undefined,
        longitude: formData.longitude ? parseFloat(formData.longitude) : undefined,
        latitude: formData.latitude ? parseFloat(formData.latitude) : undefined,
      });
      
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setIsEditing(false);
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to update profile' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      date_of_birth: user?.date_of_birth || '',
      time_of_birth: user?.time_of_birth || '',
      birthplaceName: user?.birthplaceName || '',
      longitude: user?.longitude?.toString() || '',
      latitude: user?.latitude?.toString() || '',
    });
    setIsEditing(false);
    setMessage(null);
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
        <h2 className="text-4xl font-bold text-galactic-navy font-serif">My Profile</h2>
        <p className="text-galactic-navy/70 font-serif italic mt-2">Your cosmic identity</p>
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

      {/* Profile Card */}
      <div className="bg-galactic-cream rounded-lg shadow-lg border-2 border-galactic-gold p-8">
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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-galactic-navy font-serif border-b-2 border-galactic-gold pb-2 flex-1">
                Basic Information
              </h3>
              {!isEditing && (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 text-sm bg-galactic-gold text-white rounded-md hover:bg-galactic-gold-dark transition-colors font-serif"
                >
                  Edit Profile
                </button>
              )}
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-galactic-navy mb-2 font-serif">
                Full Name
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
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy disabled:bg-galactic-beige/30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                />
              </div>
            </div>

            {/* Email */}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy disabled:bg-galactic-beige/30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                />
              </div>
            </div>
          </div>

          {/* Birth Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-galactic-navy font-serif border-b-2 border-galactic-gold pb-2">
              Birth Information
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
                    disabled={!isEditing}
                    className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy disabled:bg-galactic-beige/30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
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
                    disabled={!isEditing}
                    className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy disabled:bg-galactic-beige/30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
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
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy disabled:bg-galactic-beige/30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
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
                  disabled={!isEditing}
                  step="any"
                  className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy disabled:bg-galactic-beige/30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
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
                  disabled={!isEditing}
                  step="any"
                  className="w-full px-4 py-3 border-2 border-galactic-gold rounded-md bg-white text-galactic-navy disabled:bg-galactic-beige/30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-galactic-gold font-serif"
                  placeholder="e.g., 2.3522"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-3 px-4 bg-galactic-gold hover:bg-galactic-gold-dark text-white font-semibold rounded-md transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-serif flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Save Changes
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={handleCancel}
                disabled={isLoading}
                className="flex-1 py-3 px-4 bg-gray-300 hover:bg-gray-400 text-galactic-navy font-semibold rounded-md transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-serif"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};