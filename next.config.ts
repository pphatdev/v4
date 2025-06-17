import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
                port: "",
                pathname: "/**"
            }
        ]
    },
};

export default nextConfig;
