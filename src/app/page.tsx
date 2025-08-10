"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleRequestQuote = () => {
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onRequestQuote={handleRequestQuote} />
      <FeaturesSection />
      <ClientsSection />
    </div>
  );
}