import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ message = 'Loading...', fullPage = false }) => {
  if (fullPage) {
    return (
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}>
        <Loader2 style={{ width: '38px', height: '38px', animation: 'spin 1s linear infinite', color: '#6366f1' }} />
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{message}</p>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
      <Loader2 style={{ width: '18px', height: '18px', animation: 'spin 1s linear infinite' }} />
      {message && <span>{message}</span>}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
