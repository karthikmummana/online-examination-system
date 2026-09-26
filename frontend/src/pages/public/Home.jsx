import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowRight, Sparkles, Cpu } from 'lucide-react';

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const exploreLink = isAuthenticated
    ? user?.role === 'admin'
      ? '/admin/dashboard'
      : '/student/exams'
    : '/register';

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-pill">
          <Sparkles size={15} /> Developer Skill Assessment Platform
        </div>

        <h1 className="hero-title">
          Test Your Skills. Track Your Growth.
        </h1>

        <p className="hero-subtitle">
          Practice technical assessments across programming, frontend, backend, databases and interview preparation.
        </p>

        <div className="hero-buttons">
          <Link to={exploreLink} className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
            Explore Assessments <ArrowRight size={18} />
          </Link>
          {!isAuthenticated ? (
            <Link to="/login" className="btn btn-secondary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
              Login
            </Link>
          ) : (
            <Link
              to={user?.role === 'admin' ? '/admin/dashboard' : '/student/dashboard'}
              className="btn btn-secondary"
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
            >
              Go to Dashboard
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
            <div className="brand-icon" style={{ width: '28px', height: '28px' }}>
              <Cpu size={16} />
            </div>
            EvaluaTech Developer Assessment Platform
          </div>
          <p style={{ maxWidth: '560px' }}>
            Full-Stack Technical Skill Evaluation System. Designed for programming assessments, placement prep, and developer benchmarking.
          </p>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} EvaluaTech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
