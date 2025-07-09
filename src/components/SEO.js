// src/components/Seo.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { meta, introdata } from '../content_option'; // adjust path

export default function Seo() {
  const { title, description } = meta;
  const canonical = 'https://brentogden.com/';

  // JSON-LD structured data
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brent Ogden",
    "url": canonical,
    "image": introdata.your_img_url,
    "jobTitle": "Front-End Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Self-Employed"
    },
    "sameAs": [
      "https://github.com/brentogden",
      "https://www.linkedin.com/in/brent-ogden-70398012",
     
    ],
    "description": description.trim()
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": canonical,
    "name": "Brent Ogden Portfolio & Blog",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonical}search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:image"       content={introdata.your_img_url} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={introdata.your_img_url} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdPerson)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdWebSite)}
      </script>
    </Helmet>
  );
}
