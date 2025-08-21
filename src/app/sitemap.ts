// src/app/sitemap.js
export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
    // List your key static routes
    const staticRoutes = ["", "about", "projects", "blog", "resume"].map((path) => ({
      url: `${baseUrl}/${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1.0 : 0.7, // home a bit higher
    }));
  
    // If you later generate dynamic routes (e.g., /blog/[slug]), append them here.
  
    return staticRoutes;
  }
  