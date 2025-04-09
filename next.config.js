/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Remove experimental serverActions as it's now stable in Next.js 14
  
  // Add security headers
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ],

  // Optimize images
  images: {
    domains: [], // Add your image domains here if needed
    minimumCacheTTL: 60,
  },

  // Your existing webpack config
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },

  // Your existing env config
  env: {
    HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY,
  },

  // Add some performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

// Export the config without Netlify wrapper unless you specifically need it
module.exports = nextConfig;
