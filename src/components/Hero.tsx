import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { useArtist } from '../context/ArtistContext';

const Hero: React.FC = () => {
  const { artist } = useArtist();
  const { hero } = artist.content;
  
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 25;
    const moveY = (clientY - window.innerHeight / 2) / 25;
    setMousePos({ x: moveX, y: moveY });
  };

  const springX = useSpring(mousePos.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePos.y, { stiffness: 50, damping: 20 });

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const rotate = useTransform(springX, [-20, 20], [-2, 2]);
  const moveX = useTransform(springX, (v) => v * -0.5);
  const moveY = useTransform(springY, (v) => v * -0.5);

  // Splitting artist name for styling if needed, or just display as is
  const nameParts = hero.artistName.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden px-4 md:px-6"
    >
      <motion.div
        style={{ y: isMobile ? 0 : y2, opacity: useTransform(scrollY, [0, 500], [0.4, 0]) }}
        className="absolute inset-0 z-0"
      >
        <img
          src={hero.bgImage}
          alt={artist.name}
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
      </motion.div>

      <motion.div
        style={{ 
          y: isMobile ? 0 : y1, 
          opacity, 
          x: isMobile ? 0 : springX, 
          rotate: isMobile ? 0 : rotate 
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[20vw] font-black text-white/5 leading-none font-syne select-none">
          {hero.logoText}
        </h2>
      </motion.div>

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            x: isMobile ? 0 : moveX, 
            y: isMobile ? 0 : moveY 
          }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span 
            className="font-bold tracking-[0.5em] text-xs mb-4 block"
            style={{ color: artist.theme.primaryColor }}
          >
            {hero.subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black font-syne tracking-tighter leading-[0.9] mb-6 md:mb-8">
            {firstName} <br />
            <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px white' }}>{lastName}</span>
          </h1>
          <p 
            className="text-base md:text-xl lg:text-2xl font-light tracking-tight max-w-2xl mx-auto text-white/60 mb-8 md:mb-10 px-4"
            dangerouslySetInnerHTML={{ __html: hero.description }} 
          />

          {/* CTA Buttons - Like Travis Scott / Drake */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            {hero.ctaLink && (
              <motion.a
                href={hero.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black tracking-widest text-sm text-black w-full sm:w-auto"
                style={{ background: `linear-gradient(135deg, ${artist.theme.primaryColor}, ${artist.theme.gradientTo || artist.theme.primaryColor})` }}
              >
                <Play size={18} fill="#000" />
                {hero.ctaText || 'LISTEN NOW'}
              </motion.a>
            )}
            
            {hero.tagline && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-6 py-3 rounded-full border border-white/20 font-bold tracking-widest text-xs flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: artist.theme.primaryColor }}
                />
                {hero.tagline}
              </motion.div>
            )}
          </div>

          {/* Streaming Platforms Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10 px-4"
          >
            {artist.content.music.platforms.slice(0, 4).map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors text-[10px] font-bold tracking-[0.3em] flex items-center gap-1"
              >
                {p.name} <ExternalLink size={10} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ y: isMobile ? 0 : y2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-4 hidden md:flex"
      >
        <div 
          className="w-[1px] h-24 bg-gradient-to-b from-[#00f2ff] to-transparent"
          style={{ backgroundImage: `linear-gradient(to bottom, ${artist.theme.primaryColor}, transparent)` }}
         />
        <span className="text-[10px] font-bold tracking-widest rotate-90 origin-left translate-x-1">SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;
