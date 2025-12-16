import { Phone, MessageCircle, Check, Clock, Shield, Users, Sparkles } from 'lucide-react'

export default function HonNonBoContent() {
  const commitments = [
    {
      icon: Clock,
      title: "Thời Gian Tiến Độ",
      description: "Thi công nhanh chóng và đúng tiến độ"
    },
    {
      icon: Shield,
      title: "Chất Lượng Uy Tín",
      description: "Công trình hòn non bộ chuyên nghiệp và giá rẻ"
    },
    {
      icon: Users,
      title: "Sự Hài Lòng",
      description: "Chúng tôi đảm bảo sự hài lòng về chất lượng dịch vụ"
    },
    {
      icon: Sparkles,
      title: "Thiết Kế Độc Đáo và Phù Hợp Phong Thủy",
      description: "Mẫu hòn non bộ độc đáo, đẹp mắt và hài hòa với không gian và gia chủ"
    }
  ]

  const constructionSteps = [
    {
      number: "01",
      title: "Đào và Xây Dựng Nền",
      description: "Nền của cấu trúc hòn non bộ được chôn sâu vào đất, sử dụng đa dạng loại đá để tạo nên bề mặt độc đáo."
    },
    {
      number: "02",
      title: "Sử Dụng Vật Liệu Phù Hợp",
      description: "Gạch cũ, than xỉ và các vật liệu tái chế được tận dụng để tạo nên cấu trúc vững chắc và đẹp mắt."
    },
    {
      number: "03",
      title: "Tận Dụng Nguồn Nước",
      description: "Hòn non bộ không chỉ làm đẹp mà còn tận dụng nguồn nước, tạo ra không khí dễ chịu và thoải mái."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-stone-50">
      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl border border-amber-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong className="text-amber-700">CÔNG TY TNHH SÂN VƯỜN THIÊN SƠN</strong> là đơn vị thi công thiết kế 
                hòn non bộ chuyên nghiệp với hơn 15 năm kinh nghiệm cùng rất nhiều công trình 
                hài lòng khách hàng tại TPHCM và các tỉnh thành lân cận.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chúng tôi quy tụ rất nhiều kỹ thuật viên có tay nghề cao và có kinh nghiệm lâu năm 
                đảm bảo mang đến cho khách hàng công trình chất lượng và đạt thẩm mỹ cao nhất. 
                Đội ngũ nhân viên chăm sóc khách hàng luôn nhiệt tình tận tụy hết lòng hỗ trợ khách hàng 24/24.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cam Kết Chất Lượng
              </h2>
              <p className="text-xl text-gray-600">
                Thiết Kế – Thi Công tại <span className="text-amber-600 font-bold">THIÊN SƠN</span>
              </p>
            </div>

            <p className="text-center text-lg text-gray-700 mb-8">
              Chúng tôi cam kết mang đến cho bạn:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commitments.map((item, index) => {
                const Icon = item.icon
                return (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-amber-100"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl text-white text-center">
              <p className="text-xl font-medium">
                Hãy để chúng tôi làm nên sự khác biệt trong không gian sân vườn của bạn. 
                Thiên Sơn Landscape luôn sẵn sàng đồng hành và phục vụ bạn. 
                Hãy liên hệ ngay để có một không gian sống hài hòa và đẹp tự nhiên nhất!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feng Shui Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Lợi Ích <span className="text-amber-600">Phong Thủy</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl border border-amber-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chúng tôi không chỉ tập trung vào việc tạo ra một tiểu cảnh đẹp mắt 
                mà còn chú trọng đến các yếu tố phong thủy. Vị trí của hòn non bộ được xác định 
                theo nguyên tắc phong thủy, tạo nên sự hòa hợp và hài hòa với không gian xung quanh.
              </p>

              <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-amber-700">Lưu ý:</strong> Đối với những ngôi nhà có nhiều tầng, 
                  chúng tôi đề xuất không đặt hòn non bộ ở các tầng trên cùng để đảm bảo sự cân bằng và hài hòa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Steps */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hạng Mục Thi Công
              </h2>
              <p className="text-xl text-gray-600">
                Để đạt được kết quả tốt nhất với mức giá phải chăng, chúng tôi lưu ý các điểm quan trọng như:
              </p>
            </div>

            <div className="space-y-6">
              {constructionSteps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-amber-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Thiết Kế <span className="text-amber-600">Mẫu</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl border border-amber-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nghệ thuật và lối chơi hòn non bộ đã trở thành một nét văn hóa tinh tế, 
                phong nhã trong cuộc sống người Việt Nam. Hình ảnh sông núi được thu nhỏ 
                ở một góc vườn, cảnh sắc thiên nhiên giúp tâm hồn gia chủ thêm thi vị, 
                nhẹ nhàng, như trở về với thiên nhiên.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chính vì lẽ ấy khi thiết kế thi công hòn non bộ cần tập trung triển khai 
                được hình ảnh hài hòa và cảnh sắc thiên nhiên phong phú, hùng vĩ mà 
                gần gủi với tâm hồn người.
              </p>

              <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500">
                <p className="text-lg text-gray-700 font-medium">
                  Hãy liên hệ ngay <strong className="text-amber-700">Thiên Sơn</strong> để 
                  Nghệ nhân chúng tôi tư vấn thiết kế hòn non bộ phù hợp theo yêu cầu gia chủ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}