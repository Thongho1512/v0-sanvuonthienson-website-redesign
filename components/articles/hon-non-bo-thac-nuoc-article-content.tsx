"use client"

import { Calendar, User, Eye, ArrowRight, Droplets, Mountain, TreeDeciduous, Sprout  } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HonNonBoThacNuocArticleContent() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image 
          src="/7.jpg"
          alt="Hòn non bộ thác nước"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full mb-4 text-sm font-semibold">
              Hòn Non Bộ Thác Nước
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hòn Non Bộ Thác Nước Và Những Lưu Ý Quan Trọng
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Nghệ Nhân Lê Anh
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                2.8K lượt xem
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
              <strong className="text-blue-700">Hòn Non Bộ thác nước kết hợp</strong> là một nghệ thuật mới trong việc 
              trang trí không gian xanh cho mỗi gia đình. Hòn Non Bộ là sự kết hợp giữa cây đá thiên nhiên từ những hòn 
              đá vàng, đá xanh, đá cuội, dưới tài hoa của những nghệ nhân kết hợp lại theo phong cách mới khi tạo thêm 
              thác nước, vừa mang lại sự tươi mát cho ngôi nhà vừa là điểm nhấn có ý nghĩa nghệ thuật cho gia chủ thưởng thức.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/8.jpg"
              alt="Hòn non bộ thác nước đẹp"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                Hòn non bộ thác nước - Sự kết hợp hoàn hảo giữa đá, nước và cây xanh
              </p>
            </div>
          </div>

          {/* Section 1: Đặc điểm hòn non bộ thác nước */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Đặc Điểm Của Hòn Non Bộ Thác Nước
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Hòn Non Bộ thác nước là sự kết hợp phóng khoáng hữu tình nhưng không kém phần đơn giản sang trọng 
              tôn thêm vẻ đẹp cho không gian gia đình. Tùy thuộc vào phong cách của gia chủ và kiến trúc ngôi nhà, 
              hòn non bộ thác nước sẽ mang lại cho người thưởng thức hòa mình vào không gian thư thái thỏa thích và 
              tinh thần sảng khoái minh mẫn hơn.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4 mx-auto">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">Thác Nước</h3>
                <p className="text-gray-700 text-center text-sm">
                  Dòng nước chảy tự nhiên tạo âm thanh thư giãn
                </p>
              </div>

              <div className="bg-gradient-to-br from-stone-50 to-gray-50 rounded-2xl p-6 border border-stone-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-stone-600 flex items-center justify-center mb-4 mx-auto">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3 text-center">Đá Thiên Nhiên</h3>
                <p className="text-gray-700 text-center text-sm">
                  Đá vàng, đá xanh, đá cuội được bố trí nghệ thuật
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-4 mx-auto">
                  <TreeDeciduous className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3 text-center">Cây Xanh</h3>
                <p className="text-gray-700 text-center text-sm">
                  Cây sanh, si, cần thăng, dương xỉ
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Cơ chế hoạt động */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cơ Chế Hoạt Động Của Thác Nước
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-2xl p-8 mb-8 border-2 border-blue-200">
              <p className="text-gray-800 leading-relaxed text-lg mb-6">
                Với cách tạo dòng nước bắt nguồn từ hòn núi cao nhất chảy dài xuống từng hòn nhỏ và lại đổ xuống hồ 
                tạo một dòng tuần hoàn của dòng chảy. Đặc trưng này sẽ hóa giải và tạo vận khí cho ngôi nhà.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Điểm Xuất Phát
                  </h3>
                  <p className="text-gray-700">
                    Nước bắt nguồn từ hòn núi cao nhất, biểu tượng cho sự thịnh vượng từ trên cao
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Dòng Chảy
                  </h3>
                  <p className="text-gray-700">
                    Nước chảy dài qua từng hòn đá nhỏ, tạo âm thanh du dương như thiên nhiên
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                    Hồ Nước
                  </h3>
                  <p className="text-gray-700">
                    Nước đổ xuống hồ, tạo điểm tụ tài lộc, năng lượng tích cực
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                    Tuần Hoàn
                  </h3>
                  <p className="text-gray-700">
                    Hệ thống bơm tuần hoàn đưa nước từ hồ lên cao, chu kỳ bất tận
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Một Số Mẫu Hòn Non Bộ Thác Nước Đẹp
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src="/14.jpg"
                    alt={`Hòn non bộ thác nước`}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src="/16.jpg"
                    alt={`Hòn non bộ thác nước`}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src="/25.jpg"
                    alt={`Hòn non bộ thác nước`}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src="/7.jpg"
                    alt={`Hòn non bộ thác nước`}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
            </div>
          </section>

          {/* Section 3: Lợi ích */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lợi Ích Của Hòn Non Bộ Thác Nước
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Bên cạnh đó hòn non bộ thác nước còn tạo nên góc sinh thái sinh động, màn xanh tươi mới cho tiểu cảnh gia đình.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-green-600 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-green-900 mb-3">🌿 Sinh Thái Xanh</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tạo không gian xanh mát, tươi mới với sự kết hợp hài hòa giữa đá, nước và cây cối
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-900 mb-3">💧 Tạo Độ Ẩm</h3>
                <p className="text-gray-700 leading-relaxed">
                  Thác nước giúp điều hòa độ ẩm không khí, mang lại cảm giác mát mẻ, dễ chịu
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-600 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-purple-900 mb-3">🎵 Âm Thanh Thư Giãn</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tiếng nước chảy róc rách giúp giảm stress, tạo không gian thiền định, thư giãn
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-amber-600 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-amber-900 mb-3">💰 Phong Thủy Tốt</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hóa giải vận khí xấu, tạo vận khí tốt, thu hút tài lộc cho gia đình
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Ý nghĩa */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ý Nghĩa Sâu Sắc Của Hòn Non Bộ Thác Nước
            </h2>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 mb-8">
              <p className="text-gray-800 leading-relaxed text-lg mb-6">
                Chính vẻ đẹp của đồi, của núi, của thác và cây đây chính là mối liên kết của các thành viên trong gia đình, 
                mang con người đến gần thiên nhiên và gần nhau hơn.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl mb-3">⛰️</div>
                  <h4 className="font-bold text-gray-900 mb-2">Núi - Đồi</h4>
                  <p className="text-gray-600 text-sm">Sức mạnh, bền vững, nương tựa</p>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl mb-3">💦</div>
                  <h4 className="font-bold text-gray-900 mb-2">Thác Nước</h4>
                  <p className="text-gray-600 text-sm">Dòng chảy cuộc sống, tài lộc</p>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl mb-3">🌳</div>
                  <h4 className="font-bold text-gray-900 mb-2">Cây Xanh</h4>
                  <p className="text-gray-600 text-sm">Sức sống, sinh khí, phát triển</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Cây được sử dụng */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Các Loại Cây Phù Hợp Cho Hòn Non Bộ Thác Nước
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Công ty sân vườn Thiên Sơn luôn luôn gợi mở cho khách hàng những ý tưởng nghệ thuật sáng tạo. Với sự lựa chọn 
              những cây <strong className="text-green-700">sanh, si, cần thăng, dương xỉ</strong> có độ thích nghi cao với 
              ánh sáng và điều kiện sống trong thời tiết hiện nay.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-6xl">🌲</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Cây Sanh</h3>
                  <p className="text-gray-600 text-sm">Biểu tượng của sự trường thọ, bền bỉ</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <span className="text-6xl">🌳</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Cây Si</h3>
                  <p className="text-gray-600 text-sm">Tạo bóng mát, mang lại sự bình yên</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
                  <Sprout className="w-20 h-20 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Cần Thăng</h3>
                  <p className="text-gray-600 text-sm">Cây phong thủy, thu hút vượng khí</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-green-300 to-emerald-400 flex items-center justify-center">
                  <span className="text-6xl">🌿</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Dương Xỉ</h3>
                  <p className="text-gray-600 text-sm">Thích nghi tốt, tạo điểm nhấn xanh</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-8">
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-green-800">Lưu ý:</strong> Tất cả các loại cây này đều có độ thích nghi cao với 
                ánh sáng và điều kiện sống trong thời tiết hiện nay, dễ chăm sóc và phù hợp với hầu hết các không gian.
              </p>
            </div>
          </section>

          {/* Section 6: Cam kết từ Thiên Sơn */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Cam Kết Từ Thiên Sơn
              </h2>
              
              <p className="text-xl mb-8 text-center text-blue-50">
                Hãy đến với chúng tôi sẽ mang đến sự gợi mở sáng tạo với tác phẩm hòn non bộ thác nước
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="font-bold text-xl mb-2">Sáng Tạo</h3>
                  <p className="text-blue-100 text-sm">Ý tưởng nghệ thuật độc đáo</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="font-bold text-xl mb-2">Nghệ Thuật</h3>
                  <p className="text-blue-100 text-sm">Bàn tay nghệ nhân lành nghề</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="font-bold text-xl mb-2">Chất Lượng</h3>
                  <p className="text-blue-100 text-sm">Cam kết chất lượng cao nhất</p>
                </div>
              </div>

              
            </div>
          </section>
        </div>
      </div>
      </article>
  )
}