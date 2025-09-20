import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Gallery from './pages/Gallery';
import MyPacks from './pages/MyPacks';
import About from './pages/About';
import OAuthCallback from './components/Auth/OAuthCallback';

function App() {
  return (
    <AuthProvider>
      <Router basename="/wow-wallpaper">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/my-packs" element={<MyPacks />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth/callback" element={<OAuthCallback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
