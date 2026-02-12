import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useArtist } from '../context/ArtistContext';
import { YouTubeVideo } from '../types/content';

/**
 * VideoSection - Premium horizontal scrolling video gallery
 * Inspired by Lil Uzi Vert and Ariana Grande websites
 * Features category tabs, featured video, and lightbox playback
 */
const VideoSection = () => {
  const { artist } = useArtist();
  const { music } = artist.content;
  const { theme } = artist;
  
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const videos = music.youtubeVideos || [];
  const featuredVideos = videos.filter(v => v.featured);
  
  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'music-video', label: 'Music Videos' },
    { id: 'lyric-video', label: 'Lyric Videos' },
    { id: 'audio', label: 'Audio' }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getThumbnail = (video: YouTubeVideo) => {
    if (video.thumbnailUrl) return video.thumbnailUrl;
    
    // Audio and older videos often don't have maxresdefault
    if (video.category === 'audio' || video.category === 'lyric-video') {
      return `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
    }

    // Default to maxres for music videos, fallback handled by onError
    return `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  };

  return (
    <section id="videos" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute top-0 left-0 w-full h-1/2 opacity-10 pointer-events-none"
        style={{ 
          background: `radial-gradient(ellipse at top, ${theme.gradientTo || theme.primaryColor}30, transparent)` 
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-6xl font-black font-syne tracking-tight mb-2 md:mb-4">
              VIDEOS
            </h2>
            <p className="text-white/50 max-w-md text-sm md:text-base">
              Music videos, visuals, and exclusive content from the archive
            </p>
          </div>

          {music.youtubeChannel && (
            <a
              href={music.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest hover:opacity-80 transition-opacity"
              style={{ color: theme.primaryColor }}
            >
              VIEW ALL ON YOUTUBE <ExternalLink size={14} />
            </a>
          )}
        </motion.div>

        {/* Featured Video - Hero */}
        {featuredVideos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div 
              className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedVideo(featuredVideos[0])}
            >
              <img
                src={getThumbnail(featuredVideos[0])}
                alt={featuredVideos[0].title}
                width={1280}
                height={720}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('maxresdefault.jpg')) {
                    target.src = target.src.replace('maxresdefault.jpg', 'hqdefault.jpg');
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-sm"
                  style={{ 
                    background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})` 
                  }}
                >
                  <Play className="text-black ml-1 w-8 h-8 md:w-12 md:h-12" fill="#000" />
                </motion.div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-10 bg-gradient-to-t from-black/80 to-transparent">
                <span 
                  className="text-[10px] md:text-xs font-bold tracking-widest mb-1 md:mb-2 block"
                  style={{ color: theme.primaryColor }}
                >
                  FEATURED VIDEO
                </span>
                <h3 className="text-xl md:text-4xl font-black font-syne truncate md:whitespace-normal">
                  {featuredVideos[0].title}
                </h3>
                {featuredVideos[0].description && (
                  <p className="text-white/60 mt-1 md:mt-2 max-w-xl text-xs md:text-base hidden md:block">
                    {featuredVideos[0].description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-2 mb-6 md:mb-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 md:px-5 md:py-2.5 text-[10px] md:text-xs font-bold tracking-widest rounded-full transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'text-black' 
                  : 'text-white/60 hover:text-white border border-white/10 hover:border-white/30'
              }`}
              style={activeCategory === cat.id ? { 
                background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})` 
              } : {}}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Horizontal Scroll Gallery */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/80 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/80 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredVideos.map((video, idx) => (
              <motion.div
                key={`${video.id}-${idx}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex-shrink-0 w-64 md:w-80 snap-start cursor-pointer group"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                  <img
                    src={getThumbnail(video)}
                    alt={video.title}
                    width={480}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('maxresdefault.jpg')) {
                        target.src = target.src.replace('maxresdefault.jpg', 'hqdefault.jpg');
                      } else if (!target.src.includes('hqdefault.jpg')) {
                        // Fallback to a generic image if all else fails
                        // target.src = '/images/hero-bg.webp';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                      style={{ background: theme.primaryColor }}
                    >
                      <Play size={20} fill="#000" className="text-black ml-0.5" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 md:top-3 md:left-3">
                    <span className="px-2 py-1 text-[8px] md:text-[10px] font-bold tracking-wider bg-black/60 backdrop-blur-sm rounded uppercase">
                      {video.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-bold text-sm truncate group-hover:text-white transition-colors">
                  {video.title}
                </h4>
                {video.description && (
                  <p className="text-xs text-white/60 truncate mt-1">
                    {video.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Video Embed */}
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={selectedVideo.isPlaylist 
                    ? `https://www.youtube.com/embed/videoseries?list=${selectedVideo.id.replace('playlist-', '')}&autoplay=1&rel=0`
                    : `https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`
                  }
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video Info */}
              <div className="mt-4">
                <h3 className="text-xl md:text-2xl font-black font-syne">
                  {selectedVideo.title}
                </h3>
                {selectedVideo.description && (
                  <p className="text-white/60 mt-2">
                    {selectedVideo.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoSection;
