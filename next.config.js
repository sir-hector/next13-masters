/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
        mdxRs: true,
        typedRoutes: true,
    }
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
