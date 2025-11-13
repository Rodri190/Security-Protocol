/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Security-Protocol' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Security-Protocol/' : '',
};

module.exports = nextConfig;
