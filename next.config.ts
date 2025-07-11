import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "pphat.top",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "*.sophat.top",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "3001",
                pathname: "/**"
            }
        ]
    },
};

export default nextConfig;
