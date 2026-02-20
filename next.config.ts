import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.dodopayments.com",
        pathname: "/login-signup/**",
      },
      {
        protocol: "https",
        hostname: "mintcdn.com",
        pathname: "/dodopayments/**",
      },
    ],
  },
};

export default nextConfig;
