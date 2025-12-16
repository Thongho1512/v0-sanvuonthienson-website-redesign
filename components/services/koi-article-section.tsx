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
          
          {/* Introduction */}
          <div className={`mb-12`}>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Quý khách đang tìm kiếm một đơn vị thiết kế thi công hồ cá koi chuyên nghiệp, uy tín? 
              <strong className="text-emerald-600 font-bold"> SÂN VƯỜN THIÊN SƠN</strong> chính là sự lựa chọn hoàn hảo dành cho quý khách.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Chúng tôi tự hào là đơn vị thi công hồ cá koi chuyên nghiệp, uy tín, được nhiều gia chủ tin tưởng lựa chọn. 
              Với đội ngũ kiến trúc sư, thợ thi công lành nghề với nghệ nhân nhiều năm kinh nghiệm, tâm huyết luôn tận tâm 
              mang đến gia chủ những công trình hồ cá koi đẹp, hoàn hảo nhất.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/15.jpg"
              alt="Thiết kế sân vườn hồ cá koi"
              width={1200}
              height={800}
              className="w-full"
            />
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600 italic">
                Thiết kế sân vườn hồ cá Koi - Tạo dấu ấn cá nhân với dịch vụ chất lượng cao
              </p>
            </div>
          </div>

          {/* Section 1: Tại sao hồ cá Koi được ưa chuộng */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              TẠI SAO HỒ CÁ KOI LẠI ĐƯỢC ƯA CHUỘNG TẠI VIỆT NAM?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Hồ cá Koi là một điểm nhấn quan trọng trong thiết kế cảnh quan sân vườn, mang đến vẻ đẹp tĩnh lặng 
              và sự hài hòa mà không một tín đồ yêu thiên nhiên nào có thể bỏ qua. Cá Koi, xuất phát từ Nhật Bản, 
              là biểu tượng của sự may mắn, phú quý và có tuổi thọ cao.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Hồ cá Koi mang giá trị tinh thần to lớn, là điểm nhấn nổi bật, tạo nên vẻ đẹp cho khu vườn. 
              Không chỉ là nét đặc sắc thẩm mỹ, mà hồ cá Koi còn đem lại cảm giác thư thái và yên bình, 
              kết nối con người với thiên nhiên. Thiết kế thi công hồ cá Koi trong sân vườn của bạn để tận hưởng 
              sự thanh lọc tinh thần và vẻ đẹp vĩnh cửu.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-emerald-900 mb-4 text-xl">Một số lợi ích lớn mà hồ cá koi mang lại:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Gia tăng tính thẩm mỹ cho ngôi nhà</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Thể hiện sự khác biệt, đẳng cấp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                  <span className="text-gray-700 text-lg">Không khí trong lành, Giúp nâng cao sức khỏe</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/26.png"
                  alt="Không gian sống cùng thiên nhiên"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Không Gian Sống Cùng Thiên Nhiên</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/22.jpg"
                  alt="Bình yên giữa lòng phố thị"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-50 p-3 text-center">
                  <p className="text-sm text-gray-600 font-medium">Bình Yên Giữa Lòng Phố Thị</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Yếu tố phong thủy */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Các Yếu Tố Phong Thủy Của Hồ Cá Koi
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Không chỉ giúp không gian sống trở nên sinh động hơn mà hồ koi còn mang tới vượng khí cho gia chủ. 
              Bởi khi thiết kế bể koi cần phải tuân thủ một số nguyên tắc về phong thủy hơn nữa cá koi là "Quốc Ngư" 
              chắc chắn sẽ đem tới vượng khí, sự may mắn cho gia đình bạn.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg font-semibold">
              Tuy nhiên bạn cần lưu ý các yếu tố sau khi thiết kế thi công hồ cá koi:
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">1</span>
                  Vị trí bố trí hồ cá Koi
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Hãy đặt hồ ở vị trí tối ưu, ví dụ như phía Đông hoặc Đông Nam để tận dụng ánh nắng sớm, 
                  tượng trưng cho sự sáng sủa và tươi mới. Để tránh ánh nắng chiều tây, có thể sử dụng cỏ cây hoặc bóng râm.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">2</span>
                  Số lượng cá Koi trong hồ
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Số lượng cá Koi trong hồ cần được tính toán dựa trên diện tích và dung tích hồ, và chọn những con số 
                  mang ý nghĩa tài lộc, tránh quá nhiều để đảm bảo cá Koi có không gian thoải mái và phát triển khỏe mạnh.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all">
                <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold">3</span>
                  Màu sắc của cá Koi trong hồ
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Màu sắc của cá Koi trong hồ có thể được lựa chọn dựa trên nguyên tắc của ngũ hành, ví dụ, màu đỏ 
                  tượng trưng cho hỏa, màu đen cho thủy, và màu vàng cho kim. Sự kết hợp này mang ý nghĩa phong thủy, 
                  tạo nên sự cân bằng trong không gian.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Quy trình thiết kế */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              QUY TRÌNH THIẾT KẾ HỒ CÁ KOI (BỂ CÁ KOI)
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Quy trình khảo sát, tư vấn tận nhà giúp Thiên Sơn hiểu rõ hơn về kích thước, không gian, chất liệu và 
              "tuổi" của chủ nhà. Từ đó đảm bảo việc tư vấn – thiết kế hồ KOI tiết kiệm nhất cho gia chủ.
            </p>

            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                src="/quy-trinh-thiet-ke-thi-cong-ho-ca-koi-tai-thien-son.png"
                alt="Quy trình thiết kế thi công hồ cá Koi"
                width={1200}
                height={800}
                className="w-full"
                />
                <div className="bg-gray-50 p-4 text-center">
                <p className="text-sm text-gray-600 italic">
                    Quy trình thiết kế thi công hồ cá Koi - Tạo dấu ấn cá nhân với dịch vụ chất lượng cao
                </p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
                Tiêu Chí Thiết Kế Thi Công Hồ Cá Koi Đạt Chuẩn
              </h3>
              
              <div className="space-y-8">
                {/* Chất lượng nước */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Chất lượng nước
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10">
                    Nước trong hồ chất lượng tốt là điều kiện quan trọng để cá koi sinh trưởng và phát triển khỏe mạnh. 
                    Nước cần phải trong, không vẩn đục, ít rêu và không mang mầm bệnh. Độ pH lý tưởng cần duy trì là trong khoảng 7 – 7.5.
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
                      <strong>Về chiều dài:</strong> tối thiểu 2m
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong>Về chiều rộng:</strong> tối thiểu 0.8 – 1m
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      <strong>Về độ sâu:</strong> tùy kích thước của loại cá nuôi mà độ sâu cũng phải cân bằng để đàn cá 
                      bơi lội thoải mái. Đối với các loại cá koi kích thước nhỏ cần độ sâu hồ tối thiểu là 0.6m. 
                      Còn đối với loại cá có kích thước trung bình và lớn thì cần độ sâu từ 0.8 – 1.6m là thích hợp.
                    </p>
                  </div>
                </div>

                {/* Hình dáng hồ */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                    Hình dáng hồ cá koi
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10">
                    Có rất nhiều mẫu hồ cá koi đẹp với các hình dáng khác nhau. Tùy thuộc vào không gian, sở thích của 
                    gia chủ mà các kiến trúc sư có thể sáng tạo ra các hình dáng phù hợp. Để đảm bảo tính thẩm mỹ và 
                    sự độc đáo bạn nên được các chuyên gia tư vấn về mẫu và lên ý tưởng bản vẽ 3D.
                  </p>
                  <p></p>
                  <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                    src="/hinh-dang-thiet-ke-ho-ca-Koi.jpeg"
                    alt="Hình dáng hồ cá KOI"
                    width={800}
                    height={530}
                    className="w-full"
                    />
                    <div className="bg-gray-50 p-4 text-center">
                    <p className="text-sm text-gray-600 italic">
                        Hình dáng hồ cá KOI - Tạo dấu ấn cá nhân với dịch vụ chất lượng cao
                    </p>
                    </div>
                </div>
                </div>

                {/* Vị trí */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                    Vị trí
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10">
                    Hồ cá koi có thể thiết kế và thi công tại bất cứ vị trí nào trong công trình. Từ trong nhà đến ngoài trời, 
                    thậm chí trên sân thượng hoặc là ngoài ban công. Tùy thuộc vị trí yêu cầu từ chủ đầu tư mà các kiến trúc 
                    sư sẽ đưa ra tư vấn và phân tích các yêu cầu kỹ thuật khác nhau.
                  </p>
                </div>

                {/* Kết cấu */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
                    Kết cấu
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg pl-10 mb-4">
                    Kết cấu của một hồ cá koi rất quan trọng. Bởi nó quyết định độ ổn định và chi phí khi hoàn thiện. 
                    Các vật liệu dùng làm kết cấu hồ cá koi phổ biến là:
                  </p>
                  <ul className="space-y-3 pl-10">
                    <li className="text-gray-700 text-lg">
                      <strong>Bê tông cốt thép:</strong> áp dụng cho các hồ cá trung bình và lớn, độ ổn định cao. 
                      Loại này được sử dụng phổ biến nhất tuy nhiên chi phí khá cao.
                    </li>
                    <li className="text-gray-700 text-lg">
                      <strong>Xây gạch:</strong> độ ổn định ở mức trung bình. Chi phí khá rẻ nhưng cần cần thợ thi công 
                      có kinh nghiệm và tay nghề cao.
                    </li>
                    <li className="text-gray-700 text-lg">
                      <strong>Bạt cao su:</strong> thi công nhanh và dễ, cải tạo nhanh chóng nhưng độ ổn định thấp và 
                      ít được sử dụng.
                    </li>
                    <li className="text-gray-700 text-lg">
                      <strong>Kính cường lực:</strong> thi công phức tạp, cần yêu cầu kỹ thuật. Ngoài ra hồ cá bằng kính 
                      rất dễ bám bẩn và rêu nên cần vệ sinh thường xuyên. Thường áp dụng cho hồ cá trong nhà.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Cam kết */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cam Kết Khi Khách Hàng Lựa Chọn Thiết Kế Thi Công Hồ Cá Koi Tại Thiên Sơn
            </h2>
            
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl p-8 mb-8">
              <p className="text-xl mb-6 font-semibold">
                Với hơn 10000 mẫu thiết kế thi công hồ cá koi lớn nhỏ thực tế trên khắp miền nam, 
                <span className="font-bold"> SÂN VƯỜN THIÊN SƠN</span> sẽ làm gia chủ hài lòng.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg">Nghệ nhân trực tiếp Khảo Sát – Tư Vấn tận nơi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg">Thiết kế mẫu 3D theo yêu cầu trước khi thi công</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg">Thi công chuẩn theo bản vẽ thiết kế</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg">Lắp đặt hệ thống lọc, xử lý nước hiện đại</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-2xl">✓</span>
                  <span className="text-lg">Mẫu công trình thi công độc đáo, hoàn thiện theo xu hướng hiện đại</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">👨‍🔧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Nghệ Nhân Lê Anh</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Với hơn 20 năm kinh nghiệm và hơn 10000 mẫu thiết kế và Thi Công Hòn Non Bộ – Thi Công Hồ Cá Koi – 
                    Trang trí sân vườn tiểu cảnh – Tiểu cảnh gầm cầu thang.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Thiết kế Thi Công Hồ Cá Koi THIÊN SƠN tự hào đã triển khai thi công thực tế nhiều công trình tiểu cảnh 
                sân vườn biệt thự – sự tin tưởng anh chị nghệ sĩ. Những người chơi tiểu cảnh cực kỳ say đắm màu cá đẹp, 
                kết hợp yếu tố phong thủy mang đến cho gia chủ sự tài lộc, thịnh vượng, may mắn và thuận hòa.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Bên cạnh đó, ở gần một hồ cá Koi các bạn cảm thấy không gian rất thoải mái, hòa mình vào thiên nhiên.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Giờ đây, việc sở hữu một hồ cá Koi đẹp không còn quá khó, Giá cả cũng phải chăng hơn rất nhiều. 
                Tuy nhiên, vì vấn đề thiết kế, thi công hồ cá Koi đẹp luôn cần đến bàn tay của những nhà thiết kế 
                chuyên nghiệp để tránh những rủi ro có thể phát sinh trong quá trình chăm sóc.
              </p>
            </div>
          </section>

          {/* Gallery Section */}
            <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                CÔNG TRÌNH VÀ DỰ ÁN
            </h2>
            <p className="text-center text-gray-600 mb-8 text-lg">
                Nghệ nhân hơn 15 năm kinh nghiệm trực tiếp khảo sát, tư vấn
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <Image 
                    src="/16.jpg"
                    alt={`Công trình hồ cá Koi`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <Image 
                    src="/33.jpg"
                    alt={`Công trình hồ cá Koi`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <Image 
                    src="/23.jpg"
                    alt={`Công trình hồ cá Koi`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    />
                </div>
            </div>

            <div className="text-center">
                <Link href="/thu-vien-cong-trinh">
                <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all hover:scale-105 shadow-xl">
                    Xem Thêm Công Trình
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                </Link>
            </div>
            </section>
          

        </div>
      </div>
    </section>
  )
}