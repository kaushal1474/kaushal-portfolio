/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "out",
  output: "export",
  crossOrigin: "anonymous",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
