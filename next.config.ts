import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    typescript:{
        ignoreBuildErrors: true,
    } ,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.rawpixel.com',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },
        ],
    },
};

export default nextConfig;
