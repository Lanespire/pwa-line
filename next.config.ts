const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["date-fns", "@headlessui/react"],
    pwa: true,
  },
};

export default nextConfig;
