import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Projects from "@/components/sections/projects-showcase"
import Reviews from "@/components/sections/reviews"
import Stats from "@/components/sections/stats"
import CTASection from "@/components/sections/cta-section"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Stats />
      <Reviews />
      <CTASection />
      <Footer />
      <FloatingContact />
    </main>
  )
}
