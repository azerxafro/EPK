import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Youtube, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="book" className="py-32 px-6 bg-black relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f2ff]/5 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-baseline gap-4 mb-8"
            >
              <span className="text-5xl font-black font-syne text-[#00f2ff]">04</span>
              <h2 className="text-6xl md:text-8xl font-black font-syne tracking-tighter">THE BOOK.</h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl text-white/60 mb-12 leading-relaxed"
            >
              For bookings, press inquiries, or collaborations, please reach out via the form or direct email.
            </motion.p>

            <div className="space-y-6">
              <motion.a
                href="mailto:ashwinazer@monadelta.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00f2ff] group-hover:text-[#00f2ff] transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-xl font-bold tracking-tight">ashwinazer@monadelta.com</span>
              </motion.a>

              <motion.a
                href="https://monadelta.me"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00f2ff] group-hover:text-[#00f2ff] transition-all">
                  <Send size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight">MONADELTA PRODUCTIONS</span>
                  <span className="text-[10px] text-white/40 tracking-widest">PORTAL IN DEVELOPMENT</span>
                </div>
              </motion.a>

              <div className="flex gap-4 pt-8">
                {[Instagram, Twitter, Youtube].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5, color: '#00f2ff' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-10 backdrop-blur-sm border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Name</label>
                  <input type="text" className="w-full bg-white/5 border-b border-white/20 py-3 px-4 focus:outline-none focus:border-[#00f2ff] transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Email</label>
                  <input type="email" className="w-full bg-white/5 border-b border-white/20 py-3 px-4 focus:outline-none focus:border-[#00f2ff] transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Subject</label>
                <select className="w-full bg-white/5 border-b border-white/20 py-3 px-4 focus:outline-none focus:border-[#00f2ff] transition-colors appearance-none">
                  <option className="bg-black">Booking Inquiry</option>
                  <option className="bg-black">Press Request</option>
                  <option className="bg-black">Collaboration</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border-b border-white/20 py-3 px-4 focus:outline-none focus:border-[#00f2ff] transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#00f2ff] text-black font-black tracking-[0.2em] text-xs flex items-center justify-center gap-3"
              >
                SEND MESSAGE <Send size={16} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
