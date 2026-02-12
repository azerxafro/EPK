import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useArtist } from '../context/ArtistContext';

const SEO: React.FC = () => {
    const { artist } = useArtist();
    const { seo, theme } = artist;
    
    // Fallback if SEO object is missing (though it shouldn't be now)
    const title = seo.title || `${artist.name} | Official Website`;
    const description = seo.description || artist.content.hero.description.replace(/<[^>]*>?/gm, '');
    const url = `https://${artist.domain}`;
    const image = `${url}${seo.ogImage || artist.content.hero.bgImage}`;

    // Dynamic JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MusicGroup",
                "@id": `${url}/#artist`,
                "name": artist.name,
                "description": description,
                "url": url,
                "image": image,
                "sameAs": [
                    "https://instagram.com/theashwinazer",
                    "https://youtube.com/@ashwinazer",
                    "https://monadelta.me"
                ]
            },
            {
                "@type": "WebSite",
                "@id": `${url}/#website`,
                "url": url,
                "name": title,
                "description": description,
                "publisher": { "@id": `${url}/#artist` }
            }
        ]
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={seo.keywords?.join(', ')} />
            <meta name="theme-color" content={theme.primaryColor} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            
            {/* Twitter Card - No specific handle attribution as requested, just summary */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SEO;
