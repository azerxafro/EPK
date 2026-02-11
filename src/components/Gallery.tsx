import React from 'react';
import { motion } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

const Gallery: React.FC = () => {
  const { artist } = useArtist();
  const { gallery } = artist.content;
  const { theme } = artist;

  return (
    <section id="look" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-baseline gap-4 mb-16"
        >
          <span 
            className="text-5xl font-black font-syne"
            style={{ color: theme.primaryColor }}
          >03</span>
          <h2 className="text-6xl md:text-8xl font-black font-syne tracking-tighter">{gallery.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {gallery.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden bg-white/5 ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span 
                    className="text-[10px] font-bold tracking-[0.3em] mb-2"
                    style={{ color: theme.primaryColor }}
                >PRESS PHOTO</span>
                <h3 className="text-2xl font-black font-syne tracking-tight">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border border-white/20 transition-all font-bold tracking-widest text-xs"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.primaryColor;
                e.currentTarget.style.color = theme.primaryColor;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.color = 'white';
            }}
          >
            DOWNLOAD PRESS KIT (ZIP)
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
