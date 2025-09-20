import { Link } from 'react-router-dom';
import GitHubLogin from '../Auth/GitHubLogin';

const Header = () => {
  return (
    <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            <span className="wow-gold-text font-cinzel">WoW</span> Loading Creator
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/editor" className="text-gray-300 hover:text-white transition-colors">
              Editor
            </Link>
            <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
              Gallery
            </Link>
            <Link to="/my-packs" className="text-gray-300 hover:text-white transition-colors">
              My Packs
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </nav>

          {/* GitHub Authentication */}
          <GitHubLogin />
        </div>
      </div>
    </header>
  );
};

export default Header;