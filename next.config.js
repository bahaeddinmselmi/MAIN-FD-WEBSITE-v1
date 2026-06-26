/** @type {import('next').NextConfig} */

// Extract the hostname from BACKEND_API_URL so Next.js Image can proxy
// backend-uploaded images (logos, car photos, blog covers).
function backendHostname() {
    try {
        const raw = (process.env.BACKEND_API_URL || '').replace(/^﻿/, '').trim();
        if (!raw) return null;
        return new URL(raw).hostname;
    } catch {
        return null;
    }
}

const backendHost = backendHostname();

const remotePatterns = [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    // Allow any https hostname for blog cover images set by admins
    { protocol: 'https', hostname: '**' },
];

// Allow the backend host over http (VPS serves over plain http)
if (backendHost) {
    remotePatterns.push({ protocol: 'http', hostname: backendHost, pathname: '/**' });
    remotePatterns.push({ protocol: 'https', hostname: backendHost, pathname: '/**' });
}

const nextConfig = {
    // standalone is for Docker/VPS self-hosting — Vercel manages its own output
    output: process.env.VERCEL ? undefined : 'standalone',
    async redirects() {
        return [
            {
                source: '/product/:slug',
                destination: '/rental/tunis/:slug',
                permanent: true,
            },
        ];
    },
    images: { remotePatterns },
};

module.exports = nextConfig;
