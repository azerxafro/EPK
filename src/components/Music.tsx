import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Youtube, Disc } from 'lucide-react';

const Music: React.FC = () => {
  const platforms = [
    { name: 'SPOTIFY', href: 'https://open.spotify.com/artist/5aHEYAeQkjg7DT1CiH6l3t', color: '#1DB954' },
    { name: 'APPLE MUSIC', href: 'https://music.apple.com/us/artist/ashwin-azer/1497428225', color: '#FA243C' },
    { name: 'MUSICBRAINZ', href: 'https://musicbrainz.org/artist/b43aaeda-d79e-4711-b242-feebf44c76fb?all=1', color: '#EB743B' },
  ];

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
              <span className="text-5xl font-black font-syne text-[#00f2ff]">02</span>
              <h2 className="text-6xl md:text-8xl font-black font-syne tracking-tighter">THE SOUND.</h2>
            </motion.div>
            <p className="text-white/40 max-w-md">
              Duality in sound: The raw, explicit Hip-Hop of <span className="text-white">Ashwin Azer</span> meets the emotive, melodic soundscapes of <span className="text-[#00f2ff]">Lucid ASH</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {platforms.map((p) => (
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
              <span className="text-[#00f2ff] text-[10px] font-bold tracking-[0.3em] mb-4 block">LATEST ALBUM</span>
              <iframe
                className="rounded-xl"
                src="https://open.spotify.com/embed/album/4eipwaoJfbKEuwdZdaORQT?utm_source=generator&theme=0"
                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Album Player - Latest Album"
              ></iframe>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black font-syne flex items-center gap-3">
                <Youtube className="text-[#00f2ff]" /> VISUALS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="aspect-video bg-white/5 relative group overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/ZWvMZM5A18o"
                      title="LOW LOVE (OFFICIAL VIDEO)"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                  <p className="text-xs font-bold tracking-widest">LOW LOVE (OFFICIAL VIDEO)</p>
                </div>

                <div className="space-y-3">
                  <div className="aspect-video bg-white/5 relative group overflow-hidden">
                    <iframe
                      src="https://www.youtube.com/embed/-TCS0ohFOzc"
                      title="UYIRE ENNAI VITTU SENDRAYE"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                  <p className="text-xs font-bold tracking-widest">UYIRE ENNAI VITTU SENDRAYE</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-red-500/20 bg-red-500/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-red-500 text-black text-[8px] font-black px-3 py-1 tracking-widest">UNRESOLVED CASE</div>
              <h4 className="text-xl font-black font-syne mb-4 flex items-center gap-2">
                <Disc size={18} className="text-red-500 animate-pulse" /> THE CONTENT ID THEFT
              </h4>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                The track <span className="text-white font-bold">"UYIRE ENNAI VITTU SENDRAYE"</span> remains a symbol of industry exploitation. After a label takedown, the track was illegally licensed by third parties who removed the vocals and claimed the composition as their own (Boom Bap Beat "Un Trago").
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                This ongoing legal battle highlights the vulnerability of independent artists in the age of automated licensing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 border border-[#00f2ff]/20 bg-[#00f2ff]/5 text-center relative group"
            >
              <div className="absolute inset-0 bg-[#00f2ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-[#00f2ff] text-xs font-bold tracking-[0.5em] mb-4 block">APPLE MUSIC EXCLUSIVE HINT</span>
              <h4 className="text-5xl font-black font-syne tracking-tighter mb-4">TOUR 2026</h4>
              <p className="text-white/40 text-sm tracking-widest">THE SONIC FREQUENCIES ARE COMING TO YOUR CITY.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
