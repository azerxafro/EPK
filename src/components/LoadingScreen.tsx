import { motion, AnimatePresence } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

interface LoadingScreenProps {
  isLoading: boolean;
}

/**
 * LoadingScreen - Minimal high-performance splash
 * Optimized for mobile: CSS-only animations where possible, no heavy SVGs
 */
const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const { artist } = useArtist();
  const { theme } = artist;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: theme.secondaryColor }}
        >
          {/* Minimal Pulsing Ring */}
          <div className="relative w-16 h-16 mb-8">
            <div 
              className="absolute inset-0 rounded-full border-2 opacity-20 animate-ping"
              style={{ borderColor: theme.primaryColor }}
            />
            <div 
              className="absolute inset-0 rounded-full border-t-2 animate-spin"
              style={{ borderColor: theme.primaryColor }}
            />
          </div>

          {/* Artist Name Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 
              className="text-xl font-black font-syne tracking-[0.5em]"
              style={{ color: theme.primaryColor }}
            >
              {artist.name.toUpperCase().split(' ')[0]}
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
