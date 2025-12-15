"use client"

import { Calendar, User, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TieuCanhCauThangArticleContent() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image 
          src="/modern-minimalist-garden-landscape-design.jpg"
          alt="Những hình ảnh tiểu cảnh cầu thang đẹp, độc đáo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full mb-4 text-sm font-semibold">
              Tiểu Cảnh Cầu Thang
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Những Hình Ảnh Tiểu Cảnh Cầu Thang Đẹp, Độc Đáo
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
                2.1K lượt xem
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
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 leading-relaxed text-lg italic">
                💡 <strong className="text-emerald-900">Mẹo xem hình ảnh:</strong> Lướt hình ảnh qua trái/phải để xem thêm các thiết kế tiểu cảnh cầu thang khác nhé.
              </p>
            </div>
          </div>

          {/* Section 1: Bí quyết trang trí */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bí Quyết Trang Trí Tiểu Cảnh Cầu Thang
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Một số gia đình không muốn kết hợp thác nước, hòn non bộ, hồ cá Koi vào tiểu cảnh cầu thang vì sợ ẩm thấp, 
              sợ nhiều muỗi nên chọn các <strong className="text-emerald-600">mẫu tiểu cảnh cầu thang khô</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Nhưng cũng có những gia đình lựa chọn <strong className="text-emerald-600">tiểu cảnh cầu thang nước</strong> để 
              kiến tạo điểm nhấn và sức sống cho gia đình. Chính vì vậy việc thiết kế, thi công tiểu cảnh cầu thang cũng cần 
              gặp mặt, khảo sát, tư vấn thực tế.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏜️</span>
                  Tiểu Cảnh Cầu Thang Khô
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Không ẩm thấp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Không lo muỗi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Dễ bảo trì</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Phù hợp nhà nhỏ</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💧</span>
                  Tiểu Cảnh Cầu Thang Nước
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Điểm nhấn nổi bật</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Mang sức sống</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Phong thủy tốt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Thư giãn tinh thần</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Gallery Section 1: Tiểu cảnh khô */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Một Số Hình Ảnh Tiểu Cảnh Cầu Thang Khô
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src="/modern-minimalist-garden-landscape-design.jpg"
                    alt={`Tiểu cảnh cầu thang khô ${i}`}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="bg-gray-50 p-4">
                    <p className="text-sm text-gray-600 font-medium">
                      {['Tiểu cảnh gầm cầu thang khô', 'Tiểu cảnh chân cầu thang', 'Tiểu cảnh dưới gầm cầu thang', 
                        'Mẫu tiểu cảnh khô đẹp', 'Tiểu cảnh cầu thang nhà ống', 'Thiết kế tiểu cảnh đơn giản'][i-1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery Section 2: Tiểu cảnh nước */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Một Số Hình Ảnh Tiểu Cảnh Cầu Thang Nước
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src="/luxury-koi-pond-landscape-modern-design.jpg"
                    alt={`Tiểu cảnh cầu thang nước ${i}`}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="bg-gray-50 p-4">
                    <p className="text-sm text-gray-600 font-medium">
                      {['Tiểu cảnh cầu thang có thác nước', 'Hòn non bộ gầm cầu thang', 'Tiểu cảnh hồ Koi cầu thang', 
                        'Thác nước dưới cầu thang', 'Tiểu cảnh nước đẹp', 'Kết hợp cây xanh và nước'][i-1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/luxury-modern-koi-pond-villa-landscape.jpg"
              alt="Tiểu cảnh cầu thang nổi bật"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                Tiểu cảnh cầu thang kết hợp hòn non bộ và thác nước tạo điểm nhấn độc đáo
              </p>
            </div>
          </div>

          {/* Section 3: Các thiết kế thường được chọn */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Các Thiết Kế Tiểu Cảnh Cầu Thang Thường Được Chọn
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Với kiến trúc hiện đại ngày nay, <strong className="text-emerald-600">Thiên Sơn</strong> đã mang đến những 
              khu vườn nhỏ, những không gian xanh đến từng khu vực trước giờ vẫn được coi là 
              <strong className="text-amber-600"> "góc chết"</strong>, không cần quan tâm…
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Khi tận dụng những điểm ít được lưu ý này để kích hoạt sự sống, khỏe mạnh, thậm chí là phong thủy, tài lộc 
              để một ngôi nhà của mình đầy thẩm mỹ, tinh tế dưới bàn tay của các nghệ nhân Thiên Sơn.
            </p>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">🌟</span>
                Điều Tuyệt Vời Từ Tiểu Cảnh Cầu Thang
              </h3>
              <p className="text-lg leading-relaxed text-emerald-50">
                Còn gì tuyệt vời hơn khi khu vườn nhỏ ở chân cầu thang với những loại <strong>cây đuổi muỗi</strong>, 
                những <strong>cây tài lộc</strong> cùng tiếng nước róc rách chảy từ thác nước của hòn non bộ và phía dưới 
                là một vài chú cá lững lờ bơi trong hồ Koi.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-emerald-300 transition-all hover:shadow-xl">
                <div className="text-4xl mb-4">🌿</div>
                <h4 className="font-bold text-gray-900 mb-3">Cây Đuổi Muỗi</h4>
                <p className="text-gray-600 text-sm">Lựa chọn cây có mùi thơm tự nhiên đuổi muỗi, bảo vệ sức khỏe gia đình</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-emerald-300 transition-all hover:shadow-xl">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="font-bold text-gray-900 mb-3">Cây Tài Lộc</h4>
                <p className="text-gray-600 text-sm">Cây phong thủy mang ý nghĩa may mắn, thịnh vượng cho gia chủ</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-emerald-300 transition-all hover:shadow-xl">
                <div className="text-4xl mb-4">🐟</div>
                <h4 className="font-bold text-gray-900 mb-3">Hồ Cá Koi Nhỏ</h4>
                <p className="text-gray-600 text-sm">Tạo sự sống động, mang lại năng lượng tích cực cho ngôi nhà</p>
              </div>
            </div>
          </section>

          {/* Section 4: Lưu ý khi thi công */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lưu Ý Khi Thi Công Tiểu Cảnh Gầm Cầu Thang
            </h2>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Khi thi công tiểu cảnh gầm cầu thang, bạn nên chú ý <strong className="text-amber-800">cân đối diện tích</strong> 
                ngôi nhà, diện tích gầm cầu thang sao cho thiết kế những loại cây phù hợp với phong thủy và có lợi cho sức khoẻ 
                của bạn và gia đình.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Sự thiết kế hài hoà và phù hợp sẽ giúp cho căn nhà bạn trở nên <strong className="text-amber-800">thẩm mỹ 
                và độc đáo hơn</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">📏</span>
                    Cân Đối Diện Tích
                  </h4>
                  <p className="text-gray-600">Tính toán kỹ không gian để thiết kế phù hợp, không chật chội</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧭</span>
                    Phong Thủy Hợp Mệnh
                  </h4>
                  <p className="text-gray-600">Chọn cây và bố trí theo hướng phong thủy của gia chủ</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌳</span>
                    Cây Phù Hợp
                  </h4>
                  <p className="text-gray-600">Lựa chọn cây ít rụng lá, dễ chăm sóc, có lợi sức khỏe</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    Tính Thẩm Mỹ
                  </h4>
                  <p className="text-gray-600">Thiết kế hài hòa, tạo điểm nhấn cho tổng thể ngôi nhà</p>
                </div>
              </div>
            </div>
          </section>

          

        </div>
      </div>
    </article>
  )
}