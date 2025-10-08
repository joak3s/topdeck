import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="z-0">
      <HeroSection />
      </div>
      <div className="z-10 bg-gradient-to-b from-black/80 via-black/80 to-black/80">
        <FeaturesSection />
      </div>
      <HowItWorksSection />
      <ClientsSection />
    </div>
  );
}