import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useArtist } from '../context/ArtistContext';

const Contact: React.FC = () => {
  const { artist } = useArtist();
  const { theme } = artist;
  const { contact } = artist.content;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Submitted:', formState);
    alert('Thanks for reaching out. We will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-16 md:py-32 relative text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black font-syne tracking-tight mb-8">
              GET IN TOUCH
            </h2>
            
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-6">
                <h3 className="text-sm font-bold tracking-[0.2em] opacity-60">MANAGEMENT & BOOKING</h3>
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl font-bold">{contact.management.name}</p>
                  <a href={`mailto:${contact.management.email}`} className="block text-lg hover:opacity-70 transition-opacity underline decoration-white/30 underline-offset-4">
                    {contact.management.email}
                  </a>
                  <p className="text-white/60">{contact.management.phone}</p>
                </div>
              </div>

              {contact.press && (
                <div className="space-y-6">
                  <h3 className="text-sm font-bold tracking-[0.2em] opacity-60">PRESS INQUIRIES</h3>
                  <div className="space-y-2">
                    <p className="text-xl md:text-2xl font-bold">{contact.press.name}</p>
                    <a href={`mailto:${contact.press.email}`} className="block text-lg hover:opacity-70 transition-opacity underline decoration-white/30 underline-offset-4">
                      {contact.press.email}
                    </a>
                  </div>
                </div>
              )}

              {/* Socials */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold tracking-[0.2em] opacity-60">FOLLOW</h3>
                <div className="flex flex-wrap gap-4">
                  {contact.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                      aria-label={social.name}
                    >
                      {/* Icons would go here based on social name, simple text for now */}
                      <span className="text-[10px] font-bold">{social.name.substring(0, 2).toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 md:p-10 rounded-2xl border border-white/5"
          >
            <h3 className="text-2xl font-black font-syne mb-8">SEND A MESSAGE</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold tracking-widest mb-2 opacity-70">NAME</label>
                <input
                  type="text"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest mb-2 opacity-70">EMAIL</label>
                <input
                  type="email"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="email@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest mb-2 opacity-70">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Tell us about your project..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full font-bold tracking-widest text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})` 
                }}
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="pt-24 mt-24 border-t border-white/10 text-center opacity-40">
          <p className="text-xs tracking-widest mb-4">
            &copy; {new Date().getFullYear()} {artist.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center justify-center gap-2 text-[10px] tracking-widest">
             <span>POWERED BY MONADELTA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
