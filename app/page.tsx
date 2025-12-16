import { Suspense, lazy } from "react"
import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import Footer from "@/components/layout/footer"
import FloatingContact from "@/components/layout/floating-contact"

// Lazy load các components không cần thiết cho first paint
const AboutIntro = lazy(() => import("@/components/sections/about-intro"))
const Services = lazy(() => import("@/components/sections/services"))
const Projects = lazy(() => import("@/components/sections/projects-showcase"))
const Stats = lazy(() => import("@/components/sections/stats"))
const Reviews = lazy(() => import("@/components/sections/reviews"))
const HonNonBoCTA = lazy(() => import("@/components/sections/hon-non-bo-cta"))
const CTASection = lazy(() => import("@/components/sections/cta-section"))

// Loading skeleton component
function SectionSkeleton() {
  return (
    <div className="py-20 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      
      <Suspense fallback={<SectionSkeleton />}>
        <AboutIntro />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Stats />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <HonNonBoCTA />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>

      
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      
      
      
      {/* <Suspense fallback={<SectionSkeleton />}>
        <Reviews />
      </Suspense> */}
      
   
      
      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>
      
      <Footer />
      <FloatingContact />
    </main>
  )
}