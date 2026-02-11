import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 25;
    const moveY = (clientY - window.innerHeight / 2) / 25;
    setMousePos({ x: moveX, y: moveY });
  };

  const springX = useSpring(mousePos.x, { stiffness: 45, damping: 20, mass: 0.8 });
  const springY = useSpring(mousePos.y, { stiffness: 45, damping: 20, mass: 0.8 });

  const y1 = useTransform(scrollY, [0, 500], [0, 180]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);
  const opacity = useTransform(scrollY, [0, 320], [1, 0]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        style={{ y: y2, opacity: useTransform(scrollY, [0, 500], [0.45, 0]) }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero-bg.webp"
          alt="Lucid ASH"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
      </motion.div>

      <motion.div
        style={{ y: y1, opacity, x: springX, rotate: useTransform(springX, [-20, 20], [-2, 2]) }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[20vw] font-black text-white/5 leading-none font-syne select-none">
          LUCID
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 56, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.1 }}
        style={{ x: useTransform(springX, (v) => v * -0.5), y: useTransform(springY, (v) => v * -0.5) }}
        className="relative z-10 text-center"
      >
        <span className="text-[#00f2ff] font-bold tracking-[0.5em] text-xs mb-4 block">
          ARTIST & PRODUCER
        </span>
        <h1 className="text-7xl md:text-9xl font-black font-syne tracking-tighter leading-[0.8] mb-8">
          ASHWIN <br />
          <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px white' }}>AZER</span>
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-tight max-w-2xl mx-auto text-white/60">
          Crafting sonic landscapes where reality meets the <span className="text-white italic">lucid dream</span>.
        </p>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <motion.div
          className="w-[1px] h-24 bg-gradient-to-b from-[#00f2ff] to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        />
        <span className="text-[10px] font-bold tracking-widest rotate-90 origin-left translate-x-1">SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;
