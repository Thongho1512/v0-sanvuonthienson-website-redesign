export default function Gallery() {
  const galleryItems = [
    {
      title: "Vườn Tối Giản Hiện Đại",
      category: "Dân Cư",
      image: "/modern-minimalist-garden-design.jpg",
    },
    {
      title: "Thiên Đường Nhiệt Đới",
      category: "Dân Cư",
      image: "/tropical-garden-landscape.jpg",
    },
    {
      title: "Quảng Trường Thương Mại",
      category: "Thương Mại",
      image: "/corporate-landscape-plaza.jpg",
    },
    {
      title: "Thiết Kế Đài Phun Nước",
      category: "Cứng (Hardscape)",
      image: "/water-feature-pond-garden.jpg",
    },
    {
      title: "Vườn Thiền",
      category: "Dân Cư",
      image: "/zen-garden-meditation-space.jpg",
    },
    {
      title: "Vườn Sân Thượng",
      category: "Thương Mại",
      image: "/rooftop-garden-urban-landscape.jpg",
    },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Danh Mục Dự Án
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Dự Án Nổi Bật</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Khám phá bộ sưu tập đa dạng những dự án cảnh quan biến đổi tuyệt đẹp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl h-80 cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-semibold text-primary-foreground/80 mb-2">{item.category}</p>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-all transform hover:scale-105">
            Xem Toàn Bộ Danh Mục
          </button>
        </div>
      </div>
    </section>
  )
}
