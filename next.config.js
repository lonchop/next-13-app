/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["robohash.org"],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'api.dicebear.com',
  //       port: '',
  //       pathname: '/account123/**',
  //     },
  //   ],
  // },
  reactStrictMode: true,
};

module.exports = nextConfig;
