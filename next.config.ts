
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["date-fns", "@headlessui/react"],
    pwa: true,
  },
  async rewrites() {
    const beforeFiles = Array.from(lpHosts).map((host) => ({
      source: "/",
      has: [
        {
          type: "host" as const,
          value: host,
        },
      ],
      destination: "/lp",
    }));

    return {
      beforeFiles,
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    if (!lpPrimaryHost) {
      return [];
    }

    const protocol = /(localhost|127\.0\.0\.1)/.test(lpPrimaryHost) ? "http" : "https";

    return [
      {
        source: "/lp/:path*",
        destination: `${protocol}://${lpPrimaryHost}/:path*`,
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
