
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  updateUser: (user: Partial<User>) => void;
  changePassword: (oldPassword: string, newPassword: string) => Promise<boolean>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedAuth = localStorage.getItem('isAuthenticated');
    
    if (savedUser && savedAuth === 'true') {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Get all users from localStorage
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Default admin user
    const defaultUsers = [
      { id: 'admin', name: 'Admin User', email: 'admin@mariac.com', password: 'admin123', isAdmin: true },
      { id: 'user1', name: 'Test User', email: 'user@test.com', password: 'user123', isAdmin: false }
    ];
    
    // Combine default users with saved users
    const allUsers = [...defaultUsers, ...savedUsers];
    
    const foundUser = allUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(foundUser));
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Get existing users
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    const existingUser = savedUsers.find((u: User) => u.email === email);
    if (existingUser) {
      return false;
    }
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      password,
      isAdmin: false
    };
    
    // Save to users array
    const updatedUsers = [...savedUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Set current user
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('isAuthenticated', 'true');
    return true;
  };

  const updateUser = (updatedFields: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updatedFields };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    // Update in users array
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = savedUsers.findIndex((u: User) => u.id === user.id);
    if (userIndex !== -1) {
      savedUsers[userIndex] = updatedUser;
      localStorage.setItem('users', JSON.stringify(savedUsers));
    }
  };

  const changePassword = async (oldPassword: string, newPassword: string): Promise<boolean> => {
    if (!user) return false;
    
    // Check if old password matches
    if (user.password !== oldPassword) {
      return false;
    }
    
    // Update password
    updateUser({ password: newPassword });
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
  };

  const value = {
    user,
    login,
    logout,
    register,
    updateUser,
    changePassword,
    isAuthenticated,
    isAdmin: user?.isAdmin || false
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
