"use client"

import { Calendar, User, Eye, ArrowRight, Mountain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HonNonBoPhongThuyArticleContent() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image 
          src="/traditional-vietnamese-rock-garden-landscape.jpg"
          alt="Thi công hòn non bộ đẹp hợp phong thủy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-amber-600 text-white rounded-full mb-4 text-sm font-semibold">
              Hòn Non Bộ
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Thi Công Hòn Non Bộ Đẹp Hợp Phong Thủy Giá Rẻ Nhất
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                14 Tháng 5, 2024
              </span>
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Nghệ Nhân Lê Anh
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                3.2K lượt xem
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong className="text-amber-700">Hòn non bộ đẹp</strong> là sự kết hợp hài hòa giữa nghệ thuật và phong thủy 
              nhằm mang đến lại sự hòa hợp của âm dương, của sự tương sinh thuận hòa giữa trời đất và con người.
            </p>
          </div>

          {/* Section 1: Các yếu tố của hòn non bộ */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Những Yếu Tố Tạo Nên Hòn Non Bộ Đẹp
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Những tác phẩm hòn non bộ kết hợp giữa các yếu tố:
            </p>

            <div className="space-y-8">
              {/* ĐÁ */}
              <div className="bg-gradient-to-r from-stone-50 to-gray-50 rounded-2xl p-8 border-l-4 border-stone-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-stone-600 flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">ĐÁ</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Mang dáng vẻ bất động, là biểu tượng của sức mạnh và hàm xúc rất nhiều ý nghĩa qua những đường nét 
                      hoa văn (mạch đá) và hình thù của chúng.
                    </p>
                  </div>
                </div>
              </div>

              {/* NƯỚC */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">💧</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">NƯỚC</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Mang đến năng lượng cho ngôi nhà của bạn. Dòng nước mang theo âm thanh và sự chuyển động khi tuôn đổ 
                      xuống những hòn đá được cấu thành vững chãi. Nước tượng trưng cho tài lộc và mang đến nhiều điều tốt.
                    </p>
                  </div>
                </div>
              </div>

              {/* ĐẠO */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🛤️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-2">ĐẠO</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Những con đường uốn lượn nhẹ nhàng để mang vào nguồn năng lượng tốt lành lan tỏa cùng Thảo (cây cối). 
                      Một số hòn non bộ mà Thiên Sơn đã thực hiện còn có cách bài trí khác đi nhằm mục đích nhốt giữ những 
                      điều xấu, điềm xui xẻo thích hợp cho những công trình hòn non bộ ở Đền, Chùa, Miếu mạo…
                    </p>
                  </div>
                </div>
              </div>

              {/* THẢO */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">THẢO</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Duy trì kết nối tăng cường năng lượng từ hòn non bộ cho Gia Chủ.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 mt-8">
              <p className="text-gray-800 leading-relaxed text-lg text-center font-medium">
                Với hơn 15 năm trong nghề, <strong className="text-amber-700">Thiên Sơn</strong> luôn mong muốn mang đến 
                một hòn non bộ ý nghĩa, phù hợp với phong thủy nhằm kích hoạt tài lộc, tài vận cho ngôi nhà/công ty của bạn.
              </p>
            </div>
          </section>

          {/* Featured Image 1 */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/12.jpg"
              alt="Mẫu hòn non bộ đẹp"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                Hòn non bộ kết hợp hài hòa giữa đá, nước và cây xanh
              </p>
            </div>
          </div>

          {/* Section 2: Cập nhật mẫu hòn non bộ đẹp */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cập Nhật Mẫu Hòn Non Bộ Đẹp
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Tham khảo thêm một số mẫu hòn non bộ đẹp hợp phong thủy mà Thiên Sơn đã thi công, sưu tầm. 
              Bạn cũng có thể gởi lại cho Thiên Sơn những mẫu hòn non bộ mà bạn thích để được tư vấn hỗ trợ thiết kế 
              theo kích thước của gia đình/công ty của bạn.
            </p>

            {/* Gallery Grid */}
            <div className="space-y-12">
              
              {/* Hòn non bộ kết hợp thác nước */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  Hòn Non Bộ Kết Hợp Thác Nước
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Những kiểu hòn non bộ kết hợp thác nước đẹp, phù hợp với gia đình bạn.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image 
                      src="/7.jpg"
                      alt="Hòn non bộ thác nước"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image 
                      src="/8.jpg"
                      alt="Hòn non bộ thác nước"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Hòn Non Bộ dành cho quán cafe */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-green-600 rounded-full"></span>
                  Hòn Non Bộ Dành Cho Quán Cafe
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image 
                      src="/32.jpg"
                      alt="Hòn non bộ cafe"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image 
                      src="/22.jpg"
                      alt="Hòn non bộ cafe"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Tiểu cảnh gia đình theo kích thước */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-teal-600 rounded-full"></span>
                  Tiểu Cảnh Gia Đình Theo Kích Thước
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image 
                      src="/18.jpg"
                      alt="Tiểu cảnh gia đình"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image 
                      src="/9.jpg"
                      alt="Tiểu cảnh gia đình"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Tiểu cảnh hồ cá trong nhà */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-cyan-600 rounded-full"></span>
                  Tiểu Cảnh Hồ Cá Trong Nhà
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image 
                      src="/31.jpg"
                      alt="Tiểu cảnh hồ cá trong nhà"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Thiết kế, trang trí sân vườn cho resort */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                  Thiết Kế, Trang Trí Sân Vườn Cho Resort
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image 
                      src="/20.jpg"
                      alt="Sân vườn resort"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <Image 
                      src="/26.png"
                      alt="Sân vườn resort"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section 3: Vì sao nên chọn hòn non bộ */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vì Sao Bạn Nên Chọn Hòn Non Bộ Đẹp Hợp Phong Thủy
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Những mẫu hòn non bộ đẹp hợp phong thủy này luôn có ý nghĩa rất quan trọng với đời sống cũng như quan niệm 
              tài lộc cho gia chủ. Với rất nhiều mẫu hòn non bộ đẹp mà Thiên Sơn đã thiết kế cho hầu hết các công trình 
              từ đền chùa, miếu, quán cà phê có thác nước thậm chí đến trụ sở của các cơ quan hành chính lớn cho đến 
              biệt thự nhà vườn, sân vườn có diện tích nhỏ…
            </p>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-8 border border-amber-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Kinh Nghiệm & Chuyên Môn</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hơn 15 năm trong nghề, Thiên Sơn với con mắt nhà nghề từ nghệ nhân Huế cùng sự tinh tế, 
                    am hiểu phong thủy hòn non bộ cùng luật phong thủy, ngũ hành sẽ kích hoạt tài lộc đến cho gia đình, 
                    cơ quan của bạn.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Điểm Nhấn Kiến Trúc</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hòn non bộ là những điểm nhấn vô cùng quan trọng trong không gian kiến trúc, Thiên Sơn sẽ khai thác 
                    các góc cạnh kết hợp cùng tuổi của gia chủ sẽ giúp cho môi trường sống trong lành, bình yên tịnh tâm 
                    sau những thời gian làm việc mệt mõi và căng thẳng.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-amber-600">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="font-bold text-gray-900 mb-2">10+ Năm Kinh Nghiệm</h4>
                <p className="text-gray-600 text-sm">Nghệ nhân lành nghề từ Huế</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-600">
                <div className="text-4xl mb-4">🌿</div>
                <h4 className="font-bold text-gray-900 mb-2">Phong Thủy Chuẩn</h4>
                <p className="text-gray-600 text-sm">Am hiểu ngũ hành, phong thủy</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-600">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="font-bold text-gray-900 mb-2">Giá Rẻ Nhất</h4>
                <p className="text-gray-600 text-sm">Cam kết giá tốt nhất thị trường</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}