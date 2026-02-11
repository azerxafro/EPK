import { motion } from 'framer-motion';
import { Mail, Instagram, Youtube, Send, Music, ExternalLink } from 'lucide-react';
import { useArtist } from '../context/ArtistContext';

/**
 * Contact Section - Booking, press, Monadelta
 * Premium minimal design matching global artist sites
 */
const Contact = () => {
  const { artist } = useArtist();
  const { contact } = artist.content;
  const { theme } = artist;

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram': return Instagram;
      case 'youtube': return Youtube;
      case 'spotify': return Music;
      case 'mail': return Mail;
      default: return Send;
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none" 
        style={{ background: `radial-gradient(circle, ${theme.primaryColor}08, transparent)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black font-syne tracking-tight mb-4">GET IN TOUCH</h2>
          <p className="text-white/50 max-w-lg mx-auto">
            For bookings, press inquiries, or collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Email */}
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                href={`mailto:${contact.email}`} 
                className="flex items-center gap-4 group"
              >
                <div 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-transparent"
                  style={{ '--hover-bg': theme.primaryColor } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${theme.primaryColor}20`;
                    e.currentTarget.style.borderColor = theme.primaryColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <Mail size={20} />
                </div>
                <span className="text-lg font-bold tracking-tight">{contact.email}</span>
              </motion.a>

              {/* Instagram Profiles */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3 pt-4"
              >
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">Follow on Instagram</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/theashwinazer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-all text-sm"
                  >
                    <Instagram size={16} className="text-[#E4405F]" />
                    <span className="font-bold">@theashwinazer</span>
                  </a>
                  <a
                    href="https://instagram.com/thelucidash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-all text-sm"
                  >
                    <Instagram size={16} className="text-[#E4405F]" />
                    <span className="font-bold">@thelucidash</span>
                  </a>
                  <a
                    href="https://instagram.com/themonadelta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-all text-sm"
                  >
                    <Instagram size={16} className="text-[#E4405F]" />
                    <span className="font-bold">@themonadelta</span>
                  </a>
                </div>
              </motion.div>

              {/* Monadelta Label */}
              {contact.label && (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  href={contact.label.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-4 group p-4 -ml-4 rounded-xl transition-all hover:bg-white/5"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.primaryColor}30, ${theme.gradientTo || theme.primaryColor}30)`,
                      border: `1px solid ${theme.primaryColor}40`
                    }}
                  >
                    <Send size={20} style={{ color: theme.primaryColor }} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-tight">{contact.label.name}</span>
                    <span className="text-xs text-white/60 tracking-widest">{contact.label.description}</span>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-white/50 group-hover:text-white/60 transition-colors" />
                </motion.a>
              )}

              {/* Streaming Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-6"
              >
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-3">Stream Music</p>
                <div className="flex gap-3">
                  {contact.socials.filter(s => s.name !== 'Instagram').map((social, i) => {
                    const Icon = getSocialIcon(social.name);
                    return (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Listen on ${social.name}`}
                        title={social.name}
                        whileHover={{ y: -3 }}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = social.color || theme.primaryColor;
                          e.currentTarget.style.backgroundColor = `${social.color || theme.primaryColor}20`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <Icon size={20} aria-hidden="true" />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-2xl overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${theme.primaryColor}30, ${theme.gradientTo || theme.primaryColor}10, transparent)` }}
          >
            <div className="bg-black/90 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-white/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Name</label>
                    <input 
                      id="contact-name"
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-white/5 border-b-2 border-white/10 py-3 px-4 focus:outline-none transition-colors rounded-t-lg"
                      style={{ '--focus-color': theme.primaryColor } as React.CSSProperties}
                      onFocus={(e) => e.currentTarget.style.borderColor = theme.primaryColor}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Email</label>
                    <input 
                      id="contact-email"
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-white/5 border-b-2 border-white/10 py-3 px-4 focus:outline-none transition-colors rounded-t-lg"
                      onFocus={(e) => e.currentTarget.style.borderColor = theme.primaryColor}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                      placeholder="your@email.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Subject</label>
                  <select 
                    id="contact-subject"
                    name="subject"
                    aria-label="Select inquiry type"
                    className="w-full bg-white/5 border-b-2 border-white/10 py-3 px-4 focus:outline-none transition-colors appearance-none rounded-t-lg"
                    onFocus={(e) => e.currentTarget.style.borderColor = theme.primaryColor}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <option className="bg-black">Booking Inquiry</option>
                    <option className="bg-black">Press Request</option>
                    <option className="bg-black">Collaboration</option>
                    <option className="bg-black">Monadelta Distribution</option>
                    <option className="bg-black">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Message</label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows={4} 
                    required
                    className="w-full bg-white/5 border-b-2 border-white/10 py-3 px-4 focus:outline-none transition-colors resize-none rounded-t-lg"
                    onFocus={(e) => e.currentTarget.style.borderColor = theme.primaryColor}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                    placeholder="Tell us about your project..." 
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-5 text-black font-black tracking-[0.2em] text-xs flex items-center justify-center gap-3 rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})` }}
                >
                  SEND MESSAGE <Send size={14} />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
