/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Enable static page generation for faster loads
  output: 'standalone',
  // Optimize production builds
  swcMinify: true,
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Reduce bundle size by enabling compression
  compress: true,
  // Cache build output
  poweredByHeader: false,
  // Optimize fonts
  optimizeFonts: true,
};

module.exports = nextConfig; 