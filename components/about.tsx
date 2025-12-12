export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 -z-10 transform translate-x-4 translate-y-4" />
            <img
              src="/professional-landscape-designer-team.jpg"
              alt="Đội thiết kế cảnh quan chuyên nghiệp Thiên Sơn"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-secondary text-primary rounded-full text-sm font-semibold">
              Về Chúng Tôi
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Xuất Sắc Trong Thiết Kế Cảnh Quan Từ 2010
            </h2>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Với hơn 13 năm kinh nghiệm, Thiên Sơn đã khẳng định vị thế là công ty thiết kế cảnh quan hàng đầu tại Huế,
              Đà Nẵng và toàn Việt Nam. Chúng tôi kết hợp tầm nhìn sáng tạo với các phương pháp bền vững để tạo nên các
              không gian ngoài trời vừa đẹp mắt vừa bền vững.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground">
                    ✓
                  </div>
                </div>
                <p className="text-foreground">Đội thiết kế giải thưởng với công nhân quốc tế được công nhân</p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground">
                    ✓
                  </div>
                </div>
                <p className="text-foreground">Giải pháp cảnh quan bền vững và thân thiện với môi trường</p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground">
                    ✓
                  </div>
                </div>
                <p className="text-foreground">Quản lý dự án toàn diện từ thiết kế đến hoàn thành công trình</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-all transform hover:scale-105">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
