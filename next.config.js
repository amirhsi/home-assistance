/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hajibadoomi.com",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
