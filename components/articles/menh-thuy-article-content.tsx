"use client"

import { Calendar, User, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MenhThuyArticleContent() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image 
          src="/traditional-vietnamese-rock-garden-landscape.jpg"
          alt="Lưu ý quan trọng khi thiết kế hòn non bộ cho người mệnh thủy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full mb-4 text-sm font-semibold">
              Phong Thủy Mệnh Thủy
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Lưu Ý Quan Trọng Khi Thiết Kế Hòn Non Bộ Cho Người Mệnh Thủy
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
              Vấn đề bài trí hay thiết kế hòn non bộ cho người mệnh thủy có tầm ảnh hưởng lớn đến vận khí của 
              chủ nhà và toàn bộ thành viên trong gia đình. Thậm chí đến các công trình hòn non bộ dành cho 
              địa điểm kinh doanh cũng quan trọng không kém.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Với riêng những người mệnh thủy thường so sánh họ với mùa đông hoặc là nước nói chung. Dù mệnh khí 
              của họ mạnh hay yếu như là cơn mưa lất phất hay là bão lớn thì người mệnh thủy đều liên quan đến 
              mọi thứ xung quanh.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-blue-900 mb-4 text-xl">Đặc điểm người mệnh Thủy:</h3>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                "Người mạng Thủy giao tiếp tốt. Họ có khiếu ngoại giao và tài thuyết phục. Do nhạy cảm với 
                tâm trạng người khác, họ sẵn sàng lắng nghe. Có trực giác tốt và giỏi thương lượng. Uyển chuyển 
                và dễ thích nghi, họ nhìn sự vật theo quan điểm tổng thể."
              </p>
              <p className="text-sm text-gray-600 mt-3 italic">
                (Trích từ sách Thiên Thời Địa Lợi Nhân Hòa)
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Ở một khía cạnh tích cực, người mệnh thủy cần tăng cường tính nuôi dưỡng, hỗ trợ tích cực. 
              Ở mặt tiêu cực, Thủy thể hiện sự hao mòn và kiệt quệ. Tùy vào bố cục và không gian của 
              gia đình / nơi kinh doanh mà những lưu ý khi thiết kế hòn non bộ cho người mệnh thủy cần 
              lưu ý những vấn đề sau:
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/traditional-vietnamese-rock-garden-landscape.jpg"
              alt="Hòn non bộ phong thủy cho người mệnh thủy"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                Thiết kế hòn non bộ hợp phong thủy cho người mệnh thủy
              </p>
            </div>
          </div>

          {/* Section 1: Không gian hòn non bộ */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Không Gian Hòn Non Bộ Cần Thiết Thuận Lợi Cho Người Mệnh Thủy
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Không gian hòn non bộ cho người mệnh thủy làm sao cho tốt, đặt vị trí như thế nào và kích thước 
              bao nhiêu để đỡ mất mát, sự hao mòn.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 border border-blue-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🏗️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Tư Vấn Từ Thiên Sơn
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Với Thiên Sơn, không có một công thức chung nào có thể áp dụng chung cho tất cả những 
                    người mệnh thủy muốn làm hòn non bộ. Chính vì vậy khi nhận các công trình hòn non bộ, 
                    Thiên Sơn đều phải đích thân đến tận nơi, tư vấn, nắm bắt vị trí cũng như lấy ý và 
                    sở thích của khách hàng để lên bản vẽ.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all">
                <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">1</span>
                  Cân đối không gian
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg pl-13">
                  Không gian lớn nhưng gia đình nhỏ sẽ khác với việc đặt hòn non bộ ở không gian nhỏ hơn, 
                  phù hợp hơn với số người trong gia đình và ngũ hành hòn non bộ.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all">
                <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">2</span>
                  Bài trí tiểu cảnh trang trí
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg pl-13">
                  Vấn đề bài trí các tiểu cảnh trang trí bằng gỗ, kim loại, sành sứ sẽ tùy thuộc vào ý muốn, 
                  tuổi, mệnh, số lượng người trong gia đình / quán kinh doanh và ý thích của người chủ nhà.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Vị trí đặt hòn non bộ */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vị Trí Đặt Hòn Non Bộ Cũng Rất Quan Trọng
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Hòn non bộ ngoài trời và hòn non bộ trong nhà luôn có ý nghĩa khác nhau. Xét riêng về vấn đề 
              phong thủy, việc xác định mục đích của gia chủ khi làm hòn non bộ cho người mệnh thủy như để 
              kích hoạt tài lộc, an bình, sức khỏe hay thậm chí hỗ trợ đường tình duyên cũng sẽ ảnh hưởng 
              đến bố cục.
            </p>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 mb-8 border border-cyan-200">
              <h3 className="text-2xl font-bold text-cyan-900 mb-6 text-center">
                Các Yếu Tố Ảnh Hưởng Đến Bố Cục
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🐟</span>
                    Số lượng cá trong hồ Koi
                  </h4>
                  <p className="text-gray-600 text-sm">Ảnh hưởng đến vận khí và tài lộc của gia đình</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌳</span>
                    Cây cối trang trí
                  </h4>
                  <p className="text-gray-600 text-sm">Chọn loại cây phù hợp với mệnh và không gian</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💧</span>
                    Hướng nước chảy
                  </h4>
                  <p className="text-gray-600 text-sm">Quyết định dòng vận khí đi vào hay ra khỏi nhà</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧭</span>
                    Hướng đặt hòn non bộ
                  </h4>
                  <p className="text-gray-600 text-sm">Bắc, Đông Bắc, Tây, Tây Bắc là hướng tốt</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Các yếu tố đó sẽ rất tốt và tăng trường khí cho gia đình.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/traditional-vietnamese-rock-garden-landscape.jpg"
                  alt="Hòn non bộ ngoài trời"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Hòn Non Bộ Ngoài Trời</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/luxury-modern-koi-pond-villa-landscape.jpg"
                  alt="Hòn non bộ trong nhà"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Hòn Non Bộ Trong Nhà</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Bố cục hòn non bộ */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bố Cục Hòn Non Bộ Cho Người Mệnh Thủy Có Gì Khác?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Hòn non bộ kết hợp thác nước cho người mệnh thủy sẽ có tiếng róc rách, thác đổ tuôn trào hay 
              yên ả phụ thuộc hoàn toàn vào bố cục hòn non bộ.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-emerald-900 mb-4 text-xl">
                Cây trồng nên chọn cho hòn non bộ mệnh thủy:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">🌿</span>
                  <span className="text-gray-700 text-lg">Cây lan ý - mang ý nghĩa tốt lành</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">🌿</span>
                  <span className="text-gray-700 text-lg">Cây cọ Nhật - sang trọng, bền bỉ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">🌿</span>
                  <span className="text-gray-700 text-lg">Cây thanh tâm - thanh lọc không khí</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">🌿</span>
                  <span className="text-gray-700 text-lg">Cây lộc nhung - hút tài lộc</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">🌿</span>
                  <span className="text-gray-700 text-lg">Cây phát tài khúc - phát tài phát lộc</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">🌿</span>
                  <span className="text-gray-700 text-lg">Cây vạn niên tùng - trường tồn, bền vững</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Hình Dạng Bể Nước Nuôi Cá
              </h3>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Bể nước nuôi cá thì nên xây hình tròn, hình chữ nhật hoặc hình vuông sẽ tốt. 
                Các chi tiết này Thiên Sơn sẽ tư vấn hỗ trợ khi gặp trực tiếp khách hàng.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="text-4xl mb-3">⭕</div>
                  <h4 className="font-bold text-gray-900 mb-2">Hình Tròn</h4>
                  <p className="text-sm text-gray-600">Biểu tượng viên mãn, đủ đầy</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="text-4xl mb-3">▭</div>
                  <h4 className="font-bold text-gray-900 mb-2">Hình Chữ Nhật</h4>
                  <p className="text-sm text-gray-600">Ổn định, vững chắc</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <div className="text-4xl mb-3">◻️</div>
                  <h4 className="font-bold text-gray-900 mb-2">Hình Vuông</h4>
                  <p className="text-sm text-gray-600">Cân bằng, điều hòa</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Số lượng cá và hướng đặt */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Số Lượng Cá Nuôi Và Hướng Đặt Non Bộ
            </h2>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 mb-8 border border-orange-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🐠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-900 mb-3">
                    Số Lượng Cá May Mắn
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Số lượng cá nuôi trong hồ có thể nuôi nhiều loài nhưng chúng phải hòa hợp với nhau, 
                    gia chủ có thể nuôi từ <strong className="text-orange-800">1 đến 6 con cá</strong> trong hồ, 
                    số lượng cá như thế sẽ mang may mắn, tài lộc đến với căn nhà, làm cho giả sơn hoàn mỹ hơn.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div key={num} className="bg-white rounded-lg p-3 text-center shadow-sm">
                        <div className="text-2xl font-bold text-orange-600">{num}</div>
                        <div className="text-xs text-gray-600">con cá</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6">
                Hướng Đặt Non Bộ Tốt
              </h3>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Về vị trí đặt non bộ thì nên đặt các hướng <strong className="text-green-800">Bắc, Đông Bắc, 
                Tây, Tây Bắc</strong>. Đây là những hướng mà vượng khí tăng cao, giúp gia đình ấm êm, hòa thuận, 
                người già khỏe mạnh, người trẻ thông minh, sáng suốt.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧭</span>
                    Hướng Bắc
                  </h4>
                  <p className="text-gray-600 text-sm">Mệnh Thủy vượng, thu hút tài lộc</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧭</span>
                    Hướng Đông Bắc
                  </h4>
                  <p className="text-gray-600 text-sm">Tăng cường sức khỏe, trí tuệ</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧭</span>
                    Hướng Tây
                  </h4>
                  <p className="text-gray-600 text-sm">Hỗ trợ con cái, gia đình hạnh phúc</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧭</span>
                    Hướng Tây Bắc
                  </h4>
                  <p className="text-gray-600 text-sm">Quý nhân phù trợ, sự nghiệp thăng tiến</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong className="text-blue-900">💡 Lưu ý:</strong> Đó là một trong số các nguyên tắc khi 
                tư vấn thiết kế hòn non bộ cho người mệnh Thủy. Tuy nhiên, mỗi trường hợp cụ thể cần được 
                tư vấn chi tiết dựa trên tuổi, mệnh và không gian thực tế.
              </p>
            </div>
          </section>

          {/* Section 5: Lời kết */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cuối Cùng
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Dù cho mục đích làm hòn non bộ của bạn chỉ là để trang trí thêm cho ngôi nhà / nơi kinh doanh 
                của bạn đi chăng nữa, không xét về vấn đề hòn non bộ phong thủy cho người mệnh thủy. Thì việc 
                hoàn thành một công trình hòn non bộ phong thủy kích hoạt là một điều quan trọng, đáng lưu ý.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Bên cạnh đó, trong quá trình thi công, các vấn đề về thấm nước, gió thổi nước tạt vào nhà, 
                vào khách…, cây cỏ trang trí khi phát triển ảnh hưởng đến hòn non bộ cũng là các vấn đề 
                đáng lưu tâm. Những vấn đề này liên quan đến đơn vị thi công hòn non bộ uy tín.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl p-8 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-4">
                  THIÊN SƠN NHẬN THIẾT KẾ, THI CÔNG
                </h3>
                <p className="text-xl text-emerald-100">
                  Các công trình Hòn Non Bộ, Thác Nước, Hồ Cá Koi, Tiểu Cảnh
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Nghệ Nhân LÊ ANH</h4>
                    <p className="text-emerald-100 leading-relaxed">
                      Hơn 10 năm trong nghề sẵn sàng tư vấn, hỗ trợ các bạn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Hình Ảnh Công Trình Hòn Non Bộ Cho Người Mệnh Thủy
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Một số công trình tiêu biểu đã thi công
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <Image 
                    src="/traditional-vietnamese-rock-garden-landscape.jpg"
                    alt={`Hòn non bộ mệnh thủy ${i}`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/thu-vien-cong-trinh">
                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-xl">
                  Xem Thêm Công Trình
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

