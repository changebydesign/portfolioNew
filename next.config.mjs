
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ this is required for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  assetPrefix: '',  // or just omit this line entirely
};

export default nextConfig;
