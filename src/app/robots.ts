// src/app/robots.js
export default function robots() {
    // Set NEXT_PUBLIC_SITE_URL in your env (e.g. https://your-domain.com)
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
    return {
      // Crawl rules (advisory)
      rules: [
        { userAgent: "*", allow: "/" },     // let bots crawl the site
        { userAgent: "*", disallow: ["/api/"] }, // example: keep API routes out of crawls
      ],
      // Point crawlers to your sitemap
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }
  