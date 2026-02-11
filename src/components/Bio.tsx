import React from 'react';
import { motion } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

/**
 * Bio Section - Cinematic Chapter-Based Narrative
 * Full-width dramatic storytelling with parallax and reveals
 * Inspired by Netflix documentary intros
 */
const Bio: React.FC = () => {
  const { artist } = useArtist();
  const { bio } = artist.content;
  const { theme } = artist;

  const chapters = [
    { 
      number: 'I', 
      title: bio.story.part1.title,
      content: bio.story.part1.content,
      highlight: bio.story.part1.highlight,
      accent: theme.primaryColor 
    },
    { 
      number: 'II', 
      title: 'THE DESCENT',
      content: bio.story.part2.content.join(' '),
      accent: '#FF3333' 
    },
    { 
      number: 'III', 
      title: bio.story.part3.title,
      content: bio.story.part3.content,
      accent: theme.gradientTo || theme.primaryColor 
    }
  ];

  return (
    <section id="story" className="relative overflow-hidden">
      
      {/* Full-width Hero Title */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={bio.sidebar.image}
            alt="Origin"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{ background: `radial-gradient(ellipse at center, ${theme.primaryColor}20, transparent 70%)` }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            whileInView={{ opacity: 1, letterSpacing: '1em' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs font-bold tracking-[1em] mb-6 block"
            style={{ color: theme.primaryColor }}
          >
            ORIGIN
          </motion.span>
          <h2 className="text-7xl md:text-[12rem] font-black font-syne tracking-tighter leading-[0.8]">
            {bio.title}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-32 h-[2px] mx-auto mt-8"
            style={{ background: `linear-gradient(90deg, transparent, ${theme.primaryColor}, transparent)` }}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-12"
            style={{ background: `linear-gradient(to bottom, ${theme.primaryColor}, transparent)` }}
          />
        </motion.div>
      </div>

      {/* Chapters */}
      <div className="relative">
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            {/* Chapter divider */}
            {index > 0 && (
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}
            
            <div className="min-h-screen flex items-center py-32 px-6 relative">
              {/* Large chapter number background */}
              <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[40vw] font-black font-syne leading-none pointer-events-none select-none opacity-[0.02]"
                style={{ color: chapter.accent }}
              >
                {chapter.number}
              </div>

              {/* Accent glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
                style={{ background: `radial-gradient(circle, ${chapter.accent}15, transparent)` }}
              />

              <div className="max-w-5xl mx-auto relative z-10">
                {/* Chapter header */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <span 
                      className="text-6xl md:text-8xl font-black font-syne"
                      style={{ color: chapter.accent, opacity: 0.3 }}
                    >
                      {chapter.number}
                    </span>
                    <div 
                      className="h-[2px] flex-1 max-w-32"
                      style={{ backgroundColor: chapter.accent }}
                    />
                  </div>
                  <h3 
                    className="text-3xl md:text-5xl font-black font-syne tracking-tight"
                    style={{ color: chapter.accent }}
                  >
                    {chapter.title}
                  </h3>
                </motion.div>

                {/* Chapter content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {chapter.highlight ? (
                    <p className="text-2xl md:text-4xl font-medium leading-relaxed tracking-tight">
                      <span dangerouslySetInnerHTML={{ 
                        __html: chapter.content.replace(
                          chapter.highlight, 
                          `<span style="color: ${chapter.accent}; font-weight: 900; text-decoration: underline; text-decoration-color: ${chapter.accent}40">${chapter.highlight}</span>`
                        ) 
                      }} />
                    </p>
                  ) : (
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl">
                      {chapter.content}
                    </p>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* The Quote - Full Width Dramatic */}
      <div className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${theme.primaryColor}08, transparent, ${theme.gradientTo || theme.primaryColor}08)` }}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 text-center relative"
        >
          {/* Giant quote mark */}
          <div 
            className="absolute -top-20 left-1/2 -translate-x-1/2 text-[300px] font-black opacity-5 leading-none select-none pointer-events-none"
            style={{ color: theme.primaryColor }}
          >
            "
          </div>
          
          <blockquote className="relative z-10">
            <p className="text-3xl md:text-5xl font-medium italic leading-snug tracking-tight mb-8">
              {bio.quote}
            </p>
            {bio.quoteAttribution && (
              <motion.cite 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="block text-sm font-bold tracking-[0.3em] not-italic"
                style={{ color: theme.primaryColor }}
              >
                {bio.quoteAttribution}
              </motion.cite>
            )}
          </blockquote>
        </motion.div>
      </div>

      {/* Final Image + Multimedia Hint */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-[50vh] overflow-hidden"
        >
          <img 
            src={bio.sidebar.image}
            alt={bio.sidebar.imageCaption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.5em] mb-4"
              style={{ color: theme.primaryColor }}
            >
              {bio.sidebar.imageCaption}
            </motion.p>
            
            {bio.multimediaHint && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white/60 italic max-w-2xl mx-auto"
              >
                {bio.multimediaHint}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Sidebar Card - Floating */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:block z-40 max-w-xs"
      >
        <div 
          className="p-6 rounded-xl backdrop-blur-xl border"
          style={{ 
            background: `linear-gradient(135deg, ${theme.secondaryColor}ee, ${theme.secondaryColor}cc)`,
            borderColor: `${theme.primaryColor}30`
          }}
        >
          <div 
            className="text-[8px] font-bold tracking-[0.3em] mb-3"
            style={{ color: theme.primaryColor }}
          >
            {bio.sidebar.title}
          </div>
          <p className="text-sm italic text-white/80 leading-relaxed mb-4">
            {bio.sidebar.content}
          </p>
          <span 
            className="text-[10px] font-bold tracking-widest"
            style={{ color: theme.primaryColor }}
          >
            — {bio.sidebar.author}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Bio;
