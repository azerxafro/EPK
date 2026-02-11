
export interface SocialLink {
  name: string;
  href: string;
  icon?: string;
  color?: string;
}

export interface HeroContent {
  artistName: string;
  subtitle: string;
  description: string;
  bgImage: string;
  logoText: string; // The massive background text
}

export interface BioContent {
  title: string;
  story: {
    part1: {
      title: string;
      content: string;
      highlight: string;
    };
    part2: {
      content: string[];
    };
    part3: {
      title: string;
      content: string;
    };
  };
  quote: string;
  sidebar: {
    title: string;
    content: string;
    author: string;
    image: string;
    imageCaption: string;
  };
}

export interface MusicContent {
  title: string;
  description: string;
  platforms: SocialLink[];
  latestAlbumEmbed: string; // Spotify embed URL
  visuals: {
    videoUrl: string;
    title: string;
  }[];
  featured?: {
      title: string;
      content: string;
      type: 'Case' | 'Hint' | 'Info';
      color?: string;
  }[];
}

export interface GalleryItem {
    url: string;
    span: string; // e.g. "md:col-span-2 md:row-span-2"
    title: string;
}

export interface GalleryContent {
    title: string;
    images: GalleryItem[];
}

export interface ContactContent {
    email: string;
    socials: SocialLink[];
}

export interface ArtistData {
  id: 'lucid-ash' | 'ashwin-azer';
  name: string;
  domain: string; // e.g., 'primary' or specific hostname
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  content: {
    hero: HeroContent;
    bio: BioContent;
    music: MusicContent;
    gallery: GalleryContent;
    contact: ContactContent;
  };
}
