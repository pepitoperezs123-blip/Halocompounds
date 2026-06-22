import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // This app lives in a subdirectory of a larger repo that has its own
  // lockfile. Pin the workspace root so Next/Turbopack doesn't traverse up
  // and pick up the parent project's files (e.g. its middleware.ts).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
