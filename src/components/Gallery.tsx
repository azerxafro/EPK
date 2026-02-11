import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    {
      url: '/images/hero-bg.webp',
      span: 'md:col-span-2 md:row-span-2',
      title: 'THE LOOK'
    },
    {
      url: '/images/sonic-frequencies.webp',
      span: 'md:col-span-1 md:row-span-1',
      title: 'SONIC FREQUENCIES'
    },
    {
      url: '/images/visual-narrative.webp',
      span: 'md:col-span-1 md:row-span-1',
      title: 'VISUAL NARRATIVE'
    },
    {
      url: '/images/lucid-moments.webp',
      span: 'md:col-span-2 md:row-span-1',
      title: 'LUCID MOMENTS'
    }
  ];

  return (
    <section id="look" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-baseline gap-4 mb-16"
        >
          <span className="text-5xl font-black font-syne text-[#00f2ff]">03</span>
          <h2 className="text-6xl md:text-8xl font-black font-syne tracking-tighter">THE LOOK.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`relative group overflow-hidden bg-white/5 ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-[#00f2ff] text-[10px] font-bold tracking-[0.3em] mb-2">PRESS PHOTO</span>
                <h3 className="text-2xl font-black font-syne tracking-tight">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border border-white/20 hover:border-[#00f2ff] hover:text-[#00f2ff] transition-all font-bold tracking-widest text-xs"
          >
            DOWNLOAD PRESS KIT (ZIP)
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
