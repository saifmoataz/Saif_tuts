/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Saif_tuts',
  assetPrefix: '/Saif_tuts/',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
