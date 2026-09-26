import React, { createContext, useState, useEffect, useContext } from 'react';
import * as authService from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);

  // Validate token on mount
  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          const freshUser = await authService.getMe();
          setUser(freshUser);
          localStorage.setItem('user', JSON.stringify(freshUser));
        } catch (err) {
          console.warn('Session expired or invalid token');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
          setToken(null);
        }
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  const login = async (email, password) => {
    const data = await authService.login(email, password);
    setUser(data);
    setToken(data.token);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  };

  const register = async (name, email, password) => {
    const data = await authService.register(name, email, password);
    // Don't auto-login if redirecting to login as per user spec ("After successful registration, redirect to Login.")
    return data;
  };

  const googleLogin = async (payload) => {
    const data = await authService.googleLogin(payload);
    setUser(data);
    setToken(data.token);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
  };

  const updateUser = (updatedUser) => {
    const merged = { ...user, ...updatedUser };
    setUser(merged);
    localStorage.setItem('user', JSON.stringify(merged));
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!token && !!user,
    isAdmin: user?.role === 'admin',
    isStudent: user?.role === 'student',
    login,
    register,
    googleLogin,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
