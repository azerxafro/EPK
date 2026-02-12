import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { useArtist } from '../context/ArtistContext';

/**
 * Music Section - Premium streaming-focused design
 * Featured album hero + dual discography embeds + upcoming release
 */
const Music = () => {
  const { artist } = useArtist();
  const { music } = artist.content;
  const { theme } = artist;

  return (
    <section id="music" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background gradient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-20 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-6xl font-black font-syne tracking-tight mb-2 md:mb-4">
              {music.title}
            </h2>
            <p className="text-white/50 max-w-lg text-sm md:text-base">
              {music.description}
            </p>
          </div>

          {/* Platform Links */}
          <div className="flex flex-wrap gap-2">
            {music.platforms.slice(0, 3).map((p) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full border border-white/10 font-bold tracking-widest text-[10px] flex items-center gap-2 transition-all duration-300 hover:bg-white/5"
              >
                {p.name} <ExternalLink size={10} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Featured Album - Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <div className="relative p-1 rounded-2xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${theme.primaryColor}40, ${theme.gradientTo || theme.primaryColor}40)` }}>
            <div className="bg-black/90 rounded-xl p-4 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <div>
                  <span 
                    className="text-[10px] font-bold tracking-[0.3em] mb-2 block"
                    style={{ color: theme.primaryColor }}
                  >LATEST ALBUM</span>
                  <h3 className="text-2xl md:text-4xl font-black font-syne tracking-tight">{music.featuredAlbum.title}</h3>
                  <p className="text-white/60 text-xs md:text-sm mt-1">{music.featuredAlbum.subtitle}</p>
                </div>
                {music.upcomingRelease && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5"
                  >
                    <Sparkles size={14} style={{ color: theme.primaryColor }} />
                    <span className="text-[10px] font-bold tracking-widest">
                      {music.upcomingRelease.title} · {music.upcomingRelease.year}
                    </span>
                  </motion.div>
                )}
              </div>
              <iframe
                className="rounded-xl w-full"
                src={music.featuredAlbum.url}
                height="380" // Fixed height for iframe looks better than responsive height usually, or use aspect-ratio wrapper
                style={{ height: '380px' }}
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={music.featuredAlbum.title}
              />
            </div>
          </div>
        </motion.div>

        {/* Dual Discography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
          {/* Primary Artist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-1 h-8 rounded-full"
                style={{ backgroundColor: theme.primaryColor }}
              />
              <div>
                <h4 className="text-lg md:text-xl font-black font-syne">{music.discographyEmbed.title}</h4>
                <p className="text-white/60 text-xs">{music.discographyEmbed.subtitle}</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 md:p-4 border border-white/5">
              <iframe
                className="rounded-lg w-full"
                src={music.discographyEmbed.url}
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={music.discographyEmbed.title}
              />
            </div>
          </motion.div>

          {/* Alternate Persona */}
          {music.alternateEmbed && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-1 h-8 rounded-full"
                  style={{ backgroundColor: theme.gradientTo || theme.primaryColor }}
                />
                <div>
                  <h4 className="text-lg md:text-xl font-black font-syne">{music.alternateEmbed.title}</h4>
                  <p className="text-white/60 text-xs">{music.alternateEmbed.subtitle}</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-3 md:p-4 border border-white/5">
                <iframe
                  className="rounded-lg w-full"
                  src={music.alternateEmbed.url}
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={music.alternateEmbed.title}
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Upcoming Release + Monadelta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Release */}
          {music.upcomingRelease && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl border backdrop-blur-sm"
              style={{ 
                borderColor: `${theme.gradientTo || theme.primaryColor}30`,
                background: `linear-gradient(135deg, ${theme.gradientTo || theme.primaryColor}10, transparent)`
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} style={{ color: theme.gradientTo || theme.primaryColor }} />
                <span className="text-xs font-bold tracking-widest" style={{ color: theme.gradientTo || theme.primaryColor }}>
                  COMING {music.upcomingRelease.year}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black font-syne mb-3">
                {music.upcomingRelease.title}
              </h3>
              <p className="text-white/50 text-sm md:text-base">
                {music.upcomingRelease.description}
              </p>
            </motion.div>
          )}

          {/* Monadelta */}
          {music.featured?.find(f => f.type === 'Label') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div 
                className="text-xs font-bold tracking-widest mb-4"
                style={{ color: theme.primaryColor }}
              >
                THE LABEL
              </div>
              <h3 className="text-2xl md:text-3xl font-black font-syne mb-3">
                {music.featured.find(f => f.type === 'Label')?.title}
              </h3>
              <p className="text-white/50 mb-4 text-sm md:text-base">
                {music.featured.find(f => f.type === 'Label')?.content}
              </p>
              {music.featured.find(f => f.type === 'Label')?.link && (
                <a
                  href={music.featured.find(f => f.type === 'Label')?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})`,
                    color: '#000'
                  }}
                >
                  {music.featured.find(f => f.type === 'Label')?.linkText || 'LEARN MORE'}
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Music;
