import { ArtistData } from '../types/content';

export const ashwinAzerData: ArtistData = {
  id: 'ashwin-azer',
  name: 'Ashwin Azer',
  domain: 'ashwinazer.rocks',
  theme: {
    primaryColor: '#ff0055', // Distinctive color for Ashwin Azer
    secondaryColor: '#000000'
  },
  content: {
    hero: {
      artistName: 'ASHWIN AZER',
      subtitle: 'THE ROGUE PRODUCER',
      description: 'Raw, explicit, and unfiltered. The original frequency that started the movement.',
      bgImage: '/images/hero-bg-azer.webp', // Using same for now or placeholder
      logoText: 'AZER'
    },
    bio: {
      title: 'THE ORIGIN.',
      story: {
        part1: {
          title: 'The Foundation',
          highlight: 'unfiltered',
          content: 'Before the erasure, Ashwin Azer was the voice of the underground. A producer who refused to compromise his sound for the mainstream. His beats were gritty, his lyrics raw, and his message clear: authentic expression above all else.'
        },
        part2: {
          content: [
            'Ashwin Azer represents the core identity—the rapper, the producer, the artist who built Monadelta from the ground up.',
            'While Lucid ASH explores the ethereal and the dreamlike, Ashwin Azer is grounded in the concrete reality of the streets and the studio. It is the sound of ambition, struggle, and eventual triumph.'
          ]
        },
        part3: {
          title: 'The Legacy',
          content: 'Despite the attempts to silence him, the catalogue remains. The tracks that survived are a testament to resilience. Ashwin Azer is not just a name; it is a statement of intent.'
        }
      },
      quote: '"They tried to delete the data, but they couldn\'t delete the soul."',
      sidebar: {
        title: 'CATALOGUE STATUS: REBUILDING',
        content: '"The original files may be corrupted, but the memory is intact. This is the rebuild."',
        author: 'ARCHIVE KEEPER',
        image: '/images/lucid-moments.webp', // Reuse for now
        imageCaption: 'ARCHIVAL FOOTAGE'
      }
    },
    music: {
      title: 'THE DISCOGRAPHY.',
      description: 'The foundation. The hits. The tracks that defined an era.',
      platforms: [
        { name: 'SPOTIFY', href: 'https://open.spotify.com/artist/5aHEYAeQkjg7DT1CiH6l3t', color: '#1DB954' },
        { name: 'APPLE MUSIC', href: 'https://music.apple.com/us/artist/ashwin-azer/1497428225', color: '#FA243C' }
      ],
      latestAlbumEmbed: 'https://open.spotify.com/embed/artist/5aHEYAeQkjg7DT1CiH6l3t?utm_source=generator', // Artist embed
      visuals: [
        { title: 'LIVE PERFORMANCE 2024', videoUrl: 'https://www.youtube.com/embed/ZWvMZM5A18o' } // Placeholder
      ],
      featured: [
        {
          title: 'OFFICIAL MERCH',
          content: 'COMING SOON TO MONADELTA STORE.',
          type: 'Info'
        }
      ]
    },
    gallery: {
        title: 'THE AESTHETIC.',
        images: [
            {
              url: "/images/hero-bg-azer.webp", // Placeholder
              span: "md:col-span-2 md:row-span-2",
              title: "RAW & UNCUT"
            },
            {
              url: "/images/sonic-frequencies.webp",
              span: "md:col-span-1 md:row-span-1",
              title: "STUDIO SESSIONS"
            },
            {
              url: "/images/visual-narrative.webp",
              span: "md:col-span-1 md:row-span-1",
              title: "ON THE ROAD"
            },
            {
              url: "/images/lucid-moments.webp",
              span: "md:col-span-2 md:row-span-1",
              title: "LIVE"
            }
          ]
    },
    contact: {
      email: 'mgmt@ashwinazer.rocks',
      socials: [
        { name: 'Instagram', href: 'https://instagram.com/ashwinazer' },
        { name: 'Twitter', href: 'https://twitter.com/ashwinazer' }
      ]
    }
  }
};
