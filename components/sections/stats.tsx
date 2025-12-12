"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, Users, Briefcase, Star } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Năm Kinh Nghiệm",
    color: "text-blue-500",
  },
  {
    icon: Briefcase,
    value: 200,
    suffix: "+",
    label: "Dự Án Hoàn Thành",
    color: "text-green-500",
  },
  {
    icon: Users,
    value: 180,
    suffix: "+",
    label: "Khách Hàng Hài Lòng",
    color: "text-purple-500",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Đánh Giá Trung Bình",
    color: "text-yellow-500",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {value % 1 === 0 ? count : count.toFixed(1)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.3)

  return (
    <section className="py-24 bg-gradient-to-br from-sage via-sage-dark to-forest relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {isVisible && <AnimatedNumber value={stat.value} suffix={stat.suffix} />}
                </div>
                <p className="text-sage-light font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
