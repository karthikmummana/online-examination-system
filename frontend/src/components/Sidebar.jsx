import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  ShieldCheck,
  LayoutDashboard,
  FileSpreadsheet,
  PlusCircle,
  FileCheck2,
  Users,
  LogOut,
  Cpu,
} from 'lucide-react';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="admin-sidebar">
      <div>
        {/* Brand */}
        <div className="admin-brand">
          <div className="brand-icon" style={{ background: 'var(--accent-primary)' }}>
            <Cpu size={18} />
          </div>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>EvaluaTech</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Admin Console
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <ul className="admin-nav">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/exams"
              end
              className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}
            >
              <FileSpreadsheet size={18} />
              <span>Assessments</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/exams/create"
              className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}
            >
              <PlusCircle size={18} />
              <span>Create Test</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/results"
              className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}
            >
              <FileCheck2 size={18} />
              <span>Results History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/students"
              className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}
            >
              <Users size={18} />
              <span>Candidates</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Admin User Footer */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', padding: '0 0.25rem' }}>
          <div className="user-avatar-mini" style={{ width: '32px', height: '32px', fontSize: '0.85rem' }}>
            {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
              {user?.name || 'Administrator'}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
              Super Admin
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="btn btn-outline"
          style={{ width: '100%', justifyContent: 'flex-start', padding: '0.55rem 0.85rem' }}
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
