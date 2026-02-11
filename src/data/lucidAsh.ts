import { ArtistData } from '../types/content';

export const lucidAshData: ArtistData = {
  id: 'lucid-ash',
  name: 'Lucid ASH',
  domain: 'press.ashwinazer.rocks',
  theme: {
    primaryColor: '#00f2ff',
    secondaryColor: '#050505'
  },
  content: {
    hero: {
      artistName: 'ASHWIN AZER',
      subtitle: 'ARTIST & PRODUCER',
      description: 'Crafting sonic landscapes where reality meets the <span className="text-white italic">lucid dream</span>.',
      bgImage: '/images/hero-bg.webp',
      logoText: 'LUCID'
    },
    bio: {
      title: 'THE STORY.',
      story: {
        part1: {
          title: 'The Erasure (Winter 2024)',
          highlight: 'deleted',
          content: 'In the winter of 2024, the digital ghost of Ashwin Azer was nearly deleted. A catastrophic failure at Unchained Music led to the systematic takedown of his entire discography. In a cruel twist of irony, AI algorithms misidentified his original, self-produced compositions as "AI-generated," effectively locking him out of his own legacy. Only 30% of his life\'s work was recovered from the wreckage.'
        },
        part2: {
          content: [
            'The digital erasure was only the surface. Behind the screen, Azer faced a perfect storm of betrayal: former labels and trusted friends turned their backs, while a high-profile, long-term relationship with a prominent influencer shattered under the weight of the industry.',
            'What followed was a descent into the darkest corners of the human experience—depression, anxiety, and a battle with substance abuse that eventually led to rehabilitation. The world saw silence; Ashwin saw the void.'
          ]
        },
        part3: {
          title: 'The Rebirth: Lucid ASH',
          content: 'Emerging from the ashes of Ashwin Azer is Lucid ASH—the creative outlet for the emotive soundscapes of the unchained. Lucid ASH captures the moments between dreams and reality, blending world-class Hip-Hop production with melodic flows that explore the raw, explicit truth of his journey.'
        }
      },
      quote: '"I didn\'t just lose my music; I lost the proof that I existed."',
      sidebar: {
        title: 'RECOVERED DATA: 30%',
        content: '"A sonic resurrection. Azer has turned his trauma into a new genre of survival."',
        author: 'MONADELTA INSIDER',
        image: '/images/lucid-moments.webp',
        imageCaption: 'VISUAL EVIDENCE OF THE 2025 STAGE RETURN'
      }
    },
    music: {
      title: 'THE SOUND.',
      description: 'Duality in sound: The raw, explicit Hip-Hop of Ashwin Azer meets the emotive, melodic soundscapes of Lucid ASH.',
      platforms: [
        { name: 'SPOTIFY', href: 'https://open.spotify.com/artist/5aHEYAeQkjg7DT1CiH6l3t', color: '#1DB954' },
        { name: 'APPLE MUSIC', href: 'https://music.apple.com/us/artist/ashwin-azer/1497428225', color: '#FA243C' },
        { name: 'MUSICBRAINZ', href: 'https://musicbrainz.org/artist/b43aaeda-d79e-4711-b242-feebf44c76fb?all=1', color: '#EB743B' }
      ],
      latestAlbumEmbed: 'https://open.spotify.com/embed/album/4eipwaoJfbKEuwdZdaORQT?utm_source=generator&theme=0',
      visuals: [
        { title: 'LOW LOVE (OFFICIAL VIDEO)', videoUrl: 'https://www.youtube.com/embed/ZWvMZM5A18o' },
        { title: 'UYIRE ENNAI VITTU SENDRAYE', videoUrl: 'https://www.youtube.com/embed/-TCS0ohFOzc' }
      ],
      featured: [
        {
          title: 'UNRESOLVED CASE: THE CONTENT ID THEFT',
          content: 'The track "UYIRE ENNAI VITTU SENDRAYE" remains a symbol of industry exploitation. After a label takedown, the track was illegally licensed by third parties who removed the vocals and claimed the composition as their own.',
          type: 'Case'
        },
        {
          title: 'TOUR 2026',
          content: 'THE SONIC FREQUENCIES ARE COMING TO YOUR CITY.',
          type: 'Hint'
        }
      ]
    },
    gallery: {
        title: 'THE LOOK.',
        images: [
            {
              url: "/images/hero-bg.webp",
              span: "md:col-span-2 md:row-span-2",
              title: "THE LOOK"
            },
            {
              url: "/images/sonic-frequencies.webp",
              span: "md:col-span-1 md:row-span-1",
              title: "SONIC FREQUENCIES"
            },
            {
              url: "/images/visual-narrative.webp",
              span: "md:col-span-1 md:row-span-1",
              title: "VISUAL NARRATIVE"
            },
            {
              url: "/images/lucid-moments.webp",
              span: "md:col-span-2 md:row-span-1",
              title: "LUCID MOMENTS"
            }
          ]
    },
    contact: {
      email: 'ashwinazer@monadelta.com',
      socials: [
        { name: 'Instagram', href: 'https://instagram.com/ashwinazer' },
        { name: 'Twitter', href: 'https://twitter.com/ashwinazer' }
      ]
    }
  }
};
