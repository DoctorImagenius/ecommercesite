/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 IMPORTANT!
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
};

module.exports = nextConfig;

