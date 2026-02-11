import React from 'react';
import { motion } from 'framer-motion';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

const Bio: React.FC = () => {
  return (
    <section id="story" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        <div className="lg:col-span-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-baseline gap-4 border-b border-white/10 pb-4"
          >
            <span className="text-5xl font-black font-syne text-[#00f2ff]">01</span>
            <h2 className="text-6xl md:text-8xl font-black font-syne tracking-tighter">THE STORY.</h2>
          </motion.div>
        </div>

        <div className="lg:col-span-7 space-y-12">
          <motion.div
            {...reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-[#00f2ff] font-bold tracking-[0.3em] text-xs uppercase">The Erasure (Winter 2024)</h3>
            <p className="text-3xl md:text-4xl font-medium leading-tight tracking-tight">
              In the winter of 2024, the digital ghost of Ashwin Azer was nearly <span className="text-[#00f2ff]">deleted</span>.
            </p>
            <p className="text-white/60 leading-relaxed text-lg">
              A catastrophic failure at Unchained Music led to the systematic takedown of his entire discography. In a cruel twist of irony, AI algorithms misidentified his original, self-produced compositions as "AI-generated," effectively locking him out of his own legacy. Only 30% of his life's work was recovered from the wreckage.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="columns-1 md:columns-2 gap-8 text-white/40 leading-relaxed text-base space-y-6 border-t border-white/5 pt-8"
          >
            <p>
              The digital erasure was only the surface. Behind the screen, Azer faced a perfect storm of betrayal: former labels and trusted friends turned their backs, while a high-profile, long-term relationship with a prominent influencer shattered under the weight of the industry.
            </p>
            <p>
              What followed was a descent into the darkest corners of the human experience—depression, anxiety, and a battle with substance abuse that eventually led to rehabilitation. The world saw silence; Ashwin saw the void.
            </p>
            <p className="text-white/80 font-medium italic">
              "I didn't just lose my music; I lost the proof that I existed."
            </p>
            <p>
              But the void has a way of echoing back. In the silence of recovery, a new frequency emerged. Not just a return, but a metamorphosis.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 pt-8"
          >
            <h3 className="text-[#00f2ff] font-bold tracking-[0.3em] text-xs uppercase">The Rebirth: Lucid ASH</h3>
            <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight">
              Emerging from the ashes of Ashwin Azer is <span className="text-[#00f2ff]">Lucid ASH</span>—the creative outlet for the emotive soundscapes of the unchained.
            </p>
            <p className="text-white/60 leading-relaxed text-lg">
              Lucid ASH captures the moments between dreams and reality, blending world-class Hip-Hop production with melodic flows that explore the raw, explicit truth of his journey. It is the sound of a man who has been unmade and is now building his own world through <span className="text-white font-bold">Monadelta Productions</span>.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 p-8 border-l-4 border-[#00f2ff] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 text-[8px] font-bold text-white/10 tracking-widest">RECOVERED DATA: 30%</div>
            <p className="text-2xl italic font-light mb-4">
              "A sonic resurrection. Azer has turned his trauma into a new genre of survival."
            </p>
            <span className="text-xs font-bold tracking-widest text-[#00f2ff]">— MONADELTA INSIDER</span>
          </motion.div>

          <div className="space-y-4">
            <div className="aspect-video bg-white/5 overflow-hidden relative group">
              <img src="/images/lucid-moments.webp" alt="Lucid ASH Rebirth" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold tracking-[0.5em]">CAME ALIVE ON STAGE</span>
              </div>
            </div>
            <p className="text-[10px] text-white/20 tracking-widest uppercase text-center">Visual evidence of the 2025 stage return</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bio;
