import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import HomePage from './pages/Home';
import EditorPage from './pages/Editor';
import GalleryPage from './pages/Gallery';
import MyPacksPage from './pages/MyPacks';
import AboutPage from './pages/About';

function App() {
  return (
    <AuthProvider>
      <Router basename="/wow-wallpaper">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/my-packs" element={<MyPacksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth/callback" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
