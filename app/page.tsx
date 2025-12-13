import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import AboutIntro from "@/components/sections/about-intro"
import Projects from "@/components/sections/projects-showcase"
import Stats from "@/components/sections/stats"
import Reviews from "@/components/sections/reviews"
import HonNonBoCTA from "@/components/sections/hon-non-bo-cta"
import BlogSection from "@/components/sections/blog-section"
import CTASection from "@/components/sections/cta-section"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <AboutIntro />
      <Projects />
      <Stats />
      <Reviews />
      <HonNonBoCTA />
      <BlogSection />
      <CTASection />
      <Footer />
      <FloatingContact />
    </main>
  )
}