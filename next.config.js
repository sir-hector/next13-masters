/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
        mdxRs: true,
        typedRoutes: true,
        serverActions: true,
    },
    images: {
        domains: ['media.graphassets.com'],
    },
    env: {
        GRAPHQL_URL: process.env.GRAPHQL_URL
    }
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
