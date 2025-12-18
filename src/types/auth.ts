export interface User {
  id: string;
  email: string;
  name: string;
  token: string;
  date_of_birth?: string | null;
  time_of_birth?: string | null;
  birthplaceName?: string | null;
  longitude?: number | null;
  latitude?: number | null;
  userOptions?: string | null;
  subscriptionId?: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  name: string;
  date_of_birth?: string;
  time_of_birth?: string;
  birthplaceName?: string;
  longitude?: number;
  latitude?: number;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
  date_of_birth?: string;
  time_of_birth?: string;
  birthplaceName?: string;
  longitude?: number;
  latitude?: number;
  userOptions?: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

export interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignUpData) => Promise<void>;
  logout: () => void;
  updateUser: (data: UpdateUserData) => Promise<void>;
  changePassword: (data: ChangePasswordData) => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}