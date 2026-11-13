import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is a landing page with no server-side features. Generate only
  // static files so Caddy can serve it without a persistent Node.js process.
  output: "export",
  trailingSlash: true,
  images: {
    // Static hosting cannot run Next's on-demand image optimizer. Images are
    // pre-compressed to WebP in public/ instead.
    unoptimized: true,
  },
};

export default nextConfig;
