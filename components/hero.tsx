export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background -z-10"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=luxury-garden-landscape-design-vietnam)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm -z-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
          Thiết Kế Cảnh Quan Cao Cấp
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Biến Không Gian Ngoài Trời Của Bạn Thành Thiên Đường
        </h1>

        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          Tạo vườn cảnh quan bền vững và tuyệt đẹp cho các không gian dân cư và thương mại. Chuyên gia thiết kế cảnh
          quan với hơn 13 năm kinh nghiệm.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-all transform hover:scale-105">
            Xem Dự Án
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
            Tư Vấn Miễn Phí
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
