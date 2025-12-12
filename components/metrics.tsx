export default function Metrics() {
  const metrics = [
    { number: "500+", label: "Dự Án Hoàn Thành" },
    { number: "13+", label: "Năm Kinh Nghiệm" },
    { number: "98%", label: "Sự Hài Lòng Khách Hàng" },
    { number: "50+", label: "Giải Thưởng Ngành" },
  ]

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Thành Tích Của Chúng Tôi</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Những con số nói lên cam k承của chúng tôi đối với sự xuất sắc và sự hài lòng của khách hàng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-3">{metric.number}</div>
              <p className="text-lg text-primary-foreground/90">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-primary-foreground/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm font-semibold text-primary-foreground/70 mb-2">ĐỊA CHỈ</p>
              <p className="text-xl font-semibold">Huế, Việt Nam</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-foreground/70 mb-2">KHU VỰC PHỤC VỤ</p>
              <p className="text-xl font-semibold">Toàn Việt Nam</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-foreground/70 mb-2">CHUYÊN MÔN</p>
              <p className="text-xl font-semibold">Dân Cư & Thương Mại</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
