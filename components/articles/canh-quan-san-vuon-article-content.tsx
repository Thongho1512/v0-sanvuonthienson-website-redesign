"use client"

import { Calendar, User, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CanhQuanSanVuonArticleContent() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image 
          src="/24.jpg"
          alt="Cách thiết kế, bố trí cảnh quan sân vườn đẹp"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full mb-4 text-sm font-semibold">
              Cảnh Quan Sân Vườn
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Cách Thiết Kế, Bố Trí Cảnh Quan Sân Vườn Đẹp
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Nghệ Nhân Lê Anh
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                2.3K lượt xem
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
              Đối với một số gia đình, cảnh quan sân vườn không quá quan trọng và ít được chú ý đến. 
              Chính vì vậy thường mọi người muốn làm hòn non bộ, tiểu cảnh cầu thang nhiều hơn so với 
              vấn đề bài trí hoặc trang trí cảnh quan sân vườn.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Bài viết <strong className="text-emerald-600">"Cách thiết kế, bố trí cảnh quan sân vườn đẹp"</strong> mong 
              muốn sẽ mang đến cho các bạn những mẫu thiết kế cảnh quan sân vườn đẹp và khoa học.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/20.jpg"
              alt="Thiết kế cảnh quan sân vườn đẹp"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                Cảnh quan sân vườn đẹp và khoa học mang lại không gian sống lý tưởng
              </p>
            </div>
          </div>

          {/* Main Question */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Điều Gì Sẽ Làm Cho Một Công Trình Cảnh Quan Sân Vườn Đẹp?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Một cảnh quan sân vườn đẹp không chỉ đơn thuần là trồng cây, mà là sự kết hợp hài hòa 
              giữa vật liệu, cây cối, bố cục và không gian. Hãy cùng khám phá các yếu tố tạo nên 
              một sân vườn hoàn hảo.
            </p>
          </section>

          {/* Section 1: Vật liệu */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vật Liệu
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Cảnh quan sân vườn thường sử dụng vật liệu thân thuộc, gần gũi như gạch, đá, sỏi kết hợp với 
              các vật liệu cũ như kính, thép, nhôm, thậm chí một số gia đình còn thích mang những chiếc lu cũ, 
              xe đạp, chậu hoặc các sành sứ trang trí để khiến sân vườn mình phù hợp với phong cách cá nhân.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-emerald-900 mb-4 text-xl">Các loại vật liệu phổ biến:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Vật liệu tự nhiên:</strong> Gạch, đá, sỏi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Vật liệu tái chế:</strong> Kính, thép, nhôm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg"><strong>Đồ cũ trang trí:</strong> Lu cũ, xe đạp, chậu sành sứ</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Sự linh động về mặt vật liệu giúp cho cảnh quan sân vườn không giới hạn sự sáng tạo của mỗi gia đình. 
              Với nhiều cảnh quan mong muốn tạo thêm cả hòn non bộ, thác nước, hoặc hồ cá Koi bằng kính giúp cho 
              sân vườn của bạn có được tiếng động: tiếng róc rách của nước, sự lung linh của nước cùng sự tô điểm 
              của cây cảnh trang trí sẽ giúp không gian sân vườn của bạn thêm xanh và đầy sức sống.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/1.jpg"
                  alt="Vật liệu tự nhiên"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Vật Liệu Tự Nhiên - Gạch, Đá, Sỏi</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/11.jpg"
                  alt="Hồ cá Koi bằng kính"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Hồ Cá Koi Bằng Kính</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Xích đu, bàn ghế thậm chí cả hàng rào bằng hoa sẽ giúp sân vườn bạn có sự uyển chuyển, khỏe khoắn. 
              Những chất liệu khác chống trơn trượt như sơn sần, bê tông xen cỏ hoặc cát trắng phale được rất nhiều 
              gia đình yêu thích sử dụng.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Vật liệu chống trơn trượt:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <h4 className="font-bold text-gray-900 mb-2">Sơn Sần</h4>
                  <p className="text-gray-600 text-sm">An toàn, chống trơn</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🌿</div>
                  <h4 className="font-bold text-gray-900 mb-2">Bê Tông Xen Cỏ</h4>
                  <p className="text-gray-600 text-sm">Xanh mát, tự nhiên</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">⚪</div>
                  <h4 className="font-bold text-gray-900 mb-2">Cát Trắng Phale</h4>
                  <p className="text-gray-600 text-sm">Sạch sẽ, thẩm mỹ</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Cây cối và bố cục */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cây Cối Và Bố Cục
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Cảnh quan sân vườn thường không chú trọng đến thế cây, các cây cối trong sân vườn thường rất đơn giản 
              và thông dụng nhưng kết hợp cùng các bố cục sân vườn và Thiên Sơn sẽ tạo thành một bức tranh cảnh quan 
              sân vườn đẹp.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Những cây như tóc tiên, ngũ sắc, cúc lan, hồng môn … đều có thể kết hợp thành một khu vườn ấn tượng 
              và đầy màu sắc.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
                Các Loại Cây Phổ Biến Trong Sân Vườn
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌿</span>
                    Tóc Tiên
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Cây dễ trồng, tạo cảm giác mát mẻ, thích hợp cho không gian nhỏ
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌈</span>
                    Ngũ Sắc
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Mang lại màu sắc rực rỡ, tạo điểm nhấn cho sân vườn
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌸</span>
                    Cúc Lan
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Hoa đẹp, thơm nhẹ, dễ chăm sóc
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌺</span>
                    Hồng Môn
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Lá xanh tươi, hoa đỏ rực, mang ý nghĩa may mắn
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/9.jpg"
                  alt="Bố cục cây cối"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Bố Cục Cây Cối Hài Hòa</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/10.jpg"
                  alt="Khu vườn đầy màu sắc"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Khu Vườn Đầy Màu Sắc</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Không gian thiền định */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bố Trí Các Yếu Tố Thiền Định Và Thư Giãn
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Không gian yên tĩnh luôn khiến con người có cảm giác thư giãn. Chính vì vậy rất nhiều gia đình đã 
              kết hợp hòn non bộ và thác nước ở sân vườn của mình. Chính những cảnh quan sân vườn này sẽ giúp 
              gia đình có thêm những phút giây thư giãn cùng không gian tuyệt vời này.
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">
                Các Yếu Tố Tạo Không Gian Thiền Định
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">⛰️</span>
                    Hòn Non Bộ
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Tượng trưng cho núi non hùng vĩ, mang lại cảm giác bình yên và ổn định
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💧</span>
                    Thác Nước
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Tiếng nước róc rách tạo không gian thư thái, giúp giải tỏa stress
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🐟</span>
                    Hồ Cá Koi
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Cá bơi nhẹ nhàng, mang lại sự thư thái và may mắn
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌳</span>
                    Cây Xanh
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Tạo bóng mát, không khí trong lành, giúp thư giãn tinh thần
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image 
                src="/24.jpg"
                alt="Không gian thiền định"
                width={1200}
                height={600}
                className="w-full"
              />
              <div className="bg-gray-50 p-4 text-center">
                <p className="text-sm text-gray-600 italic">
                  Không gian thiền định với hòn non bộ và thác nước
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Lợi ích */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lợi Ích Của Cảnh Quan Sân Vườn Đẹp
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🏡</div>
                <h4 className="font-bold text-gray-900 mb-3 text-center">Tăng Giá Trị Ngôi Nhà</h4>
                <p className="text-gray-600 text-sm text-center">
                  Cảnh quan đẹp làm tăng giá trị thẩm mỹ và thương mại của bất động sản
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">💚</div>
                <h4 className="font-bold text-gray-900 mb-3 text-center">Tốt Cho Sức Khỏe</h4>
                <p className="text-gray-600 text-sm text-center">
                  Không gian xanh giúp giảm stress, cải thiện tâm trạng và sức khỏe
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 text-center">👨‍👩‍👧‍👦</div>
                <h4 className="font-bold text-gray-900 mb-3 text-center">Gắn Kết Gia Đình</h4>
                <p className="text-gray-600 text-sm text-center">
                  Tạo không gian sinh hoạt chung, gần gũi thiên nhiên
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}