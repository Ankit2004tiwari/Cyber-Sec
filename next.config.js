/** @type {import('next').NextConfig} */
const path = require('path');
<<<<<<< HEAD

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
=======
const withNetlify = require('@netlify/next');

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'localhost:3001'],
    },
  },
>>>>>>> da4c3ff5ff49d019bf8fc4947019a1719ce4ed32
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
<<<<<<< HEAD

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
=======
  env: {
    HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY,
  },
};

module.exports = withNetlify(nextConfig);
>>>>>>> da4c3ff5ff49d019bf8fc4947019a1719ce4ed32
