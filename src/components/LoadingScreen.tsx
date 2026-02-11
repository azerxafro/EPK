import { motion, AnimatePresence } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

interface LoadingScreenProps {
  isLoading: boolean;
}

/**
 * LoadingScreen - Illuminati eye-triangle splash screen
 * Sleek geometrical spinning animation
 */
const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const { artist } = useArtist();
  const { theme } = artist;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: theme.secondaryColor }}
        >
          {/* Background pulse */}
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[600px] h-[600px] rounded-full blur-[150px]"
            style={{ background: `radial-gradient(circle, ${theme.primaryColor}40, transparent)` }}
          />

          {/* Main container */}
          <div className="relative flex flex-col items-center gap-8">
            
            {/* Spinning Triangle with Eye */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="relative"
            >
              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-20">
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="95" 
                    fill="none" 
                    stroke={theme.primaryColor}
                    strokeWidth="0.5"
                    strokeDasharray="4 8"
                  />
                </svg>
              </motion.div>

              {/* Triangle container */}
              <svg width="200" height="200" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={theme.primaryColor} />
                    <stop offset="100%" stopColor={theme.gradientTo || theme.primaryColor} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Triangle outline */}
                <motion.polygon
                  points="100,15 185,170 15,170"
                  fill="none"
                  stroke="url(#triangleGradient)"
                  strokeWidth="2"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                />

                {/* Inner triangle */}
                <polygon
                  points="100,40 160,150 40,150"
                  fill="none"
                  stroke={theme.primaryColor}
                  strokeWidth="0.5"
                  opacity="0.3"
                />

                {/* The All-Seeing Eye */}
                <g transform="translate(100, 105)">
                  {/* Eye outer */}
                  <motion.ellipse
                    cx="0"
                    cy="0"
                    rx="28"
                    ry="18"
                    fill="none"
                    stroke={theme.primaryColor}
                    strokeWidth="1.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: 'backOut' }}
                  />
                  
                  {/* Iris */}
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="10"
                    fill="none"
                    stroke={theme.primaryColor}
                    strokeWidth="1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  />
                  
                  {/* Pupil - pulsing */}
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="4"
                    fill={theme.primaryColor}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ 
                      scale: { delay: 1, duration: 2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  />

                  {/* Eye shine */}
                  <circle cx="-3" cy="-3" r="1.5" fill="white" opacity="0.6" />
                </g>

                {/* Radiating lines from eye */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                  <motion.line
                    key={angle}
                    x1="100"
                    y1="105"
                    x2={100 + Math.cos((angle * Math.PI) / 180) * 55}
                    y2={105 + Math.sin((angle * Math.PI) / 180) * 55}
                    stroke={theme.primaryColor}
                    strokeWidth="0.3"
                    opacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                  />
                ))}
              </svg>
            </motion.div>

            {/* Artist name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-center"
            >
              <h1 
                className="text-2xl font-black font-syne tracking-[0.5em]"
                style={{ color: theme.primaryColor }}
              >
                {artist.name.toUpperCase().split(' ')[0]}
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 2, duration: 1.5, ease: 'easeOut' }}
                className="h-[1px] mt-4 mx-auto"
                style={{ background: `linear-gradient(90deg, transparent, ${theme.primaryColor}, transparent)` }}
              />
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: 'easeInOut'
                  }}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: theme.primaryColor }}
                />
              ))}
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l border-t opacity-20" style={{ borderColor: theme.primaryColor }} />
          <div className="absolute top-8 right-8 w-16 h-16 border-r border-t opacity-20" style={{ borderColor: theme.primaryColor }} />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b opacity-20" style={{ borderColor: theme.primaryColor }} />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b opacity-20" style={{ borderColor: theme.primaryColor }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
