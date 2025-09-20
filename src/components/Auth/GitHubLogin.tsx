import React, { useState } from 'react';
import { useGitHubAuth } from '../../contexts/AuthContext';
import Button from '../Shared/Button';
import LoadingSpinner from '../Shared/LoadingSpinner';

const GitHubLogin: React.FC = () => {
  const { user, isLoading, isAuthenticated, login, logout } = useGitHubAuth();
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [tokenInput, setTokenInput] = useState('');
  const [tokenLoading, setTokenLoading] = useState(false);

  const handleManualToken = async () => {
    if (!tokenInput.trim()) return;
    
    setTokenLoading(true);
    try {
      await (window as any).setGitHubToken(tokenInput);
      setTokenInput('');
      setShowTokenInput(false);
    } catch (error) {
      alert('Invalid GitHub token. Please check and try again.');
    } finally {
      setTokenLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2">
        <LoadingSpinner size="sm" />
        <span className="text-gray-300">Loading...</span>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img 
            src={user.avatar_url} 
            alt={user.name || user.login}
            className="w-8 h-8 rounded-full border-2 border-wow-gold/50"
          />
          <div className="hidden md:block">
            <div className="text-white text-sm font-medium">
              {user.name || user.login}
            </div>
            <div className="text-gray-400 text-xs">
              @{user.login}  
            </div>
          </div>
        </div>
        <Button 
          variant="secondary" 
          size="sm"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant="secondary" 
        size="sm"
        onClick={login}
      >
        <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
        Login with GitHub
      </Button>
      
      {/* Development Token Input - Available until OAuth is configured */}
      {(process.env.NODE_ENV === 'development' || !import.meta.env.VITE_GITHUB_CLIENT_ID) && (
        <div className="relative">
          <Button 
            variant="secondary" 
            size="sm"
            onClick={() => setShowTokenInput(!showTokenInput)}
            className="ml-2"
          >
            Dev
          </Button>
          
          {showTokenInput && (
            <div className="absolute top-full right-0 mt-2 p-4 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50">
              <div className="w-80">
                <h3 className="text-white font-semibold mb-2">GitHub Token Login</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Paste a GitHub Personal Access Token with 'user:email' scope. 
                  <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
                    Create one here →
                  </a>
                </p>
                <input
                  type="password"
                  value={tokenInput}
                  onChange={(e) => setTokenInput(e.target.value)}
                  placeholder="ghp_xxxxxxxxxxxx"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white text-sm mb-3"
                />
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    onClick={handleManualToken}
                    disabled={tokenLoading || !tokenInput.trim()}
                  >
                    {tokenLoading ? <LoadingSpinner size="sm" /> : 'Set Token'}
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    onClick={() => setShowTokenInput(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GitHubLogin;