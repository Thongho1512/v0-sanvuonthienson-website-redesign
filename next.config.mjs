/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // BẮT BUỘC cho Cloudflare Pages
  },
  // KHÔNG dùng output: 'export' vì cần Cloudflare Functions
}

export default nextConfig