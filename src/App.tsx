import React, { lazy, Suspense } from 'react';
import { motion, MotionConfig, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';

const CustomCursor = lazy(() => import('./components/CustomCursor'));
const Bio = lazy(() => import('./components/Bio'));
const Music = lazy(() => import('./components/Music'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));

const SectionFallback: React.FC = () => (
  <div className="py-24 px-6">
    <div className="max-w-7xl mx-auto h-40 rounded bg-white/[0.03] animate-pulse" />
  </div>
);

const App: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 220 : 120,
    damping: shouldReduceMotion ? 40 : 28,
    restDelta: 0.001
  });

  return (
    <MotionConfig transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}>
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00f2ff] selection:text-black">
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#00f2ff] origin-left z-50"
          style={{ scaleX }}
        />

        <Navigation />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.9 }}
        >
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <Bio />
            <Music />
            <Gallery />
            <Contact />
          </Suspense>
        </motion.main>

        <footer className="py-12 px-6 border-t border-white/10 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} LUCID ASH. ALL RIGHTS RESERVED.</p>
        </footer>
        <Analytics />
      </div>
    </MotionConfig>
  );
};

export default App;
