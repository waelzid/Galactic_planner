import type { LoginCredentials, SignUpData, User, UpdateUserData, ChangePasswordData } from '../types/auth';

const API_URL = 'http://localhost:5000/api'; 

// Sign Up
export const signupUser = async (data: SignUpData): Promise<User> => {
  console.log('Signing up user with data:', JSON.stringify(data));
  const response = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Registration failed');
  }

  const result = await response.json();
  
  // Store token
  localStorage.setItem('auth_token', result.token);
  localStorage.setItem('user', JSON.stringify(result.user));
  
  return result.user;
};

// Login
export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  const result = await response.json();
  
  // Store token
  localStorage.setItem('auth_token', result.token);
  localStorage.setItem('user', JSON.stringify(result.user));
  
  return result.user;
};

// Get User Profile
export const getUserProfile = async (): Promise<User> => {
  const token = getToken();
  
  const response = await fetch(`${API_URL}/user/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  const user = await response.json();
  localStorage.setItem('user', JSON.stringify(user));
  
  return user;
};

// Update User Profile
export const updateUserProfile = async (data: UpdateUserData): Promise<User> => {
  const token = getToken();
  
  const response = await fetch(`${API_URL}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to update profile');
  }

  const user = await response.json();
  localStorage.setItem('user', JSON.stringify(user));
  
  return user;
};

// Change Password
export const changeUserPassword = async (data: ChangePasswordData): Promise<void> => {
  const token = getToken();
  
  const response = await fetch(`${API_URL}/user/change-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to change password');
  }
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
};

// Get Current User
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

// Get Token
export const getToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

// Validate Token
export const isTokenValid = (): boolean => {
  const token = getToken();
  if (!token) return false;
  
  // Add your token validation logic here
  return true;
};