import React, { useState, useEffect } from 'react';
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
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="resume">
              <Resume />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;