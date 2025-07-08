import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticleBackground';
import { CursorEffect } from './components/CursorEffect';
import { LoadingScreen } from './components/LoadingScreen';
import { FloatingElements } from './components/FloatingElements';
import { ScrollProgress } from './components/ScrollProgress';
import { SoundToggle } from './components/SoundToggle';
import { EnhancedCursor } from './components/EnhancedCursor';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <Router>
        {isLoading ? (
          <LoadingScreen onComplete={handleLoadingComplete} />
        ) : (
          <div className="min-h-screen bg-[#262221] text-white relative overflow-hidden">
            <ScrollProgress />
            <ParticleBackground />
            <FloatingElements />
            <CursorEffect />
            <EnhancedCursor />
            <Navigation />
            <SoundToggle />
            
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;