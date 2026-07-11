/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/process',
        destination: '/#how-i-work',
        permanent: true,
      },
    ]
  },
}

export default nextConfig