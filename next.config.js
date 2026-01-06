/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Desactiva la optimización - esto debería resolver el error 500
    domains: ['ecommercehealthy.up.railway.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommercehealthy.up.railway.app',
        pathname: '/uploads/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
}

module.exports = nextConfig