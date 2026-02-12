import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useArtist } from '../context/ArtistContext';

const Gallery: React.FC = () => {
  const { artist } = useArtist();
  const { gallery } = artist.content;
  const { theme } = artist;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black font-syne tracking-tight mb-4">GALLERY</h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: theme.primaryColor }} />
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {gallery.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${
                i % 3 === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              } ${i % 5 === 0 ? 'row-span-2' : ''}`}
              onClick={() => setSelectedImage(img.url)}
            >
              <img
                src={img.url}
                alt={img.caption || `Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white" size={32} />
              </div>
              
              {/* Caption/Era Badge */}
              {img.era && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase">
                    {img.era}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
