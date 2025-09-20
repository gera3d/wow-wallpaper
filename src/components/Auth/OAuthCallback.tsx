import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';

const OAuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [message, setMessage] = useState('Processing GitHub authentication...');

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');

        if (error) {
          setStatus('error');
          setMessage(`Authentication failed: ${error}`);
          setTimeout(() => navigate('/'), 3000);
          return;
        }

        if (!code || !state) {
          setStatus('error');
          setMessage('Invalid callback parameters');
          setTimeout(() => navigate('/'), 3000);
          return;
        }

        // Verify state parameter
        const savedState = localStorage.getItem('oauth_state');
        if (state !== savedState) {
          setStatus('error');
          setMessage('Invalid state parameter - possible security issue');
          localStorage.removeItem('oauth_state');
          setTimeout(() => navigate('/'), 3000);
          return;
        }

        // In a real implementation, you would exchange the code for an access token
        // via your backend server. For now, we'll show a success message and redirect
        console.log('OAuth code received:', code);
        
        setStatus('success');
        setMessage('Authentication successful! You can now use the Dev token method to complete setup.');
        
        // Clean up
        localStorage.removeItem('oauth_state');
        
        // Redirect to home page after showing success
        setTimeout(() => navigate('/'), 2000);

      } catch (error) {
        console.error('OAuth callback error:', error);
        setStatus('error');
        setMessage('An unexpected error occurred during authentication');
        setTimeout(() => navigate('/'), 3000);
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-md w-full mx-4">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-6">
            GitHub Authentication
          </h1>
          
          {status === 'processing' && (
            <div className="space-y-4">
              <LoadingSpinner size="lg" />
              <p className="text-gray-300">{message}</p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-400">{message}</p>
              <p className="text-gray-400 text-sm">Redirecting...</p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-red-400">{message}</p>
              <p className="text-gray-400 text-sm">Redirecting to home page...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OAuthCallback;