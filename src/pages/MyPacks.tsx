import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/Shared/Button';
import Card from '../components/Shared/Card';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const MyPacksPage = () => {
  const { isLoggedIn, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto flex items-center justify-center py-16">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-4" />
          <p className="text-gray-300">Loading your packs...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card variant="wow" className="text-center">
          <svg className="w-16 h-16 text-wow-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h2 className="text-2xl font-semibold text-white mb-4">Login Required</h2>
          <p className="text-gray-300 mb-6">
            Please login with GitHub to save, manage, and share your loading screen packs.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-400">
              With a GitHub account you can:
            </p>
            <ul className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
              <li className="flex items-center">
                <span className="text-wow-gold mr-2">✓</span>
                Save your loading screen creations
              </li>
              <li className="flex items-center">
                <span className="text-wow-gold mr-2">✓</span>
                Share packs with the community
              </li>
              <li className="flex items-center">
                <span className="text-wow-gold mr-2">✓</span>
                Access your packs from anywhere
              </li>
              <li className="flex items-center">
                <span className="text-wow-gold mr-2">✓</span>
                Browse and favorite community packs
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome back, <span className="wow-gold-text">{user?.name || user?.login}</span>!
          </h1>
          <p className="text-gray-300">Manage your loading screen creations</p>
        </div>
        <Link to="/editor">
          <Button variant="wow-gold" size="lg">
            Create New Pack
          </Button>
        </Link>
      </div>

      {/* User's Packs - Placeholder for now */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="max-w-md mx-auto">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h2 className="text-xl font-semibold text-white mb-2">Login Required</h2>
          <p className="text-gray-400 mb-4">
            Sign in with GitHub to save and manage your loading screen packs
          </p>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors">
            <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            Login with GitHub
          </button>
        </div>
      </div>

      {/* Placeholder for when user is logged in */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-50">
        <div className="bg-slate-800/50 rounded-lg p-6">
          <div className="h-32 bg-gradient-to-br from-green-500 to-blue-600 rounded mb-4"></div>
          <h3 className="text-lg font-semibold text-white mb-2">My First Pack</h3>
          <p className="text-gray-400 text-sm mb-4">Created 2 days ago • 5 zones</p>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
              Edit
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors">
              Download
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPacksPage;