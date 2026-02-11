import { ArtistData } from '../types/content';

/**
 * Ashwin Azer / Lucid ASH - Official Artist Website Data
 * Premium global artist standard
 */
export const lucidAshData: ArtistData = {
  id: 'lucid-ash',
  name: 'Ashwin Azer',
  legalName: 'Ashwin Ramesh',
  domain: 'ashwinazer.rocks',
  theme: {
    primaryColor: '#D4AF37', // Muted gold
    secondaryColor: '#0a0806', // Warm black
    gradientTo: '#C4A77D' // Sepia/tan
  },
  seo: {
    title: 'Ashwin Azer | Official Website - Music, Videos & More',
    description: 'Official website of Ashwin Azer (Lucid ASH). Contemporary R&B and melodic Hip-Hop artist. Stream DESTINY, watch music videos, and stay updated.',
    keywords: ['Ashwin Azer', 'Lucid ASH', 'DESTINY', 'Monadelta', 'Contemporary R&B', 'Hip-Hop', 'Indian Artist', 'Music Producer'],
    ogImage: '/images/og-image.jpg'
  },
  content: {
    hero: {
      artistName: 'ASHWIN AZER',
      subtitle: 'ARTIST · PRODUCER · FOUNDER',
      tagline: 'DESTINY OUT NOW',
      description: 'Contemporary R&B meets melodic Hip-Hop',
      bgImage: '/images/hero-bg.webp',
      logoText: 'AZER',
      ctaText: 'Listen Now',
      ctaLink: 'https://open.spotify.com/album/4eipwaoJfbKEuwdZdaORQT'
    },
    about: {
      headline: 'Two personas. One vision.',
      paragraphs: [
        'Ashwin Azer merges contemporary R&B with melodic Hip-Hop, crafting songs that explore the highs and lows of modern life. Known for raw, explicit truth as Ashwin Azer and emotive dreamscapes as Lucid ASH.',
        'Founder of MONADELTA Productions — the artist-first collective built from the ashes of an industry that tried to erase him. His debut album DESTINY (2025) marks a sonic resurrection.',
        'From DIY beats with a keypad phone as a microphone to founding an entire movement. The rebuild is complete.'
      ],
      images: ['/images/hero-bg.webp', '/images/sonic-frequencies.webp', '/images/lucid-moments.webp'],
      monadeltaMention: 'Distributed by Monadelta Productions'
    },
    bio: {
      title: 'THE STORY',
      story: {
        part1: {
          title: 'The Erasure (Winter 2024)',
          highlight: 'deleted',
          content: 'In the winter of 2024, the digital ghost of Ashwin Azer was nearly deleted. A catastrophic failure at Unchained Music led to the systematic takedown of his entire discography. In a cruel twist of irony, AI algorithms misidentified his original, self-produced compositions as "AI-generated"—effectively locking him out of his own legacy. Only 30% of his life\'s work was recovered from the wreckage.'
        },
        part2: {
          content: [
            'The digital erasure was only the surface. Behind the screen, Azer faced a perfect storm of betrayal: former labels and trusted friends turned their backs, while a high-profile relationship shattered under the weight of the industry machine.',
            'What followed was a descent into the darkest corners of the human experience—depression, anxiety, and a battle with substance abuse that eventually led to rehabilitation. The world saw silence; Ashwin saw the void.'
          ]
        },
        part3: {
          title: 'The Rebirth: MONADELTA',
          content: 'From the ashes rose MONADELTA Productions—the artist-first collective he founded in 2024. With his debut album DESTINY (2025) featuring Wa\'Cali and Marabukavi, and the ambitious Legends & Lovers on the horizon for 2026, Ashwin Azer didn\'t just survive. He built an empire.'
        }
      },
      quote: '"I picked up the mic, and the first note came out smooth and steady. The sound vibrated through the stage floor into my chest. I lowered my voice and I could hear people singing my own song back to me."',
      quoteAttribution: '— ASHWIN AZER, Apple Music Interview',
      multimediaHint: 'Before the frequencies, he was already cutting frames for the world—crafting visual narratives for clients across continents. But the sound called him back.',
      sidebar: {
        title: 'RECOVERED DATA: 30%',
        content: '"A sonic resurrection. From DIY beats on Premiere Pro with a keypad phone as a microphone, to founding an entire movement. This is the rebuild."',
        author: 'MONADELTA ARCHIVES',
        image: '/images/lucid-moments.webp',
        imageCaption: 'THE 2025 COMEBACK · DESTINY TOUR'
      }
    },
    music: {
      title: 'MUSIC',
      description: 'Contemporary R&B meets melodic Hip-Hop. Two personas, one vision.',
      platforms: [
        { name: 'SPOTIFY', href: 'https://open.spotify.com/artist/6M1VSmwtcuwS1DnvXTGk7P', color: '#1DB954' },
        { name: 'APPLE MUSIC', href: 'https://music.apple.com/us/artist/ashwin-azer/1497428225', color: '#FA243C' },
        { name: 'YOUTUBE', href: 'https://www.youtube.com/@ashwinazer', color: '#FF0000' },
        { name: 'MUSICBRAINZ', href: 'https://musicbrainz.org/artist/b43aaeda-d79e-4711-b242-feebf44c76fb', color: '#EB743B' }
      ],
      discographyEmbed: {
        type: 'spotify-artist',
        url: 'https://open.spotify.com/embed/artist/6M1VSmwtcuwS1DnvXTGk7P?utm_source=generator&theme=0',
        title: 'ASHWIN AZER',
        subtitle: 'The raw, unfiltered truth'
      },
      alternateEmbed: {
        type: 'spotify-artist',
        url: 'https://open.spotify.com/embed/artist/5aHEYAeQkjg7DT1CiH6l3t?utm_source=generator&theme=0',
        title: 'LUCID ASH',
        subtitle: 'The melodic shadow'
      },
      featuredAlbum: {
        type: 'spotify-album',
        url: 'https://open.spotify.com/embed/album/4eipwaoJfbKEuwdZdaORQT?utm_source=generator&theme=0',
        title: 'DESTINY',
        subtitle: '11 TRACKS · 22:16 · 2025'
      },
      albums: [
        {
          id: 'destiny',
          title: 'DESTINY',
          year: 2025,
          coverUrl: '/images/destiny-cover.webp',
          spotifyUrl: 'https://open.spotify.com/album/4eipwaoJfbKEuwdZdaORQT',
          appleMusicUrl: 'https://music.apple.com/album/destiny/1497428225',
          type: 'album'
        }
      ],
      youtubeChannel: 'https://www.youtube.com/@ashwinazer',
      // All 14 YouTube videos categorized
      youtubeVideos: [
        // Music Videos (Featured)
        { id: 'ZWvMZM5A18o', title: 'LOW LOVE', description: 'Official Music Video - DESTINY Era', category: 'music-video', year: 2025, featured: true },
        { id: '-TCS0ohFOzc', title: 'UYIRE ENNAI VITTU SENDRAYE', description: 'The track that became a symbol of industry exploitation', category: 'music-video', featured: true },
        { id: 'unB4PxJ23Zc', title: 'PIKACHU', description: 'First ever music video - Made in 11th Grade (16 years old)', category: 'music-video', year: 2019 },
        { id: 'VxJTnOqPhMk', title: 'FANTASY', description: 'Taken down from streaming platforms due to label issues', category: 'music-video' },
        { id: 'Kpexuug5UsM', title: 'Yendi Enna Vittu Pona', description: 'Official Music Video', category: 'music-video' },
        // Lyric Videos
        { id: '-i2pefklvk8', title: 'Pick n\' Sick', description: 'Lyric Video', category: 'lyric-video' },
        { id: 'nsGTxswX308', title: 'HUDA HOLA', description: 'From DESTINY Album - Lyric Video', category: 'lyric-video', year: 2025 },
        // Audio Tracks
        { id: 'HPrbiq2CB7I', title: 'MOJITO', description: 'Audio', category: 'audio' },
        { id: 'OpnhEfUlJZ0', title: 'SK FROM POCHINKI', description: 'Audio', category: 'audio' },
        { id: 'MCPJmOn8fpA', title: 'Un Kadhal Parvai', description: 'Audio', category: 'audio' },
        { id: 'wS-g9_H2QSA', title: 'Juno xx2', description: 'Audio', category: 'audio' },
        { id: '61iURNsHg94', title: 'Blue Fuel', description: 'Audio', category: 'audio' },
        { id: 'VnUSwY1_NiE', title: 'Vesham Kalayala', description: 'Audio Only', category: 'audio' },
        { id: 'CMdZsNZ2UE8', title: 'How You Like That (Blackpink)', description: 'Official Instrumental', category: 'audio' }
      ],
      visuals: [
        { title: 'LOW LOVE (OFFICIAL VIDEO)', videoUrl: 'https://www.youtube.com/embed/ZWvMZM5A18o', description: 'The visual statement of the DESTINY era' },
        { title: 'UYIRE ENNAI VITTU SENDRAYE', videoUrl: 'https://www.youtube.com/embed/-TCS0ohFOzc', description: 'The track that became a symbol of industry exploitation' }
      ],
      upcomingRelease: {
        title: 'LEGENDS & LOVERS',
        year: 2026,
        description: 'The most ambitious project yet.',
        type: 'album'
      },
      featured: [
        {
          title: 'MONADELTA PRODUCTIONS',
          content: 'The artist-first music collective. Home to Ashwin Azer, Lucid ASH, and Wa\'Cali.',
          type: 'Label',
          link: 'https://monadelta.me',
          linkText: 'VISIT MONADELTA →'
        }
      ],
      latestAlbumEmbed: 'https://open.spotify.com/embed/album/4eipwaoJfbKEuwdZdaORQT?utm_source=generator&theme=0'
    },
    gallery: {
      title: 'THE LOOK.',
      images: [
        {
          url: '/images/hero-bg.webp',
          span: 'md:col-span-2 md:row-span-2',
          title: 'DESTINY ERA',
          subtitle: 'The 2025 comeback visual',
          era: 'MONADELTA SESSIONS'
        },
        {
          url: '/images/sonic-frequencies.webp',
          span: 'md:col-span-1 md:row-span-1',
          title: 'SONIC FREQUENCIES',
          subtitle: 'Studio sessions',
          era: 'THE REBUILD'
        },
        {
          url: '/images/visual-narrative.webp',
          span: 'md:col-span-1 md:row-span-1',
          title: 'VISUAL NARRATIVE',
          subtitle: 'Behind the lens',
          era: 'THE ERASURE ERA'
        },
        {
          url: '/images/lucid-moments.webp',
          span: 'md:col-span-2 md:row-span-1',
          title: 'LUCID MOMENTS',
          subtitle: 'Between dreams and reality',
          era: 'LUCID FREQUENCIES'
        }
      ]
    },
    contact: {
      email: 'contact@ashwinazer.rocks',
      socials: [
        { name: 'Instagram', href: 'https://instagram.com/theashwinazer', color: '#E4405F' },
        { name: 'YouTube', href: 'https://www.youtube.com/@ashwinazer', color: '#FF0000' },
        { name: 'Spotify', href: 'https://open.spotify.com/artist/6M1VSmwtcuwS1DnvXTGk7P', color: '#1DB954' },
        { name: 'Apple Music', href: 'https://music.apple.com/us/artist/ashwin-azer/1497428225', color: '#FA243C' }
      ],
      altProfiles: [
        { name: 'Lucid ASH', handle: '@thelucidash', href: 'https://instagram.com/thelucidash', platform: 'Instagram' },
        { name: 'Monadelta', handle: '@themonadelta', href: 'https://instagram.com/themonadelta', platform: 'Instagram' }
      ],
      label: {
        name: 'MONADELTA PRODUCTIONS',
        url: 'https://monadelta.me',
        description: 'The artist-first music collective'
      },
      newsletter: {
        headline: 'Stay Updated',
        subheadline: 'New music, tour dates, and exclusive content',
        placeholder: 'Enter your email',
        buttonText: 'Subscribe'
      }
    }
  }
};
