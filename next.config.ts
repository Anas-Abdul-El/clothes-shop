import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6bpg5zicvs.ucarecd.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
