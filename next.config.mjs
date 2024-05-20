/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    disable: false,
    reloadOnOnline: true,
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true
});

const nextConfig = {};

export default withPWA(nextConfig);