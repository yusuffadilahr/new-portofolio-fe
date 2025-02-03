import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/products/api',
        destination: 'https://fakestoreapi.com/products'
      }
    ]
  },
};

export default nextConfig;
