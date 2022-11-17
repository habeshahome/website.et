/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}
// Bamlak - added for pwa support for lighthouse rank
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA(nextConfig)
