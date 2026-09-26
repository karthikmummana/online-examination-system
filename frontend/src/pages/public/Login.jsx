import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogIn, AlertCircle, Sparkles } from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner';
import GoogleAuthButton from '../../components/GoogleAuthButton';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setIsSubmitting(true);
      const user = await login(email, password);

      // Redirect based on user role
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        const from = location.state?.from?.pathname || '/student/dashboard';
        navigate(from);
      }
    } catch (err) {
      const message =
        err.response?.data?.message || 'Login failed. Please check your credentials.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick fill helper for review/testing
  const fillDemo = (demoEmail, demoPass) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setError('');
  };

  return (
    <div className="auth-wrapper">
      <div className="glass-card auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Sign in to access your assessment dashboard</p>
        </div>

        {error && (
          <div className="alert alert-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="e.g. alex@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.75rem' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <LoadingSpinner message="Signing in..." />
            ) : (
              <>
                <LogIn size={18} /> Sign In
              </>
            )}
          </button>
        </form>

        <GoogleAuthButton onError={(msg) => setError(msg)} />


        <div className="demo-credentials-box">
          <h4>
            <Sparkles size={14} /> Quick Demo Accounts (Click to Fill)
          </h4>
          <div className="demo-btn-row">
            <button
              type="button"
              className="demo-btn"
              onClick={() => fillDemo('admin@exam.com', 'Admin@12345')}
            >
              Fill Admin Account
            </button>
            <button
              type="button"
              className="demo-btn"
              onClick={() => fillDemo('student@exam.com', 'Student@12345')}
            >
              Fill Student Account
            </button>
          </div>
        </div>

        <div className="auth-footer">
          Don't have an account?{' '}
          <Link to="/register">Register as Student</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
