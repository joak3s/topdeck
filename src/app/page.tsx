import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ClientsSection />
    </div>
  );
}