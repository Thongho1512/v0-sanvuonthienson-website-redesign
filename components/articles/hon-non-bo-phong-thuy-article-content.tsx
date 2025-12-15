"use client"

import { Calendar, User, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HonNonBoPhongThuyArticleContent() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image 
          src="/traditional-vietnamese-rock-garden-landscape.jpg"
          alt="Thi công hòn non bộ phong thủy"
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
              Thi Công Hòn Non Bộ Phong Thủy
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
                1.9K lượt xem
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
              Tại <strong className="text-amber-600 font-bold">Thiên Sơn</strong>, Bằng sự khéo léo bẩm sinh trong mỗi người nghệ nhân Huế. 
              Các công trình phong thủy là sự kết hợp hoàn mĩ giữa kiến trúc hiện đại, Kiến thức phong thủy và tài năng mà 
              hòn non bộ phong thủy sẽ hài hòa, đối xứng, tôn vinh nét đẹp của khuôn viên gia đình bạn.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Với rất nhiều mẫu hòn non bộ đẹp tại Thiên sơn, Bạn sẽ không chỉ dễ dàng lựa chọn cho mình một hòn non bộ như ý 
              mà còn có được vật phẩm giúp gia chủ có được phong thủy tốt mang về tài lộc, sức khỏe và may mắn cho gia đình.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Bên cạnh đó, Hòn non bộ Thiên Sơn là một tác phẩm thủy nguyệt giao hòa với sự kết hợp giữa đá – sự rắn rỏi, 
              nước – Mang đến tài lộc cùng cỏ cây hoa lá tạo nên một hòn non bộ cùng núi non trùng điệp. Bên dưới là những 
              cảnh vật trang trí mô tả cuộc sống thường nhật như cối đá, cầu đá, ông lão câu cá theo ý muốn gia chủ. 
              Hơn nữa, Đó là những thác nước chảy từ trên cao mang tài lộc tuôn đổ vào gia đình tạo nên một bức tranh 
              thiên nhiên an tĩnh tuyệt diệu.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/traditional-vietnamese-rock-garden-landscape.jpg"
              alt="Hòn non bộ phong thủy Thiên Sơn"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                Hòn non bộ phong thủy - Kết hợp hoàn mĩ giữa kiến trúc và phong thủy
              </p>
            </div>
          </div>

          {/* Section 1: Sự kết hợp hoàn mỹ */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sự Kết Hợp Hoàn Mỹ Giữa Kiến Trúc Và Phong Thủy
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Nghệ nhân Huế với sự khéo léo bẩm sinh đã tạo nên những công trình hòn non bộ phong thủy độc đáo. 
              Mỗi tác phẩm là sự hài hòa giữa kiến trúc hiện đại, kiến thức phong thủy sâu sắc và tài năng nghệ thuật.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-amber-900 mb-4 text-xl">Ba yếu tố tạo nên hòn non bộ phong thủy:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Kiến trúc hiện đại:</strong> Thiết kế phù hợp với không gian sống đương đại</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Kiến thức phong thủy:</strong> Bố trí hợp mệnh, mang lại vượng khí</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Tài năng nghệ nhân:</strong> Khéo léo tạo hình, tỉ mỉ trong từng chi tiết</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/traditional-vietnamese-rock-garden-landscape.jpg"
                  alt="Hài hòa và đối xứng"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Hài Hòa Và Đối Xứng</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/luxury-modern-koi-pond-villa-landscape.jpg"
                  alt="Tôn vinh nét đẹp khuôn viên"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Tôn Vinh Nét Đẹp Khuôn Viên</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Lợi ích phong thủy */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lợi Ích Phong Thủy Mà Hòn Non Bộ Mang Lại
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Với rất nhiều mẫu hòn non bộ đẹp tại Thiên Sơn, bạn sẽ không chỉ dễ dàng lựa chọn cho mình một hòn non bộ 
              như ý mà còn có được vật phẩm giúp gia chủ có được phong thủy tốt.
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-2xl">💰</span>
                  Mang Về Tài Lộc
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Hòn non bộ phong thủy với dòng nước chảy từ trên cao xuống tượng trưng cho dòng tài lộc tuôn đổ vào gia đình, 
                  mang lại sự thịnh vượng và giàu có.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-2xl">🏥</span>
                  Tốt Cho Sức Khỏe
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Không gian xanh mát với cây cỏ, nước chảy tạo môi trường trong lành, giúp thư giãn tinh thần, 
                  tốt cho sức khỏe cả gia đình.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-2xl">🍀</span>
                  May Mắn Và Bình An
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Hòn non bộ được bố trí đúng phong thủy sẽ mang lại may mắn, bình an cho gia đình, 
                  giúp mọi việc hanh thông.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Thủy nguyệt giao hòa */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hòn Non Bộ Thiên Sơn - Tác Phẩm Thủy Nguyệt Giao Hòa
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Hòn non bộ Thiên Sơn là một tác phẩm thủy nguyệt giao hòa với sự kết hợp giữa đá – sự rắn rỏi, 
              nước – Mang đến tài lộc cùng cỏ cây hoa lá tạo nên một hòn non bộ cùng núi non trùng điệp.
            </p>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
                Các Yếu Tố Trong Hòn Non Bộ Thiên Sơn
              </h3>
              
              <div className="space-y-8">
                {/* Đá */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm">🪨</span>
                    Đá - Sự Rắn Rỏi
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10">
                    Đá tượng trưng cho núi non hùng vĩ, mang ý nghĩa vững chắc, bền vững. 
                    Các nghệ nhân chọn đá tự nhiên đẹp, xếp đặt tạo thành núi non trùng điệp.
                  </p>
                </div>

                {/* Nước */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">💧</span>
                    Nước - Mang Đến Tài Lộc
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10">
                    Nước chảy từ trên cao xuống tượng trưng cho dòng tài lộc tuôn vào nhà, 
                    mang lại sự thịnh vượng. Thác nước tạo không gian thanh tịnh, thư giãn.
                  </p>
                </div>

                {/* Cây cỏ */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">🌿</span>
                    Cây Cỏ Hoa Lá
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10">
                    Cây xanh mang lại sức sống, tạo bức tranh thiên nhiên sinh động. 
                    Lựa chọn cây phù hợp phong thủy và dễ chăm sóc.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Chi tiết trang trí */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Chi Tiết Trang Trí Mô Tả Cuộc Sống
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Bên dưới là những cảnh vật trang trí mô tả cuộc sống thường nhật như cối đá, cầu đá, ông lão câu cá 
              theo ý muốn gia chủ. Những chi tiết này tạo nên câu chuyện riêng cho mỗi hòn non bộ.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🏯</div>
                <h4 className="font-bold text-gray-900 mb-3 text-center">Cối Đá - Cầu Đá</h4>
                <p className="text-gray-600 text-sm text-center">
                  Những chi tiết kiến trúc truyền thống, tạo nét đẹp cổ kính
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🎣</div>
                <h4 className="font-bold text-gray-900 mb-3 text-center">Ông Lão Câu Cá</h4>
                <p className="text-gray-600 text-sm text-center">
                  Hình ảnh thanh bình của cuộc sống điền viên
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🌊</div>
                <h4 className="font-bold text-gray-900 mb-3 text-center">Thác Nước</h4>
                <p className="text-gray-600 text-sm text-center">
                  Dòng nước tuôn chảy mang tài lộc vào nhà
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Bức tranh thiên nhiên */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bức Tranh Thiên Nhiên An Tĩnh Tuyệt Diệu
            </h2>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Hơn nữa, Đó là những thác nước chảy từ trên cao mang tài lộc tuôn đổ vào gia đình 
                tạo nên một bức tranh thiên nhiên an tĩnh tuyệt diệu.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏞️</span>
                    Thiên Nhiên Thu Nhỏ
                  </h4>
                  <p className="text-gray-600">
                    Mang cả thiên nhiên hùng vĩ vào không gian sống của bạn
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧘</span>
                    An Tĩnh Tuyệt Diệu
                  </h4>
                  <p className="text-gray-600">
                    Không gian thư giãn, thiền định, tìm về sự bình yên
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💎</span>
                    Tác Phẩm Nghệ Thuật
                  </h4>
                  <p className="text-gray-600">
                    Mỗi hòn non bộ là một tác phẩm nghệ thuật độc nhất
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    Tài Lộc Tuôn Vào
                  </h4>
                  <p className="text-gray-600">
                    Dòng nước từ trên cao mang tài lộc đến gia đình
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              MỘT SỐ HÌNH ẢNH HÒN NON BỘ PHONG THỦY
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Những tác phẩm hòn non bộ phong thủy tiêu biểu của Thiên Sơn
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <Image 
                    src="/traditional-vietnamese-rock-garden-landscape.jpg"
                    alt={`Hòn non bộ phong thủy ${i}`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/thu-vien-cong-trinh">
                <button className="px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-all hover:scale-105 shadow-xl">
                  Xem Thêm Tác Phẩm
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </section>

          

        </div>
      </div>
    </article>
  )
}