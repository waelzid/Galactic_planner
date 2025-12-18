import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, LoginCredentials, SignUpData, UpdateUserData, ChangePasswordData, AuthContextType } from '../types/auth';
import { 
  loginUser, 
  signupUser, 
  logoutUser, 
  getCurrentUser,
  updateUserProfile,
  changeUserPassword 
} from '../services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      const userData = await loginUser(credentials);
      setUser(userData);
    } catch (error) {
      throw error;
    }
  };

  const signup = async (data: SignUpData) => {
    try {
      const userData = await signupUser(data);
      setUser(userData);
    } catch (error) {
      throw error;
    }
  };

  const updateUser = async (data: UpdateUserData) => {
    try {
      const updatedUser = await updateUserProfile(data);
      setUser(updatedUser);
    } catch (error) {
      throw error;
    }
  };

  const changePassword = async (data: ChangePasswordData) => {
    try {
      await changeUserPassword(data);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    updateUser,
    changePassword,
    isAuthenticated: !!user,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};