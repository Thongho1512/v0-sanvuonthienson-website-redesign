"use client"

import { useState } from "react"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      title: "Hồ Cá Koi Biệt Thự Huế",
      category: "hồ-cá-koi",
      image: "/luxury-koi-pond-design-in-villa-hue-vietnam.jpg",
      description: "Thiết kế và thi công hồ cá Koi 50m² với hệ thống lọc nước hiện đại",
    },
    {
      title: "Hòn Non Bộ Cung Đình",
      category: "hon-non-bo",
      image: "/traditional-stone-landscape-rock-formation.jpg",
      description: "Hòn non bộ theo phong thủy truyền thống với thác nước",
    },
    {
      title: "Tiểu Cảnh Sân Vườn Tối Giản",
      category: "tieu-canh-san-vuon",
      image: "/modern-minimalist-garden-landscape-design.jpg",
      description: "Thiết kế tiểu cảnh sân vườn hiện đại với cây cạnh tây ban nha",
    },
    {
      title: "Quán Cafe Cá Koi",
      category: "quan-cafe",
      image: "/koi-cafe-interior-landscape-design-modern.jpg",
      description: "Quán cafe sân vườn kết hợp hồ cá Koi và không gian xanh",
    },
    {
      title: "Cảnh Quan Dự Án Thương Mại",
      category: "canh-quan",
      image: "/commercial-landscape-design-real-estate-project.jpg",
      description: "Cảnh quan toàn cảnh cho dự án nhà ở cao cấp",
    },
    {
      title: "Hòn Non Bộ Nhà Thờ",
      category: "hon-non-bo",
      image: "/stone-landscape-pagoda-religious-building-design.jpg",
      description: "Hòn non bộ trang trí cho nhà thờ, chùa chiền",
    },
    {
      title: "Tiểu Cảnh Cầu Thang Bộ",
      category: "tieu-canh-san-vuon",
      image: "/interior-staircase-landscape-water-feature.jpg",
      description: "Tiểu cảnh có thác nước bên cạnh cầu thang bộ",
    },
    {
      title: "Hồ Cá Koi Tòa Nhà Cao Tầng",
      category: "hồ-cá-koi",
      image: "/penthouse-rooftop-koi-pond-luxury-design.jpg",
      description: "Hồ cá Koi trên sân thượng tòa nhà cao tầng",
    },
  ]

  const categories = [
    { id: "all", label: "Tất Cả Dự Án" },
    { id: "hồ-cá-koi", label: "Hồ Cá Koi" },
    { id: "hon-non-bo", label: "Hòn Non Bộ" },
    { id: "tieu-canh-san-vuon", label: "Tiểu Cảnh Sân Vườn" },
    { id: "quan-cafe", label: "Quán Cafe" },
    { id: "canh-quan", label: "Cảnh Quan" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Dự Án Đã Thi Công
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Những Tác Phẩm Ấn Tượng</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Khám phá bộ sưu tập đa dạng những dự án cảnh quan biến đổi tuyệt đẹp từ Thiên Sơn
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-secondary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-stone-gray">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold text-primary mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 line-clamp-2">{project.description}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
