
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ this is required for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
