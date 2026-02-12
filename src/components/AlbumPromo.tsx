import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ExternalLink, Sparkles } from 'lucide-react';
import { useArtist } from '../context/ArtistContext';

const AlbumPromo: React.FC = () => {
  const { artist } = useArtist();
  const { theme } = artist;
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-[80vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/images/album-promo.mp4"
          muted
          loop
          playsInline
          autoPlay
          poster="/images/hero-bg.webp" // Fallback
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{ background: `linear-gradient(45deg, ${theme.primaryColor}, transparent)` }} 
        />
      </motion.div>

      {/* Content Overlay */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: theme.primaryColor }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: theme.primaryColor }}></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-white">COMING 2026</span>
        </motion.div>

        <h2 className="text-5xl md:text-8xl font-black font-syne tracking-tighter leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          LEGENDS<br/>& LOVERS
        </h2>

        <p className="text-lg md:text-2xl font-light text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto">
          The new studio album. A journey through time, sound, and soul.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href={artist.content.music.platforms[0]?.href || '#'} // Usually Spotify
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-black tracking-widest text-sm text-black"
            style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})` }}
          >
            <Sparkles size={18} fill="#000" />
            PRE-SAVE NOW
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] font-bold tracking-widest">WATCH TRAILER</span>
        <div className="w-[1px] h-12 bg-white/20" />
      </div>
    </section>
  );
};

export default AlbumPromo;
