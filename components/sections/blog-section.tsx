"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight, Calendar, User, Tag, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  const blogPosts = [
    {
      id: 'thi-cong-ho-ca-koi',
      title: 'Đơn Vị Thiết Kế - Thi Công Hồ Cá Koi Số 1 Miền Nam',
      excerpt: 'Chúng tôi tự hào là đơn vị thi công hồ cá koi chuyên nghiệp, uy tín, được nhiều gia chủ tin tưởng lựa chọn. Với đội ngũ kiến trúc sư, thợ thi công lành nghề...',
      image: '/luxury-koi-pond-landscape-modern-design.jpg',
      date: '17 Tháng 5, 2024',
      category: 'Hồ Cá Koi',
      author: 'Nghệ Nhân Lê Anh',
      views: '2.5K'
    },
    {
      id: 'thiet-ke-san-vuon',
      title: 'Những Thiết Kế Tiểu Cảnh Sân Vườn Độc Đáo',
      excerpt: 'Tạo dấu ấn cá nhân với dịch vụ thiết kế sân vườn hồ cá Koi chất lượng cao. Không gian sống hòa quyện với thiên nhiên...',
      image: '/modern-minimalist-garden-landscape-design.jpg',
      date: '15 Tháng 5, 2024',
      category: 'Sân Vườn',
      author: 'Nghệ Nhân Lê Anh',
      views: '1.8K'
    },
    {
      id: 'hon-non-bo-phong-thuy',
      title: 'Hòn Non Bộ - Nghệ Thuật Phong Thủy Việt Nam',
      excerpt: 'Khám phá các yếu tố phong thủy quan trọng khi thiết kế hòn non bộ cho gia đình bạn. Mang thiên nhiên vào không gian sống...',
      image: '/traditional-vietnamese-rock-garden-landscape.jpg',
      date: '12 Tháng 5, 2024',
      category: 'Hòn Non Bộ',
      author: 'Nghệ Nhân Lê Anh',
      views: '2.1K'
    }
  ]

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-semibold mb-6">
            <Tag className="w-4 h-4" />
            Bài Viết Mới Nhất
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Chia Sẻ <span className="text-emerald-600">Kinh Nghiệm</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cập nhật kiến thức và xu hướng thiết kế cảnh quan mới nhất
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              key={post.id}
              href={`/bai-viet/${post.id}`}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <article>
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    
                    <span className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                      Đọc thêm
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/bai-viet">
            <button className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg">
              Xem Tất Cả Bài Viết
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}