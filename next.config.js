/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.carqueryapi.com',
        port: '',
        pathname: '/api/0.3/image/**',
      },
    ],
  },
}

module.exports = nextConfig
