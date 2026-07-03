import type { NextConfig } from "next";
import path from "node:path";

// Sitio servido en la raíz de emberize.es (dominio personalizado en GitHub Pages).
const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: path.join(process.cwd()),
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
