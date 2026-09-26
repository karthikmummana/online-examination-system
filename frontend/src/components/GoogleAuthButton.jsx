import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const GoogleAuthButton = ({ onSuccess, onError, text = 'continue_with' }) => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSuccess = async (credentialResponse) => {
    try {
      setLoading(true);
      if (!credentialResponse?.credential) {
        throw new Error('No credential token received from Google');
      }
      const user = await googleLogin({ credential: credentialResponse.credential });
      if (onSuccess) {
        onSuccess(user);
      } else {
        const redirectPath = user.role === 'admin' ? '/admin/dashboard' : '/student/dashboard';
        navigate(redirectPath);
      }
    } catch (err) {
      console.error('Google Sign-In Backend Error:', err);
      const errMsg = err.response?.data?.message || 'Google sign-in failed. Please try again.';
      if (onError) onError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleError = () => {
    console.warn('Google Login UI cancelled or failed');
    if (onError) {
      onError('Google sign-in was cancelled or encountered an error. Please try again.');
    }
  };

  return (
    <div style={{ width: '100%', marginTop: '1rem', marginBottom: '1rem' }}>
      <div className="google-btn-divider">
        <span>OR</span>
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', minHeight: '44px' }}>
        {loading ? (
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Signing in with Google...</div>
        ) : (
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap={false}
            theme="outline"
            size="large"
            text={text}
            shape="rectangular"
            width="100%"
          />
        )}
      </div>
    </div>
  );
};

export default GoogleAuthButton;
