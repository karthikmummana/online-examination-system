import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import * as authService from '../../services/authService';
import {
  User,
  Mail,
  Shield,
  Calendar,
  Save,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    if (!name.trim()) {
      setError('Name cannot be empty');
      return;
    }

    try {
      setSaving(true);
      const updated = await authService.updateProfile(name.trim());
      updateUser(updated);
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="page-container">
      <div style={{ maxWidth: '620px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1.75rem' }}>
          <h1 style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>My Candidate Profile</h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Manage your account details and profile information
          </p>
        </div>

        {success && (
          <div className="alert alert-success">
            <CheckCircle2 size={18} />
            <span>{success}</span>
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <div className="glass-card" style={{ padding: '2.25rem', background: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.75rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff',
              }}
            >
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{user?.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className={`badge badge-${user?.role}`}>{user?.role}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {user?.email}
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label className="form-label" htmlFor="profileName">
                Full Name
              </label>
              <input
                id="profileName"
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="profileEmail">
                Email Address (Primary Account Key)
              </label>
              <input
                id="profileEmail"
                type="email"
                className="form-control"
                value={user?.email || ''}
                disabled
                style={{ opacity: 0.65, cursor: 'not-allowed', background: 'var(--bg-surface)' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Account Role</label>
              <input
                type="text"
                className="form-control"
                value={user?.role?.toUpperCase() || ''}
                disabled
                style={{ opacity: 0.65, cursor: 'not-allowed', background: 'var(--bg-surface)' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Registration Date</label>
              <input
                type="text"
                className="form-control"
                value={user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                disabled
                style={{ opacity: 0.65, cursor: 'not-allowed', background: 'var(--bg-surface)' }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: '1.25rem', width: '100%' }}
              disabled={saving}
            >
              {saving ? <LoadingSpinner message="Saving..." /> : <><Save size={16} /> Save Changes</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
