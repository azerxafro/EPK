import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

const Hero: React.FC = () => {
  const { artist } = useArtist();
  const { hero } = artist.content;
  
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
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

  // Splitting artist name for styling if needed, or just display as is
  const nameParts = hero.artistName.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        style={{ y: y2, opacity: useTransform(scrollY, [0, 500], [0.4, 0]) }}
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
        style={{ y: y1, opacity, x: springX, rotate: useTransform(springX, [-20, 20], [-2, 2]) }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[20vw] font-black text-white/5 leading-none font-syne select-none">
          {hero.logoText}
        </h2>
      </motion.div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ x: useTransform(springX, (v) => v * -0.5), y: useTransform(springY, (v) => v * -0.5) }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span 
            className="font-bold tracking-[0.5em] text-xs mb-4 block"
            style={{ color: artist.theme.primaryColor }}
          >
            {hero.subtitle}
          </span>
          <h1 className="text-7xl md:text-9xl font-black font-syne tracking-tighter leading-[0.8] mb-8">
            {firstName} <br />
            <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px white' }}>{lastName}</span>
          </h1>
          <p 
            className="text-xl md:text-2xl font-light tracking-tight max-w-2xl mx-auto text-white/60"
            dangerouslySetInnerHTML={{ __html: hero.description }} 
          />
        </motion.div>
      </div>

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
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
