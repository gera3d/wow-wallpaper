import { Link } from 'react-router-dom';
import Button from '../components/Shared/Button';
import Card from '../components/Shared/Card';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          Create Epic <span className="wow-gold-text font-cinzel">Loading Screens</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Design custom loading screens for World of Warcraft private servers. 
          Upload your art, customize zones, and share with the community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/editor">
            <Button variant="wow-gold" size="lg">
              Start Creating
            </Button>
          </Link>
          <Link to="/gallery">
            <Button variant="secondary" size="lg">
              Browse Gallery
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        <Card variant="wow" className="text-center">
          <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Custom Artwork</h3>
          <p className="text-gray-400">Upload your own images or choose from our curated template library.</p>
        </Card>

        <Card variant="wow" className="text-center">
          <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Live Preview</h3>
          <p className="text-gray-400">See exactly how your loading screens will look in-game before exporting.</p>
        </Card>

        <Card variant="wow" className="text-center">
          <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Easy Export</h3>
          <p className="text-gray-400">Download ready-to-install MPQ files with complete installation guides.</p>
        </Card>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-800/50 rounded-lg p-8 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-1">1000+</div>
            <div className="text-gray-400">Packs Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
            <div className="text-gray-400">Zone Templates</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-1">500+</div>
            <div className="text-gray-400">Community Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
            <div className="text-gray-400">Free Access</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;