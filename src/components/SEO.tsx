import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useArtist } from '../context/ArtistContext';

const SEO: React.FC = () => {
    const { artist } = useArtist();
    const { seo, theme, content } = artist;
    
    const title = seo.title || `${artist.name} | Official Website`;
    const description = seo.description || content.hero.description.replace(/<[^>]*>?/gm, '');
    const url = seo.canonicalUrl || `https://${artist.domain}`;
    const image = seo.ogImage.startsWith('http') ? seo.ogImage : `https://${artist.domain}${seo.ogImage}`;

    // Collect all social and platform links for sameAs
    const sameAsLinks = [
        ...content.contact.socials.map(s => s.href),
        ...content.music.platforms.map(p => p.href),
        "https://monadelta.me" // Parent organization
    ];

    // Remove duplicates
    const uniqueSameAs = [...new Set(sameAsLinks)];

    // Dynamic JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MusicGroup",
                "@id": `${url}/#artist`,
                "name": artist.name,
                "alternateName": artist.id === 'lucid-ash' ? 'Lucid ASH' : 'Ashwin Azer',
                "description": description,
                "url": url,
                "image": image,
                "sameAs": uniqueSameAs,
                "genre": artist.id === 'lucid-ash' ? ['Alternative R&B', 'Dark Pop'] : ['Hip Hop', 'Rap', 'Trap'],
                "member": [
                    {
                        "@type": "Person",
                        "name": artist.legalName || "Ashwin Ramesh"
                    }
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
            <meta property="og:site_name" content={artist.name} />
            
            {/* Twitter Card */}
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
