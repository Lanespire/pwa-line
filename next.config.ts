import type { NextConfig } from "next";
import withPWA from "next-pwa";

const withPWAMiddleware = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["date-fns", "@headlessui/react"],
  },
};

export default withPWAMiddleware(nextConfig);
