// next.config.mjs
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// Loosened CSP so Next.js client scripts can execute in production.
// (Later you can move to a nonce-based CSP.)
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "img-src 'self' data: https://images.unsplash.com https://images.isbndb.com https://*.mzstatic.com https://img.youtube.com https://i.ytimg.com https://books.googleusercontent.com https://lh3.googleusercontent.com https://books.google.com https://i.pinimg.com",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      // ✅ allow Next.js runtime/hydration scripts in prod
      `script-src 'self' 'unsafe-inline' 'unsafe-eval'${isProd ? "" : ""}`,
      // allow client-side fetch/XHR to your own origin (add others if you use them)
      "connect-src 'self'",
    ].join("; "),
  },
];

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.isbndb.com" },
      { protocol: "https", hostname: "is*-ssl.mzstatic.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "books.googleusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "books.google.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
