/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['gateway.ipfscdn.io', 'ipfs.thirdwebcdn.com'],
  },
  assetPrefix: './'
}

module.exports = nextConfig
