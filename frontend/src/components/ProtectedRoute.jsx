import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, token, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner fullPage message="Authenticating session..." />;
  }

  if (!isAuthenticated || !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If a specific role is required and user does not match
  if (allowedRole && user.role !== allowedRole) {
    // If student attempts to access admin route
    if (user.role === 'student' && allowedRole === 'admin') {
      return <Navigate to="/student/dashboard" replace />;
    }
    // If admin attempts to access student route
    if (user.role === 'admin' && allowedRole === 'student') {
      return <Navigate to="/admin/dashboard" replace />;
    }
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
