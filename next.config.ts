import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ab-7536-217",
        destination: "/skin-clinic/mijuran",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
