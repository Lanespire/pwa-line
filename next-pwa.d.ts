declare module "next-pwa" {
  import type { NextConfig } from "next";

  interface PWAOptions {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    scope?: string;
    sw?: string;
    runtimeCaching?: unknown;
    buildExcludes?: unknown;
    [key: string]: unknown;
  }

  type WithPWA = (options?: PWAOptions) => (nextConfig: NextConfig) => NextConfig;

  const withPWA: WithPWA;
  export default withPWA;
}
