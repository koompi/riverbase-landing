import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { Stats } from "@/components/stats";
import { FeaturesGrid } from "@/components/features-grid";
import { HowItWorks } from "@/components/how-it-works";
import { PartnerSection } from "@/components/partner-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Stats />
        <FeaturesGrid />
        <HowItWorks />
        <PartnerSection />
      </main>
      <Footer />
    </>
  );
}
