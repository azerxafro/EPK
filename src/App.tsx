import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';
import { ArtistProvider, useArtist } from './context/ArtistContext';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Music from './components/Music';
import VideoSection from './components/VideoSection';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import SEO from './components/SEO';

const MainContent: React.FC = () => {
  const { artist } = useArtist();
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Minimum loading time for splash effect + wait for fonts/images
    const minLoadTime = 3000;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);
      setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00f2ff] selection:text-black"
           style={{ backgroundColor: artist.theme.secondaryColor }}>
      <SEO />
      <CustomCursor />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{ scaleX, backgroundColor: artist.theme.primaryColor }}
      />

      <Navigation />

      <main>
        <Hero />
        <Music />
        <VideoSection />
        <Bio />
        <Gallery />
        <Contact />
      </main>

      <footer className="py-12 px-6 border-t border-white/10 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} {artist.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
      </footer>
      <Analytics />
    </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ArtistProvider>
        <MainContent />
      </ArtistProvider>
    </HelmetProvider>
  );
};

export default App;
