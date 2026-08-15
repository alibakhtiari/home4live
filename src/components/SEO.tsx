
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string;
  structuredData?: Record<string, unknown>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/home4live-og.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords,
  structuredData,
}) => {
  // Default site name
  const siteName = 'Home4Live';

  // Format the page title
  const pageTitle = `${title} | ${siteName}`;

  // Dynamic base URL (uses current origin if available, falls back to home4live.ca)
  const baseUrl = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : 'https://home4live.ca';

  // Full canonical URL
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined;

  const fullOgImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`) : undefined;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      {fullOgImage && <meta property="og:image" content={fullOgImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {fullOgImage && <meta name="twitter:image" content={fullOgImage} />}


      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || {
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Home4Live",
          "image": fullOgImage,
          "url": fullCanonicalUrl || baseUrl,
          "telephone": "+1 647-806-9089",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Richmond Hill",
            "addressLocality": "Richmond Hill",
            "addressRegion": "ON",
            "addressCountry": "CA"
          },
          "priceRange": "$$$",
          "description": description
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
