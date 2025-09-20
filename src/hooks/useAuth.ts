import { useGitHubAuth } from '../contexts/AuthContext';

export const useAuth = () => {
  const auth = useGitHubAuth();
  
  return {
    ...auth,
    // Helper methods for common auth operations
    isLoggedIn: auth.isAuthenticated,
    username: auth.user?.login,
    userAvatar: auth.user?.avatar_url,
    userName: auth.user?.name,
    
    // Check if user has specific permissions
    canCreatePacks: auth.isAuthenticated,
    canSavePacks: auth.isAuthenticated,
    canSharePacks: auth.isAuthenticated,
  };
};

export default useAuth;