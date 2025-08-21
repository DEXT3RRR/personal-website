// next.config.mjs
/** @type {import('next').NextConfig} */

// Security headers (sent for every route in production)
const isProd = process.env.NODE_ENV === "production";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    // Keep dev-friendly script policy so Next's dev server works.
    value: [
      "default-src 'self'",
      "img-src 'self' data: https://images.unsplash.com https://images.isbndb.com https://*.mzstatic.com https://img.youtube.com https://i.ytimg.com https://books.googleusercontent.com https://lh3.googleusercontent.com https://books.google.com https://i.pinimg.com",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      `script-src 'self' ${isProd ? "" : "'unsafe-inline' 'unsafe-eval'"}`.trim(),
      "connect-src 'self'",
    ].join("; "),
  },
];

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // Book covers (ISBNdb)
      { protocol: "https", hostname: "images.isbndb.com" },
      // Apple Music artwork CDN (wildcard subdomains)
      { protocol: "https", hostname: "is*-ssl.mzstatic.com" },
      // YouTube thumbnails
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      // Google Books covers
      { protocol: "https", hostname: "books.googleusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "books.google.com" },
      // Pinterest (if you end up using one-off images)
      { protocol: "https", hostname: "i.pinimg.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
