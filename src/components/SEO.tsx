
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
  
  // Full canonical URL
  const fullCanonicalUrl = canonicalUrl ? `https://home4live.ca${canonicalUrl}` : undefined;
  
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
      {ogImage && <meta property="og:image" content={`https://home4live.ca${ogImage}`} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={`https://home4live.ca${ogImage}`} />}
      
      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
