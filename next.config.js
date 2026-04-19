/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.portsideagency.com',
          },
        ],
        destination: 'https://portsideagency.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
