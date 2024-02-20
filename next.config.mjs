/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'jap-mcd.vercel.app',
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ]
    },
};

export default nextConfig;
