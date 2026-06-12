import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import { Stats } from "@/components/stats";
import { FeaturesGrid } from "@/components/features-grid";
import { HowItWorks } from "@/components/how-it-works";
import { Stores } from "@/components/stores";
import { PartnerSection } from "@/components/partner-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Brave-style body: a floating window inset by a small gutter, tucked
          flush under the full-width panel. Its rounded top corners form the
          panel's inverse (concave) bottom corners; the frame tone shows
          through the gutter and corner notches. */}
      {/* Uniform 8px gutter: sides and bottom px-2/pb-2, top pt-16 leaves
          8px between the 56px bar and the window. */}
      <div className="px-2 pb-2 pt-16">
        <div className="overflow-hidden rounded-[var(--hug-radius)] border border-border/60 bg-background shadow-[0_1px_2px_oklch(0.22_0.02_165_/_0.05),0_18px_50px_-28px_oklch(0.22_0.02_165_/_0.22)]">
          <main>
            <HeroSection />
            <Stats />
            <FeaturesGrid />
            <HowItWorks />
            <Stores />
            <PartnerSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
