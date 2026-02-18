const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // absoluter Pfad -> Turbopack kann nicht "hochspringen"
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
