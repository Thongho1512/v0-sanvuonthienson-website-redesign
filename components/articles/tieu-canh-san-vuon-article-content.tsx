"use client"

import { Calendar, User, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function TieuCanhSanVuonArticleContent() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image 
          src="/24.jpg"
          alt="Những thiết kế tiểu cảnh sân vườn độc đáo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full mb-4 text-sm font-semibold">
              Sân Vườn
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Những Thiết Kế Tiểu Cảnh Sân Vườn Độc Đáo
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">

              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Nghệ Nhân Lê Anh
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                1.8K lượt xem
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
              Những thiết kế tiểu cảnh sân vườn cầu kỳ, phức tạp đã (bị) thay thế bằng những thiết kế sân vườn tiểu cảnh 
              <strong className="text-emerald-600 font-bold"> đơn giản, gọn gàng</strong> nhưng vẫn sang trọng, tinh tế.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Không phải dọn dẹp quá nhiều nhưng vẫn giữ được không gian xanh cho gia đình. Với những diện tích nhỏ 
              nhưng những bản thiết kế tiểu cảnh sân vườn do Thiên Sơn gợi ý dưới đây vẫn có thể mang đến cho gia đình 
              bạn những góc sân vườn, góc nhà đẹp, đơn giản mang cây cối, sức sống và sự tinh tế cho cả căn nhà.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Thiết kế sân vườn đẹp đơn giản tập trung vào điểm nhấn chính trung tâm, có nhiều không gian trống giúp 
              không khí luân chuyển dễ dàng. Với cùng một không gian như nhau người biết lựa chọn thiết kế tiểu cảnh 
              sẽ tạo thêm điểm nhấn cho không gian sinh động, tươi mát và khá thú vị cho người thưởng thức sau một 
              ngày lao động vất vả.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/20.jpg"
              alt="Thiết kế tiểu cảnh sân vườn đơn giản"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                Thiết kế sân vườn tiểu cảnh đơn giản, sang trọng và tinh tế
              </p>
            </div>
          </div>

          {/* Section 1: Ý nghĩa tiểu cảnh */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ý Nghĩa Của Tiểu Cảnh Trong Không Gian Gia Đình
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Sau một ngày làm việc vất vả tất cả các thành viên trong gia đình cùng ngồi bên nhau cùng ngắm nhìn 
              và trò chuyện bên tiểu cảnh đơn giản và tuyệt đẹp sẽ tạo nên sự gắng kết trao đổi của các thành viên 
              trong gia đình.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-emerald-900 mb-4 text-xl">Lợi ích của tiểu cảnh sân vườn:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Tạo điểm nhấn cho không gian sống</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Mang lại sự tươi mát, sinh động</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Tạo không gian gắn kết gia đình</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Giúp thư giãn sau ngày làm việc căng thẳng</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Những Thiết Kế Tiểu Cảnh Sân Vườn Độc Đáo
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Lướt hình ảnh để xem thêm các thiết kế tiểu cảnh sân vườn khác nhé
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/26.png"
                  alt="Tiểu cảnh sân vườn 1"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="bg-gray-50 p-4">
                  <p className="text-sm text-gray-600 font-medium">Không gian sân vườn xanh mát</p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/21.jpg"
                  alt="Tiểu cảnh sân vườn 2"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="bg-gray-50 p-4">
                  <p className="text-sm text-gray-600 font-medium">Thiết kế hiện đại, tinh tế</p>
                </div>
              </div>

              

              
            </div>
          </section>

          {/* Section 2: Quy trình thiết kế */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quy Trình Thiết Kế Tiểu Cảnh Sân Vườn
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Bắt kịp mong ước đó khi lên kế hoạch thiết kế tiểu cảnh người nghệ nhân phải tham khảo nhu cầu khách hàng 
              và không gian bố trí, hướng đặt tiểu cảnh sao cho hòa hợp với phong thủy gia chủ.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Sau đó lên kế hoạch thiết kế mẫu và trình bày ý nghĩa của từng đường nét thiết kế cho gia chủ có sự lựa 
              chọn tốt nhất.
            </p>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">
                Ví Dụ Thiết Kế Cho Nhà Phố
              </h3>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Ví dụ như những nhà phố có không gian sân vườn lớn, với những bản thiết kế tiểu cảnh sân vườn sẽ cố 
                tính mang đến các loại cây thân lớn, che mát nhưng không rụng lá quá nhiều, dễ dọn như cây sake…, 
                Kết hợp cùng hàng rào hiện đại sẽ nhấn được những mảng xanh mát lạnh và cây cối làm sân vườn thoáng 
                mát hơn.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">🌿 Cây Xanh</h4>
                  <p className="text-gray-600 text-sm">Cây thân lớn che mát, không rụng lá nhiều</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Hòn Non Bộ</h4>
                  <p className="text-gray-600 text-sm">Điểm nhấn nghệ thuật cho sân vườn</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">🏡 Hàng Rào</h4>
                  <p className="text-gray-600 text-sm">Thiết kế hiện đại, hài hòa</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Ý tưởng thiết kế */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ý Tưởng Thiết Kế Độc Đáo
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image 
                      src="/32.jpg"
                      alt="Góc cafe tại nhà"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      ☕ Mang Góc Cafe Về Nhà
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Mang 1 góc nhỏ của quán cafe bạn yêu thích về nhà, sao lại không nhỉ? 
                      Tạo không gian thư giãn ngay tại nhà với thiết kế tiểu cảnh độc đáo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex flex-row-reverse">
                  <div className="md:w-1/2">
                    <Image 
                      src="/30.jpg"
                      alt="Mảng xanh mát"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      🌿 Mảng Xanh Mát Lạnh
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Hay những mảng xanh mát lạnh tạo nên không gian thư thái, giúp giảm stress 
                      và mang lại sự bình yên cho tâm hồn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image 
                      src="/10.jpg"
                      alt="Sỏi đá"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Sỏi Đá Đáng Yêu
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Một chút sỏi đá đáng yêu thì sao nhỉ? Tạo điểm nhấn tinh tế, tăng thêm 
                      vẻ đẹp tự nhiên cho khu vườn của bạn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Phong thủy */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Yếu Tố Phong Thủy Trong Thiết Kế
            </h2>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Ngoài ra còn có hướng đặt hòn non bộ cùng hướng dòng nước chảy làm sao tương thích với tuổi tác 
                bổn mạng của mỗi người. <strong className="text-amber-800">Thiết kế tiểu cảnh sân vườn luôn là một 
                nghệ thuật</strong> mang đến vận khí may mắn cho gia đình và mang lại hài hòa cho các thành viên.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧭</span>
                    Hướng Đặt Hòn Non Bộ
                  </h4>
                  <p className="text-gray-600">Tính toán dựa trên tuổi tác và bổn mạng của gia chủ</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💧</span>
                    Hướng Dòng Nước
                  </h4>
                  <p className="text-gray-600">Đảm bảo hài hòa, mang lại vận khí tốt</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌳</span>
                    Lựa Chọn Cây Cảnh
                  </h4>
                  <p className="text-gray-600">Chọn cây phù hợp với mệnh và không gian</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    Sự Hài Hòa
                  </h4>
                  <p className="text-gray-600">Tạo cân bằng cho mọi thành viên trong gia đình</p>
                </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </article>
  )
}