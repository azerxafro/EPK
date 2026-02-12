import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

const Bio: React.FC = () => {
  const { artist } = useArtist();
  const { theme } = artist;
  const { bio } = artist.content;
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Split bio into chunks for layout
  const bioParagraphs = bio.fullBio.split('\n\n');
  const part1 = bioParagraphs.slice(0, 2).join('\n\n');
  const part2 = bioParagraphs.slice(2).join('\n\n');

  return (
    <section id="bio" className="py-12 px-4 md:py-32 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          
          {/* Sticky Sidebar (Desktop) / Header (Mobile) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span 
                  className="text-xs font-bold tracking-[0.5em] mb-4 block"
                  style={{ color: theme.primaryColor }}
                >
                  THE STORY
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-syne leading-tight mb-8 md:mb-16 relative z-10 break-words hyphens-auto">
                  {bio.headline}
                </h2>
                
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-8 max-w-sm mx-auto lg:max-w-none">
                  <motion.img
                    style={{ y }}
                    src={bio.images[0]}
                    alt="Artist Portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Stats/Badges */}
                  <div className="absolute bottom-6 left-6 grid gap-2">
                    {bio.stats?.map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-2xl font-black font-syne">{stat.value}</span>
                        <span className="text-[10px] tracking-widest opacity-60">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-7 space-y-8 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p 
                className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/90"
                style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}
              >
                {bio.shortBio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg prose-invert text-white/60 font-light"
            >
              {part1.split('\n\n').map((para, i) => (
                <p key={i} className="mb-6">{para}</p>
              ))}
            </motion.div>

            {/* Quote Break */}
            {bio.pullQuote && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="py-12 border-y border-white/10 my-12"
              >
                <div className="text-3xl md:text-5xl font-black font-syne text-center leading-tight">
                  "{bio.pullQuote}"
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert text-white/60 font-light"
            >
              {part2.split('\n\n').map((para, i) => (
                <p key={i} className="mb-6">{para}</p>
              ))}
            </motion.div>
            
            {/* Signature / Ending */}
            <div className="pt-12 flex justify-end">
              <div className="text-right">
                <span className="block text-4xl font-writing text-white/80" style={{ fontFamily: 'cursive' }}>
                  {artist.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
