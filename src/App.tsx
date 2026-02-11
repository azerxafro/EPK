import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';
import { ArtistProvider, useArtist } from './context/ArtistContext';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import SEO from './components/SEO';

const MainContent: React.FC = () => {
  const { artist } = useArtist();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
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
        <Bio />
        <Music />
        <Gallery />
        <Contact />
      </main>

      <footer className="py-12 px-6 border-t border-white/10 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} {artist.name.toUpperCase()}. ALL RIGHTS RESERVED.</p>
      </footer>
      <Analytics />
    </div>
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
