/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['website.et']
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'website.et',
    //     port: '',
    //     pathname: '/**'
    //   }
    // ]
  },
  i18n: {
    locales: ['en', 'am'],
    defaultLocale: 'en',
    localeDetection: true, // automatic detection is off
  },
  trailingSlash: true,
}
// Bamlak - added this for pwa support for better lighthouse rank [Core Web Vitals - LCP, FID, CLS]
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA(nextConfig)
