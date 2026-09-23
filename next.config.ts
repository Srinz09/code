import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages serves static files only — no server to run Next's
    // on-the-fly image optimization API against.
    unoptimized: true,
  },
};

export default nextConfig;
