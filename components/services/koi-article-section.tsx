"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function KoiArticleSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* H1 - Từ khóa chính */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            THI CÔNG HỒ CÁ KOI ĐẸP CHUYÊN NGHIỆP TẠI TP.HCM
          </h1>

          {/* Introduction - Natural keyword placement */}
          <div className={`mb-12 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200`}>
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              Bạn đang tìm kiếm một đơn vị <strong className="text-emerald-600">thiết kế thi công hồ cá koi</strong> chuyên nghiệp, uy tín? 
              <strong className="text-emerald-600"> SÂN VƯỜN THIÊN SƠN</strong> chính là lựa chọn hoàn hảo dành cho bạn.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Chúng tôi tự hào là đơn vị <strong>thi công hồ cá koi</strong> hàng đầu tại TP.HCM và các tỉnh thành phía Nam với hơn <strong>15 năm kinh nghiệm</strong>. 
              Đội ngũ kiến trúc sư, thợ thi công lành nghề cùng nghệ nhân <strong>Lê Anh</strong> luôn tận tâm mang đến cho gia chủ những 
              <strong> hồ cá koi đẹp</strong>, hoàn hảo nhất.
            </p>
          </div>

          {/* Video Section - SEO optimized */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl bg-black">
            <video
              width={1200}
              height={675}
              className="w-full h-auto"
              autoPlay
              muted
              loop
              aria-label="Video thực tế thi công hồ cá Koi - Thiên Sơn Landscape"
            >
              <source src="/video/7.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video HTML5.
            </video>
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                🎥 Video thực tế công trình <strong>thi công hồ cá Koi đẹp</strong> - Chất lượng cao, độ bền lâu dài
              </p>
            </div>
          </div>

          {/* Featured Image - SEO */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/15.jpg"
              alt="Thiết kế hồ cá koi đẹp, hợp phong thủy - Thiên Sơn"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                ✨ <strong>Thiết kế sân vườn hồ cá Koi</strong> - Tạo dấu ấn cá nhân với dịch vụ chất lượng cao
              </p>
            </div>
          </div>

          {/* Section 1: Tại sao hồ cá Koi được ưa chuộng - H2 với từ khóa */}
          <section className="mb-12" id="tai-sao-ho-ca-koi-duoc-ua-chuong">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              TẠI SAO NÊN <span className="text-emerald-600">THIẾT KẾ HỒ CÁ KOI</span> CHO SÂN VƯỜN?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              <strong>Hồ cá Koi</strong> là một điểm nhấn quan trọng trong <strong>thiết kế cảnh quan sân vườn</strong>, 
              mang đến vẻ đẹp tĩnh lặng và sự hài hòa mà không một tín đồ yêu thiên nhiên nào có thể bỏ qua. 
              Cá Koi, xuất phát từ Nhật Bản, là biểu tượng của sự may mắn, phú quý và có tuổi thọ cao.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              <strong>Hồ cá Koi</strong> không chỉ là nét đặc sắc thẩm mỹ, mà còn đem lại cảm giác thư thái và yên bình, 
              kết nối con người với thiên nhiên. <strong>Thiết kế thi công hồ cá Koi</strong> trong sân vườn của bạn để tận hưởng 
              sự thanh lọc tinh thần và vẻ đẹp vĩnh cửu.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-emerald-900 mb-4 text-xl">✅ Lợi ích khi <strong>làm hồ cá koi</strong> tại nhà:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Gia tăng tính thẩm mỹ, đẳng cấp cho ngôi nhà</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Mang lại tài lộc, may mắn theo phong thủy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Không khí trong lành, nâng cao sức khỏe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Không gian thư giãn giảm stress</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/26.png"
                  alt="Hồ cá koi sân vườn - Không gian sống cùng thiên nhiên"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">🏡 Không Gian Sống Cùng Thiên Nhiên</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/22.jpg"
                  alt="Hồ cá koi quán cafe - Bình yên giữa lòng phố thị"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">☕ Bình Yên Giữa Lòng Phố Thị</p>
                </div>
              </div>
            </div>
          </section>
          {/* Section 2: Yếu tố phong thủy - SEO H2 */}
          <section className="mb-12" id="phong-thuy-ho-ca-koi">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              CÁC YẾU TỐ PHONG THỦY KHI <span className="text-emerald-600">THIẾT KẾ HỒ CÁ KOI</span>
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Không chỉ giúp không gian sống trở nên sinh động hơn mà <strong>hồ koi</strong> còn mang tới <strong>vượng khí phong thủy</strong> cho gia chủ. 
              Bởi khi <strong>thiết kế hồ koi</strong> cần phải tuân thủ một số nguyên tắc về phong thủy, đặc biệt cá koi là "Quốc Ngư" 
              sẽ đem tới sự may mắn, tài lộc cho gia đình bạn.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg font-semibold">
              💡 Lưu ý các yếu tố sau khi <strong>thiết kế thi công hồ cá koi</strong>:
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">1</span>
                  Vị trí bố trí hồ cá Koi hợp phong thủy
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Hãy đặt <strong>hồ cá koi</strong> ở vị trí tối ưu, ví dụ như phía Đông hoặc Đông Nam để tận dụng ánh nắng sớm, 
                  tượng trưng cho sự sáng sủa và tươi mới. Để tránh ánh nắng chiều tây, có thể sử dụng cỏ cây hoặc bóng râm. 
                  <strong className="text-emerald-600"> Trang trí hồ cá koi</strong> kết hợp với <strong>hòn non bộ</strong> sẽ tạo điểm nhấn hoàn hảo.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">2</span>
                  Số lượng cá Koi trong hồ theo phong thủy
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Số lượng cá Koi trong <strong>hồ cá koi mini</strong> hay hồ lớn cần được tính toán dựa trên diện tích và dung tích hồ. 
                  Chọn những con số mang ý nghĩa tài lộc (1, 6, 8, 9 con), tránh quá nhiều để đảm bảo cá Koi có không gian thoải mái 
                  và phát triển khỏe mạnh.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">3</span>
                  Màu sắc của cá Koi hợp mệnh
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Màu sắc của cá Koi trong hồ có thể được lựa chọn dựa trên nguyên tắc của ngũ hành, ví dụ, màu đỏ 
                  tượng trưng cho hỏa, màu đen cho thủy, và màu vàng cho kim. Sự kết hợp này mang ý nghĩa <strong>phong thủy hồ cá koi</strong>, 
                  tạo nên sự cân bằng trong không gian.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Quy trình thiết kế - SEO H2 */}
          <section className="mb-12" id="quy-trinh-thiet-ke-thi-cong">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              QUY TRÌNH <span className="text-emerald-600">THIẾT KẾ THI CÔNG HỒ CÁ KOI</span>
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Quy trình khảo sát, tư vấn tận nhà giúp <strong>Thiên Sơn</strong> hiểu rõ hơn về kích thước, không gian, chất liệu và 
              mệnh của chủ nhà. Từ đó đảm bảo việc tư vấn – <strong>thiết kế hồ KOI</strong> tiết kiệm nhất cho gia chủ.
            </p>

            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/quy-trinh-thiet-ke-thi-cong-ho-ca-koi-tai-thien-son.png"
                alt="Quy trình thiết kế thi công hồ cá Koi tại Thiên Sơn - 6 bước chuyên nghiệp"
                width={1200}
                height={800}
                className="w-full"
              />
              <div className="bg-gray-50 p-4 text-center">
                <p className="text-sm text-gray-600 italic">
                  📋 <strong>Quy trình thiết kế thi công hồ cá Koi</strong> chuyên nghiệp 4 bước
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
                ⭐ Tiêu Chí <strong>Thiết Kế Hồ Cá Koi Đẹp</strong> Đạt Chuẩn
              </h3>
              
              <div className="space-y-8">
                {/* Chất lượng nước */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Chất lượng nước trong hồ cá koi
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10">
                    Nước trong hồ chất lượng tốt là điều kiện quan trọng để cá koi sinh trưởng và phát triển khỏe mạnh. 
                    Nước cần phải trong, không vẩn đục, ít rêu và không mang mầm bệnh. Độ pH lý tưởng cần duy trì là trong khoảng 7 – 7.5. 
                    <strong className="text-emerald-600"> Lắp đặt hồ cá koi</strong> cần đi kèm hệ thống lọc nước chuyên dụng.
                  </p>
                </div>

                {/* Kích thước hồ */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Kích thước hồ cá koi tiêu chuẩn
                  </h4>
                  <div className="pl-10 space-y-3">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong>📏 Về chiều dài:</strong> tối thiểu 2m (đối với <strong>hồ cá koi mini</strong> có thể từ 1.5m)
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong>📏 Về chiều rộng:</strong> tối thiểu 0.8 – 1m
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong>📏 Về độ sâu:</strong> tùy kích thước của loại cá nuôi mà độ sâu cũng phải cân bằng để đàn cá 
                      bơi lội thoải mái. Đối với các loại cá koi kích thước nhỏ cần độ sâu hồ tối thiểu là 0.6m. 
                      Còn đối với loại cá có kích thước trung bình và lớn thì cần độ sâu từ 0.8 – 1.6m là thích hợp.
                    </p>
                  </div>
                </div>

                {/* Hình dáng hồ */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                    Hình dáng thiết kế hồ cá koi đẹp
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10 mb-4">
                    Có rất nhiều <strong>mẫu hồ cá koi đẹp</strong> với các hình dáng khác nhau: hình chữ nhật, hình tròn, hình bầu dục, 
                    hình tự nhiên... Tùy thuộc vào không gian, sở thích của gia chủ mà các kiến trúc sư có thể sáng tạo ra các hình dáng phù hợp. 
                    <strong className="text-emerald-600"> Xây hồ cá koi</strong> theo phong cách hiện đại hay cổ điển đều có thể.
                  </p>
                  
                  <div className="mb-6 rounded-2xl overflow-hidden shadow-2xl pl-10">
                    <Image 
                      src="/hinh-dang-thiet-ke-ho-ca-Koi.jpeg"
                      alt="Các mẫu hình dáng thiết kế hồ cá KOI đẹp"
                      width={800}
                      height={530}
                      className="w-full"
                    />
                    <div className="bg-gray-50 p-4 text-center">
                      <p className="text-sm text-gray-600 italic">
                        🎨 Các mẫu <strong>hình dáng hồ cá KOI đẹp</strong> phổ biến hiện nay
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vị trí */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                    Vị trí thi công hồ cá koi
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10">
                    <strong>Hồ cá koi</strong> có thể <strong>thiết kế và thi công</strong> tại bất cứ vị trí nào trong công trình: 
                    trong nhà, ngoài trời, sân thượng, ban công. <strong className="text-emerald-600">Thiết kế hồ cá koi ngoài trời</strong> phổ biến nhất 
                    vì thuận lợi cho cá phát triển và dễ bảo trì. <strong>Thiết kế hồ cá koi sân vườn</strong> kết hợp với tiểu cảnh, 
                    hòn non bộ tạo không gian xanh mát.
                  </p>
                </div>

                {/* Kết cấu */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
                    Kết cấu và vật liệu làm hồ cá koi
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10 mb-4">
                    Kết cấu của một <strong>hồ cá koi</strong> rất quan trọng. Bởi nó quyết định độ ổn định và chi phí khi hoàn thiện. 
                    Các vật liệu dùng <strong>làm hồ cá koi</strong> phổ biến là:
                  </p>
                  <ul className="space-y-3 pl-10">
                    <li className="text-gray-700 text-lg flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">→</span>
                      <div>
                        <strong>Bê tông cốt thép:</strong> áp dụng cho các hồ cá trung bình và lớn, độ ổn định cao. 
                        Loại này được sử dụng phổ biến nhất trong <strong>thi công hồ cá koi</strong> tuy nhiên chi phí khá cao.
                      </div>
                    </li>
                    <li className="text-gray-700 text-lg flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">→</span>
                      <div>
                        <strong>Xây gạch:</strong> độ ổn định ở mức trung bình. Chi phí <strong>xây hồ cá koi</strong> khá rẻ 
                        nhưng cần thợ thi công có kinh nghiệm và tay nghề cao.
                      </div>
                    </li>
                    <li className="text-gray-700 text-lg flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">→</span>
                      <div>
                        <strong>Bạt cao su:</strong> thi công nhanh và dễ, cải tạo nhanh chóng nhưng độ ổn định thấp. 
                        Thích hợp cho <strong>hồ cá koi mini</strong>.
                      </div>
                    </li>
                    <li className="text-gray-700 text-lg flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">→</span>
                      <div>
                        <strong>Kính cường lực:</strong> thi công phức tạp, cần yêu cầu kỹ thuật. Thường áp dụng cho 
                        <strong> hồ cá koi trong nhà</strong>.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Section 4: Cam kết - SEO H2 */}
          <section className="mb-12" id="cam-ket-chat-luong">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              CAM KẾT KHI LỰA CHỌN <span className="text-emerald-600">THIẾT KẾ THI CÔNG HỒ CÁ KOI</span> TẠI THIÊN SƠN
            </h2>
            
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl p-8 mb-8">
              <p className="text-xl mb-6 font-semibold">
                Với hơn 200 mẫu <strong>thiết kế thi công hồ cá koi</strong> thực tế trên khắp miền Nam, 
                <strong className="font-bold"> SÂN VƯỜN THIÊN SƠN</strong> cam kết làm hài lòng mọi gia chủ.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg">Nghệ nhân <strong>Lê Anh</strong> trực tiếp Khảo Sát – Tư Vấn tận nơi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg"><strong>Thiết kế mẫu 3D</strong> theo yêu cầu trước khi thi công</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg"><strong>Thi công hồ cá koi</strong> chuẩn theo bản vẽ thiết kế</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg"><strong>Lắp đặt hệ thống lọc</strong>, xử lý nước hiện đại tiết kiệm điện</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg">Mẫu công trình <strong>hồ cá koi đẹp</strong>, độc đáo, xu hướng hiện đại</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg"><strong>Bảo hành 10 năm</strong>, bảo trì định kỳ miễn phí</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">👨‍🔧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Nghệ Nhân Lê Anh - Chuyên Gia Hồ Cá Koi</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Với hơn <strong>15 năm kinh nghiệm</strong> và hơn <strong>200 mẫu thiết kế</strong> 
                    <strong> thi công hồ cá koi</strong> – <strong>hòn non bộ</strong> – 
                    <strong> sân vườn hồ cá koi</strong> – <strong>tiểu cảnh sân vườn</strong> trên khắp cả nước.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                <strong>Thiết Kế Thi Công Hồ Cá Koi THIÊN SƠN</strong> tự hào đã triển khai thi công thực tế nhiều công trình 
                <strong> tiểu cảnh sân vườn biệt thự</strong> – sự tin tưởng từ anh chị nghệ sĩ và những người chơi tiểu cảnh 
                cực kỳ say đắm <strong>hồ cá koi đẹp</strong>, kết hợp yếu tố <strong>phong thủy</strong> mang đến cho gia chủ 
                sự tài lộc, thịnh vượng, may mắn và thuận hòa.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Bên cạnh đó, ở gần một <strong>hồ cá Koi</strong> các bạn cảm thấy không gian rất thoải mái, hòa mình vào thiên nhiên. 
                <strong className="text-emerald-600"> Trang trí hồ cá koi</strong> kết hợp với <strong>hòn non bộ</strong> và 
                cây xanh sẽ tạo nên không gian sống lý tưởng.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Giờ đây, việc sở hữu một <strong>hồ cá Koi đẹp</strong> không còn quá khó, giá cả cũng phải chăng hơn rất nhiều. 
                Tuy nhiên, vì vấn đề <strong>thiết kế, thi công hồ cá Koi</strong> luôn cần đến bàn tay của những nhà thiết kế 
                chuyên nghiệp để tránh những rủi ro có thể phát sinh trong quá trình chăm sóc.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-center text-white mt-8">
              <h3 className="text-2xl font-bold mb-4">
                🎯 BẠN MUỐN <span className="text-yellow-300">THIẾT KẾ HỒ CÁ KOI ĐẸP</span> CHO NHÀ MÌNH?
              </h3>
              <p className="text-lg mb-6">
                Liên hệ ngay với Thiên Sơn để được <strong>TƯ VẤN MIỄN PHÍ</strong> và nhận <strong>BÁO GIÁ TỐT NHẤT</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0938386679"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-all hover:scale-105 shadow-xl"
                >
                  📞 Hotline: 0938 386 679
                </a>
                <a 
                  href="https://zalo.me/0938386679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all hover:scale-105 shadow-xl"
                >
                  💬 Chat Zalo Ngay
                </a>
              </div>
            </div>
          </section>

          {/* Gallery Section - SEO với từ khóa */}
          <section className="mb-12" id="hinh-anh-ho-ca-koi">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              HÌNH ẢNH <span className="text-emerald-600">THI CÔNG HỒ CÁ KOI ĐẸP</span> THỰC TẾ
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
              🏆 Nghệ nhân <strong>Lê Anh</strong> - Hơn 15 năm kinh nghiệm trực tiếp khảo sát, tư vấn
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/16.jpg"
                  alt="Hồ cá Koi sân vườn đẹp - Thiên Sơn Landscape"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm font-semibold text-gray-700">Hồ Cá Koi Sân Vườn</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/33.jpg"
                  alt="Thiết kế hồ cá koi đẹp kết hợp hòn non bộ"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm font-semibold text-gray-700">Hồ Koi + Hòn Non Bộ</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Image 
                  src="/23.jpg"
                  alt="Hồ cá koi mini đẹp cho sân vườn nhỏ"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm font-semibold text-gray-700">Hồ Cá Koi Mini</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/thu-vien-cong-trinh">
                <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all hover:scale-105 shadow-xl">
                  Xem Thêm 200+ Mẫu Hồ Cá Koi Đẹp
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </section>

          {/* <section className="mb-12 bg-gray-50 rounded-2xl p-8" id="faq-ho-ca-koi">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              ❓ CÂU HỎI THƯỜNG GẶP VỀ <span className="text-emerald-600">THI CÔNG HỒ CÁ KOI</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  1. Chi phí thi công hồ cá koi bao nhiêu tiền?
                </h3>
                <p className="text-gray-700">
                  Chi phí <strong>làm hồ cá koi</strong> phụ thuộc kích thước, diện tích lớn nhỏ, vật liệu lọc, 
                  chất liệu đá, cây cảnh, phụ thuộc nhiều yếu tố làm nên một hồ cá koi.
                  Liên hệ Thiên Sơn để được <strong>tư vấn miễn phí.</strong>
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  2. Thời gian thi công hồ cá koi mất bao lâu?
                </h3>
                <p className="text-gray-700">
                  Tùy quy mô: <strong>hồ cá koi nhỏ</strong> mất 3-7 ngày, hồ trung bình 10-15 ngày, 
                  hồ lớn kết hợp <strong>hòn non bộ</strong> có thể 20-30 ngày. Thiên Sơn cam kết hoàn thành đúng tiến độ.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  3. Hồ cá koi có cần hệ thống lọc nước không?
                </h3>
                <p className="text-gray-700">
                  Có. Hệ thống lọc nước là bắt buộc để duy trì chất lượng nước, giúp cá khỏe mạnh. 
                  <strong className="text-emerald-600"> Lắp đặt hồ cá koi</strong> chuyên nghiệp cần có bơm lọc, lọc vật lý, 
                  lọc sinh học.
                </p>
              </div>

             

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  4. Thiên Sơn có bảo hành hồ cá koi không?
                </h3>
                <p className="text-gray-700">
                  Có. Thiên Sơn <strong>bảo hành 10 năm</strong>. 
                  Cam kết sửa chữa, thay thế miễn phí nếu có lỗi kỹ thuật.
                </p>
              </div>
            </div>
          </section> */}

        </div>
      </div>
    </section>
  )
}