import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useArtist } from '../context/ArtistContext';

const SEO: React.FC = () => {
    const { artist } = useArtist();
    const { hero } = artist.content;
    const { theme } = artist;
    
    // Construct the full title
    const title = `${artist.name} | ${hero.subtitle}`;
    // Strip HTML from description for meta tags
    const description = hero.description.replace(/<[^>]*>?/gm, '');
    const url = `https://${artist.domain}`;
    const image = `${url}${hero.bgImage}`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="theme-color" content={theme.primaryColor} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
