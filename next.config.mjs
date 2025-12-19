/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, 
  },
  trailingSlash: true, // Thêm để tránh lỗi routing
}

export default nextConfig