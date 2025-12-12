export default function Services() {
  const services = [
    {
      title: "Thi Công Hồ Cá Koi",
      description:
        "Thiết kế và thi công hồ cá Koi chuyên nghiệp với hệ thống lọc nước tiên tiến, công nghệ đèn LED, tạo không gian sống lành mạnh cho cá Koi của bạn.",
      icon: "🐠",
    },
    {
      title: "Thi Công Hòn Non Bộ",
      description:
        "Thi công hòn non bộ theo phong thủy truyền thống cùng nghệ nhân từ Huế, tạo thác nước, hài hòa với không gian sân vườn.",
      icon: "⛰️",
    },
    {
      title: "Thiết Kế Tiểu Cảnh Sân Vườn",
      description:
        "Thiết kế tiểu cảnh sân vườn hiện đại với phối cảnh 2D/3D, bảng vẽ chi tiết, từ sân nhỏ tối giản đến khuôn viên lớn.",
      icon: "🌿",
    },
    {
      title: "Thiết Kế Cảnh Quan",
      description:
        "Giải pháp cảnh quan toàn diện cho các công trình dân cư, thương mại, quán cafe, đảm bảo tính thẩm mỹ và hiệu năng.",
      icon: "🎨",
    },
    {
      title: "Quán Cafe Cá Koi",
      description:
        "Thiết kế quán cafe kết hợp hồ cá Koi, tiểu cảnh, tạo không gian độc đáo, thu hút khách hàng với chi phí tiết kiệm.",
      icon: "☕",
    },
    {
      title: "Tư Vấn & Khảo Sát",
      description:
        "Tư vấn chuyên sâu, khảo sát thực địa miễn phí, tư vấn phong thủy, giúp bạn lựa chọn giải pháp tốt nhất.",
      icon: "💼",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Dịch Vụ Của Chúng Tôi
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Giải Pháp Cảnh Quan Toàn Diện</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Từ tư vấn ban đầu đến hoàn thiện cuối cùng, chúng tôi cung cấp các dịch vụ cảnh quan toàn diện phù hợp với
            nhu cầu của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-sm border border-border hover:shadow-lg hover:border-primary transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <button className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-2">
                  Tìm Hiểu Thêm →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
