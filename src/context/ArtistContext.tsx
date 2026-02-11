import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ArtistData } from '../types/content';
import { lucidAshData } from '../data/lucidAsh';
import { ashwinAzerData } from '../data/ashwinAzer';

interface ArtistContextType {
  artist: ArtistData;
  setArtist: (artist: ArtistData) => void;
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export const ArtistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [artist, setArtist] = useState<ArtistData>(lucidAshData);

  useEffect(() => {
    const hostname = window.location.hostname;
    // Simple logic: if hostname contains 'ashwinazer.rocks' and NOT 'press.', switch to Ashwin Azer
    // Or if we visit a specific route later. For now, domain based.
    
    // Check for 'ashwinazer.rocks' (production) or overrides
    if (hostname === 'ashwinazer.rocks' || hostname === 'www.ashwinazer.rocks') {
        setArtist(ashwinAzerData);
    } else {
        // Default to Lucid ASH (press.ashwinazer.rocks, localhost default, etc)
        setArtist(lucidAshData);
    }
  }, []);

  return (
    <ArtistContext.Provider value={{ artist, setArtist }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtist = () => {
  const context = useContext(ArtistContext);
  if (context === undefined) {
    throw new Error('useArtist must be used within an ArtistProvider');
  }
  return context;
};
