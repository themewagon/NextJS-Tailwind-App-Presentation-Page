/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/Notus-Next/' : '',
  basePath: isProd ? '/Notus-Next' : '',
  output: 'export'
};

module.exports = nextConfig;
