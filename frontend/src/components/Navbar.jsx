import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  GraduationCap,
  LayoutDashboard,
  FileText,
  Award,
  User,
  LogOut,
  LogIn,
  UserPlus,
} from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="app-navbar">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <Link
          to={isAuthenticated ? (user?.role === 'admin' ? '/admin/dashboard' : '/student/dashboard') : '/'}
          className="brand-logo"
        >
          <div className="brand-icon">
            <GraduationCap size={20} />
          </div>
          <span>EvaluaTech</span>
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          {!isAuthenticated ? (
            <>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                  Home
                </NavLink>
              </li>
              <li>
                <a href="/#features" className="nav-link">
                  Features
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="nav-link">
                  How It Works
                </a>
              </li>
            </>
          ) : user?.role === 'student' ? (
            <>
              <li>
                <NavLink
                  to="/student/dashboard"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  <LayoutDashboard size={17} /> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/student/exams"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  <FileText size={17} /> Exams
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/student/results"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  <Award size={17} /> My Results
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/student/profile"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  <User size={17} /> Profile
                </NavLink>
              </li>
            </>
          ) : null}
        </ul>

        {/* User Account / Auth Actions */}
        <div className="user-nav-actions">
          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div className="user-profile-badge">
                <div className="user-avatar-mini">
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <span>{user?.name}</span>
                <span className={`badge badge-${user?.role}`}>{user?.role}</span>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-outline"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
                title="Log out of your session"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link to="/login" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                <LogIn size={16} /> Login
              </Link>
              <Link to="/register" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                <UserPlus size={16} /> Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
