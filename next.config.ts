import type { NextConfig } from "next";
import withPWA from "next-pwa";

const withPWAMiddleware = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const lpSubdomain = process.env.LP_SUBDOMAIN ?? "lp";
const rootDomain = process.env.ROOT_DOMAIN ?? process.env.NEXT_PUBLIC_ROOT_DOMAIN;
const additionalLpHosts = (process.env.LP_HOSTS ?? process.env.NEXT_PUBLIC_LP_HOSTS ?? "")
  .split(",")
  .map((host) => host.trim())
  .filter(Boolean);

const devHosts = [
  `${lpSubdomain}.localhost`,
  `${lpSubdomain}.localhost:3000`,
  `${lpSubdomain}.127.0.0.1`,
  `${lpSubdomain}.127.0.0.1:3000`,
];

const lpHosts = new Set<string>([...devHosts, ...additionalLpHosts]);

if (rootDomain) {
  lpHosts.add(`${lpSubdomain}.${rootDomain}`);
}

const lpPrimaryHost =
  process.env.LP_PRIMARY_HOST ??
  process.env.NEXT_PUBLIC_LP_PRIMARY_HOST ??
  (rootDomain ? `${lpSubdomain}.${rootDomain}` : undefined);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["date-fns", "@headlessui/react"],
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

export default withPWAMiddleware(nextConfig);
