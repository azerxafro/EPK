import React from 'react';
import { motion } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

const Bio: React.FC = () => {
    const { artist } = useArtist();
    const { bio } = artist.content;
    const { theme } = artist;

  return (
    <section id="story" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        <div className="lg:col-span-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-baseline gap-4 border-b border-white/10 pb-4"
          >
            <span 
                className="text-5xl font-black font-syne"
                style={{ color: theme.primaryColor }}
            >01</span>
            <h2 className="text-6xl md:text-8xl font-black font-syne tracking-tighter">{bio.title}</h2>
          </motion.div>
        </div>

        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 
                className="font-bold tracking-[0.3em] text-xs uppercase"
                style={{ color: theme.primaryColor }}
            >{bio.story.part1.title}</h3>
            {/* Note: This assumes specific structure, could be generalized more */}
            <p className="text-3xl md:text-4xl font-medium leading-tight tracking-tight">
                {/* Dynamically highlight if word exists, otherwise just text */}
               {bio.story.part1.content.replace(bio.story.part1.highlight, '').replace(' .', '.')} 
               {/* This rudimentary replace is risky. Let's just use dangerouslySetInnerHTML for flexibility with spans */}
               <span dangerouslySetInnerHTML={{ 
                   __html: bio.story.part1.content.replace(
                       bio.story.part1.highlight, 
                       `<span style="color: ${theme.primaryColor}">${bio.story.part1.highlight}</span>`
                    ) 
                }} />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="columns-1 md:columns-2 gap-8 text-white/40 leading-relaxed text-base space-y-6 border-t border-white/5 pt-8"
          >
            {bio.story.part2.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <p className="text-white/80 font-medium italic">
              {bio.quote}
            </p>
            <p>
              {bio.story.part3.content}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 pt-8"
          >
            
            <h3 
                className="font-bold tracking-[0.3em] text-xs uppercase"
                style={{ color: theme.primaryColor }}
            >{bio.story.part3.title}</h3>
            
             {/* Part 3 content duplicates above, but keeping structure similar to original mock */}
          </motion.div>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 border-l-4 relative overflow-hidden"
            style={{ borderColor: theme.primaryColor }}
          >
            <div className="absolute top-0 right-0 p-2 text-[8px] font-bold text-white/10 tracking-widest">
                {bio.sidebar.title}
            </div>
            <p className="text-2xl italic font-light mb-4">
              {bio.sidebar.content}
            </p>
            <span 
                className="text-xs font-bold tracking-widest"
                style={{ color: theme.primaryColor }}
            >— {bio.sidebar.author}</span>
          </motion.div>

          <div className="space-y-4">
            <div className="aspect-video bg-white/5 overflow-hidden relative group">
              <img src={bio.sidebar.image} alt="Artist" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold tracking-[0.5em]">{bio.sidebar.imageCaption}</span>
              </div>
            </div>
            <p className="text-[10px] text-white/20 tracking-widest uppercase text-center">{bio.sidebar.imageCaption}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bio;
