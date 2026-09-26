import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx';

// Styles
import './styles/index.css';
import './styles/auth.css';
import './styles/dashboard.css';
import './styles/exam.css';
import './styles/admin.css';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '242136350913-m0cdqpn421a8ns83s91sonl4uvg7j327.apps.googleusercontent.com';

if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
  console.warn('[Google Auth Warning] VITE_GOOGLE_CLIENT_ID environment variable is missing in frontend/.env. Using default configured client ID.');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

