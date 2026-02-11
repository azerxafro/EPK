import React from 'react';
import { motion } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

/**
 * Bio Section - The dramatic story
 * Asymmetric layout with cinematic narrative
 */
const Bio: React.FC = () => {
  const { artist } = useArtist();
  const { bio } = artist.content;
  const { theme } = artist;

  return (
    <section id="story" className="py-32 px-6 max-w-7xl mx-auto relative">
      {/* Background decorative element */}
      <div 
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[200px] opacity-5 pointer-events-none"
        style={{ backgroundColor: theme.primaryColor }}
      />

      {/* Section Header */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border-b border-white/10 pb-6"
        >
          <h2 className="text-6xl md:text-8xl font-black font-syne tracking-tighter">{bio.title}</h2>
        </motion.div>
      </div>

      {/* Asymmetric Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Main Story Column */}
        <div className="lg:col-span-7 space-y-16">
          
          {/* Part 1 - The Erasure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-[2px]"
                style={{ backgroundColor: theme.primaryColor }}
              />
              <h3 
                className="font-bold tracking-[0.3em] text-xs uppercase"
                style={{ color: theme.primaryColor }}
              >{bio.story.part1.title}</h3>
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-snug tracking-tight">
              <span dangerouslySetInnerHTML={{ 
                __html: bio.story.part1.content.replace(
                  bio.story.part1.highlight, 
                  `<span style="color: ${theme.primaryColor}; font-weight: 800">${bio.story.part1.highlight}</span>`
                ) 
              }} />
            </p>
          </motion.div>

          {/* Part 2 - The Descent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-l-2 border-white/10 pl-8 space-y-6"
          >
            {bio.story.part2.content.map((paragraph, index) => (
              <p key={index} className="text-white/50 leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* The Quote - Prominent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative py-8"
          >
            <div 
              className="absolute left-0 top-0 text-[120px] font-black opacity-10 leading-none select-none"
              style={{ color: theme.primaryColor }}
            >"</div>
            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-white/90 pl-8">
                {bio.quote}
              </p>
              {bio.quoteAttribution && (
                <cite 
                  className="block mt-4 pl-8 text-sm font-bold tracking-widest not-italic"
                  style={{ color: theme.primaryColor }}
                >
                  {bio.quoteAttribution}
                </cite>
              )}
            </blockquote>
          </motion.div>

          {/* Part 3 - The Rebirth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})` }}
              />
              <h3 
                className="font-bold tracking-[0.3em] text-xs uppercase bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})` }}
              >{bio.story.part3.title}</h3>
            </div>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              {bio.story.part3.content}
            </p>
          </motion.div>

          {/* Multimedia Hint - Subtle */}
          {bio.multimediaHint && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm text-white/60 italic border-t border-white/5 pt-8"
            >
              {bio.multimediaHint}
            </motion.p>
          )}
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
          
          {/* Featured Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl"
          >
            <div 
              className="absolute inset-0 opacity-20"
              style={{ background: `linear-gradient(135deg, ${theme.primaryColor}20, transparent)` }}
            />
            <div className="relative bg-white/5 backdrop-blur-sm p-8 border-l-4" style={{ borderColor: theme.primaryColor }}>
              <div className="absolute top-4 right-4 text-[8px] font-bold text-white/50 tracking-widest">
                {bio.sidebar.title}
              </div>
              <p className="text-xl md:text-2xl italic font-light mb-6 leading-relaxed">
                {bio.sidebar.content}
              </p>
              <span 
                className="text-xs font-bold tracking-widest"
                style={{ color: theme.primaryColor }}
              >— {bio.sidebar.author}</span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <div className="aspect-[4/3] bg-white/5 overflow-hidden relative group rounded-xl">
              <img 
                src={bio.sidebar.image} 
                alt="Artist" 
                loading="lazy" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6"
                style={{ background: `linear-gradient(to top, ${theme.secondaryColor}, transparent)` }}
              >
                <span 
                  className="text-[10px] font-bold tracking-[0.5em]"
                  style={{ color: theme.primaryColor }}
                >{bio.sidebar.imageCaption}</span>
              </div>
            </div>
            <p className="text-[10px] text-white/60 tracking-widest uppercase text-center">
              {bio.sidebar.imageCaption}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Bio;
