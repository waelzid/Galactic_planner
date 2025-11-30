import type { LoginCredentials, User } from '../types/auth';

// Mock API - Replace with your actual backend API
const API_URL = 'http://localhost:5000';



// Mock login function - Replace with actual API call
/*export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock validation (REMOVE THIS IN PRODUCTION)
  if (credentials.username === 'admin@galactic.com' && credentials.password === 'admin123') {
    const mockUser: User = {
      id: '1',
      email: credentials.username,
      name: 'Admin User',
      token: 'mock-jwt-token-' + Date.now()
    };
    
    // Store token in localStorage
    localStorage.setItem('auth_token', mockUser.token);
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    return mockUser;
  }
  
  throw new Error('Invalid credentials');
};
*/

// Real implementation example (uncomment and modify for production):

export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  const data = await response.json();
  
  // Store token in localStorage
  localStorage.setItem('auth_token', data.token);
  localStorage.setItem('user', JSON.stringify(data.user));
  
  return data.user;
};

export const logoutUser = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

export const getToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

// Validate token (add your validation logic)
export const isTokenValid = (): boolean => {
  const token = getToken();
  if (!token) return false;
  
  // Add your token validation logic here
  // For now, just check if it exists
  return true;
};