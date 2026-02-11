import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Youtube, Disc } from 'lucide-react';
import { useArtist } from '../context/ArtistContext';

const Music: React.FC = () => {
  const { artist } = useArtist();
  const { music } = artist.content;
  const { theme } = artist;

  return (
    <section id="sound" className="py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-4"
            >
              <span 
                className="text-5xl font-black font-syne"
                style={{ color: theme.primaryColor }}
              >02</span>
              <h2 className="text-6xl md:text-8xl font-black font-syne tracking-tighter">{music.title}</h2>
            </motion.div>
            <p className="text-white/40 max-w-md">
              {music.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {music.platforms.map((p) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: p.color, color: '#000' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/10 font-bold tracking-widest text-[10px] flex items-center gap-2 transition-colors"
              >
                {p.name} <ExternalLink size={12} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <span 
                className="text-[10px] font-bold tracking-[0.3em] mb-4 block"
                style={{ color: theme.primaryColor }}
              >LATEST ALBUM</span>
              <iframe
                className="rounded-xl"
                src={music.latestAlbumEmbed}
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Album Player"
              ></iframe>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black font-syne flex items-center gap-3">
                <Youtube style={{ color: theme.primaryColor }} /> VISUALS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {music.visuals.map((vid, idx) => (
                    <div key={idx} className="space-y-3">
                    <div className="aspect-video bg-white/5 relative group overflow-hidden">
                        <iframe
                        src={vid.videoUrl}
                        title={vid.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                        />
                    </div>
                    <p className="text-xs font-bold tracking-widest">{vid.title}</p>
                    </div>
                ))}
              </div>
            </div>
            
            {music.featured && music.featured.map((feat, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`p-8 border relative overflow-hidden ${
                        feat.type === 'Case' ? 'border-red-500/20 bg-red-500/5' : 
                        feat.type === 'Hint' ? `border-[${theme.primaryColor}]/20 bg-[${theme.primaryColor}]/5` :
                        'border-white/10 bg-white/5'
                    }`}
                    style={feat.type === 'Hint' ? { borderColor: `${theme.primaryColor}33`, backgroundColor: `${theme.primaryColor}0d` } : {}}
                    >
                    {feat.type === 'Case' && <div className="absolute top-0 right-0 bg-red-500 text-black text-[8px] font-black px-3 py-1 tracking-widest">UNRESOLVED CASE</div>}
                    <h4 className="text-xl font-black font-syne mb-4 flex items-center gap-2">
                        {feat.type === 'Case' && <Disc size={18} className="text-red-500 animate-pulse" />} 
                        {feat.title}
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                        {feat.content}
                    </p>
                </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
