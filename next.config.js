/** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

module.exports = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.servicetasker.com",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};
