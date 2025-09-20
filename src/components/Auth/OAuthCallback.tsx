import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGitHubAuth } from '../../contexts/AuthContext';
import LoadingSpinner from '../Shared/LoadingSpinner';
import Card from '../Shared/Card';

const OAuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const { handleOAuthCallback } = useGitHubAuth();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const processCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const savedState = localStorage.getItem('oauth_state');

        if (!code) {
          throw new Error('No authorization code received');
        }

        if (!state || state !== savedState) {
          throw new Error('Invalid state parameter');
        }

        // Handle the OAuth callback
        await handleOAuthCallback(code, state);
        
        setStatus('success');
        
        // Redirect to home page after successful authentication
        setTimeout(() => {
          navigate('/');
        }, 2000);

      } catch (error) {
        console.error('OAuth callback error:', error);
        
        if (error instanceof Error && error.message === 'OAuth_NEEDS_BACKEND') {
          setError('OAuth authentication successful! However, to complete login, please use the "Dev" button on the home page to enter a GitHub Personal Access Token.');
        } else {
          setError(error instanceof Error ? error.message : 'Authentication failed');
        }
        
        setStatus('error');
        
        // Redirect to home page after showing message
        setTimeout(() => {
          navigate('/');
        }, 8000);
      } finally {
        // Clean up URL parameters
        window.history.replaceState({}, document.title, '/wow-wallpaper/');
        localStorage.removeItem('oauth_state');
      }
    };

    processCallback();
  }, [handleOAuthCallback, navigate]);

  if (status === 'loading') {
    return (
      <div className="max-w-md mx-auto mt-16">
        <Card variant="wow" className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Completing Login...</h2>
          <p className="text-gray-300">Please wait while we complete your GitHub authentication.</p>
        </Card>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto mt-16">
        <Card variant="wow" className="text-center">
          <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Login Successful!</h2>
          <p className="text-gray-300">You have been successfully authenticated with GitHub.</p>
          <p className="text-sm text-gray-400 mt-2">Redirecting you to the home page...</p>
        </Card>
      </div>
    );
  }

  const isBackendNeeded = error.includes('OAuth authentication successful!');

  return (
    <div className="max-w-lg mx-auto mt-16">
      <Card variant="wow" className="text-center">
        <div className={`w-16 h-16 ${isBackendNeeded ? 'bg-yellow-600/20' : 'bg-red-600/20'} rounded-full flex items-center justify-center mx-auto mb-4`}>
          {isBackendNeeded ? (
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">
          {isBackendNeeded ? 'Almost There!' : 'Authentication Failed'}
        </h2>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{error}</p>
        {isBackendNeeded && (
          <div className="text-left bg-gray-800/50 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-300 mb-2">To complete login:</p>
            <ol className="text-xs text-gray-400 space-y-1">
              <li>1. Go to GitHub → Settings → Developer settings → Personal access tokens</li>
              <li>2. Generate a new token with 'repo' and 'user:email' scopes</li>
              <li>3. Copy the token and paste it using the "Dev" button</li>
            </ol>
          </div>
        )}
        <p className="text-sm text-gray-400">Redirecting you to the home page...</p>
      </Card>
    </div>
  );
};

export default OAuthCallback;