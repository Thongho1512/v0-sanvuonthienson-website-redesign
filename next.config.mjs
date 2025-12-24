/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Xuất ra static files
  images: {
    unoptimized: true, // Bắt buộc cho static export
  },
  trailingSlash: true, // Tạo folder cho mỗi route
}

export default nextConfig