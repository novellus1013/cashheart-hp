import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TargetUsersSection } from "@/components/target-users-section"
import { ReviewsSection } from "@/components/reviews-section"
import { DownloadSection } from "@/components/download-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TargetUsersSection />
        <ReviewsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
