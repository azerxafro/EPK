import { motion } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

/**
 * Gallery Section - Masonry/Bento layout
 * Cinematic hover reveals with era badges
 */
const Gallery = () => {
  const { artist } = useArtist();
  const { gallery } = artist.content;
  const { theme } = artist;

  return (
    <section id="gallery" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[200px] opacity-5 pointer-events-none"
        style={{ backgroundColor: theme.primaryColor }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black font-syne tracking-tight mb-4">{gallery.title}</h2>
          <p className="text-white/50 max-w-lg">Visual archive from the studio, stage, and beyond</p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {gallery.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-xl bg-white/5 ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Era Badge */}
              {img.era && (
                <div 
                  className="absolute top-4 left-4 px-3 py-1 text-[8px] font-bold tracking-widest backdrop-blur-sm rounded-full"
                  style={{ 
                    backgroundColor: `${theme.primaryColor}20`,
                    color: theme.primaryColor,
                    border: `1px solid ${theme.primaryColor}40`
                  }}
                >
                  {img.era}
                </div>
              )}

              {/* Hover Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6"
                style={{ 
                  background: `linear-gradient(to top, ${theme.secondaryColor}ee, ${theme.secondaryColor}80, transparent)` 
                }}
              >
                <span 
                  className="text-[10px] font-bold tracking-[0.3em] mb-2"
                  style={{ color: theme.primaryColor }}
                >PRESS PHOTO</span>
                <h3 className="text-xl md:text-2xl font-black font-syne tracking-tight">{img.title}</h3>
                {img.subtitle && (
                  <p className="text-sm text-white/60 mt-1">{img.subtitle}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Kit Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="https://press.ashwinazer.rocks"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-3 border border-white/10 rounded-full transition-all text-xs font-bold tracking-widest flex items-center gap-2 text-white/60 hover:text-white hover:border-white/30"
          >
            VIEW PRESS KIT
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
