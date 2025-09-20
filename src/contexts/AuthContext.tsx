import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface GitHubUser {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  email?: string;
  html_url: string;
}

interface AuthContextType {
  user: GitHubUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// GitHub OAuth App configuration
const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI || `${window.location.origin}/wow-wallpaper/auth/callback`;

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('github_token'));
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user && !!token;

  // Initialize auth state on app load
  useEffect(() => {
    const initAuth = async () => {
      const savedToken = localStorage.getItem('github_token');
      if (savedToken) {
        try {
          const userData = await fetchGitHubUser(savedToken);
          setUser(userData);
          setToken(savedToken);
        } catch (error) {
          console.error('Failed to validate saved token:', error);
          localStorage.removeItem('github_token');
          setToken(null);
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  // Handle OAuth callback
  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      
      if (code && state && window.location.pathname.includes('/auth/callback')) {
        setIsLoading(true);
        try {
          // In a real app, you'd exchange the code for a token via your backend
          // For now, we'll use GitHub's device flow or direct token approach
          console.log('OAuth code received:', code);
          
          // Clear the callback URL
          window.history.replaceState({}, document.title, '/wow-wallpaper/');
          
        } catch (error) {
          console.error('OAuth callback error:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    handleCallback();
  }, []);

  const login = () => {
    if (!CLIENT_ID) {
      console.error('GitHub Client ID not configured. Please set VITE_GITHUB_CLIENT_ID environment variable.');
      console.log('Available env vars:', Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));
      // For now, just log the error - users can still use development token method
      alert(`OAuth is not configured. CLIENT_ID: "${CLIENT_ID}". Use the "Dev" button for token-based login, or contact the administrator to set up OAuth.`);
      return;
    }

    const state = Math.random().toString(36).substring(7);
    localStorage.setItem('oauth_state', state);
    
    const authUrl = new URL('https://github.com/login/oauth/authorize');
    authUrl.searchParams.set('client_id', CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.set('scope', 'user:email,repo');
    authUrl.searchParams.set('state', state);
    
    window.location.href = authUrl.toString();
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('github_token');
    localStorage.removeItem('oauth_state');
  };

  // For development/testing - allow manual token input
  const setTokenManually = async (newToken: string) => {
    try {
      const userData = await fetchGitHubUser(newToken);
      setUser(userData);
      setToken(newToken);
      localStorage.setItem('github_token', newToken);
    } catch (error) {
      console.error('Invalid token:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    token,
  };

  // Expose setTokenManually for development
  (window as any).setGitHubToken = setTokenManually;

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Helper function to fetch user data from GitHub API
async function fetchGitHubUser(token: string): Promise<GitHubUser> {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

// Custom hook to use auth context
export const useGitHubAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useGitHubAuth must be used within an AuthProvider');
  }
  return context;
};