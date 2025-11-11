/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  // 👇 Esta línea le dice a Next dónde está tu código fuente
  srcDir: 'src',
};

module.exports = nextConfig;
