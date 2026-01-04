/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ecommercehealthy.up.railway.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommercehealthy.up.railway.app',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
}

module.exports = nextConfig