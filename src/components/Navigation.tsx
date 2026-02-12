import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useArtist } from '../context/ArtistContext';

/**
 * Navigation - Premium floating nav with scroll effects
 * Performance-optimized: Pure CSS, no Framer Motion on initial load
 */
const Navigation = () => {
  const { artist } = useArtist();
  const { theme } = artist;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'MUSIC', href: '#music' },
    { name: 'VIDEOS', href: '#videos' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 animate-[fadeSlideUp_0.5s_ease-out_both] ${
          scrolled ? 'py-3 md:py-4 bg-black/80 backdrop-blur-lg border-b border-white/5' : 'py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home"
            className="text-lg md:text-xl font-black tracking-tighter font-syne hover:opacity-80 transition-opacity z-50 relative"
            onClick={() => setIsOpen(false)}
          >
            {artist.content.hero.artistName.split(' ')[0]}
            <span 
              className="ml-1"
              style={{ color: theme.primaryColor }}
            >.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors relative group py-2"
              >
                {item.name}
                <span 
                  className="absolute bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: theme.primaryColor }}
                />
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href={artist.content.hero.ctaLink || '#music'}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 rounded-full text-xs font-bold tracking-widest text-black transition-transform hover:scale-105"
              style={{ 
                background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})` 
              }}
            >
              LISTEN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 z-50 relative text-white"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - CSS transitions */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              className="text-3xl font-black font-syne tracking-tight transition-all duration-300 py-2"
              style={{ 
                transitionDelay: isOpen ? `${i * 50}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0
              }}
            >
              {item.name}
            </a>
          ))}
          
          {/* CTA in Mobile Menu */}
          <a
            href={artist.content.hero.ctaLink || '#music'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-6 px-8 py-4 rounded-full text-sm font-bold tracking-widest text-black transition-all duration-300 w-full max-w-xs text-center"
            style={{ 
              background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.gradientTo || theme.primaryColor})`,
              transitionDelay: isOpen ? '200ms' : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0
            }}
          >
            LISTEN NOW
          </a>

          {/* Social Links */}
          <div
            className="flex items-center gap-6 mt-8 transition-all duration-300"
            style={{ 
              transitionDelay: isOpen ? '250ms' : '0ms',
              opacity: isOpen ? 1 : 0
            }}
          >
            {artist.content.contact.socials.slice(0, 4).map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow on ${social.name}`}
                className="text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors p-2"
              >
                {social.name.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
