"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, BarChart3, Shield, Eye } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onRequestQuote?: () => void;
}

export const HeroSection = ({ onRequestQuote }: HeroSectionProps) => {
  const handleRequestQuote = () => {
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      // Default behavior - navigate to contact page
      window.location.href = "/contact";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Angular Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/topdeck_hero_bg-1.jpg" 
        alt="Hero Background" fill 
        className="w-full h-full object-cover"
        priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/80 via-black/70 to-red-800/90"></div>

        {/* Angular geometric overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 angular-clip"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/30 angular-corner"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-red-600/10 transform rotate-45"></div>
        </div>
      </div>

      {/* Two-Column Content Layout */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Hero Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
                YOUR TOP DECK
                <br />
                <span className="text-red-500 drop-shadow-xl">
                  FULLY DIGITIZED
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-white text-xl md:text-2xl lg:text-3xl leading-tight font-medium">
                <span className="font-black tracking-wide">
                  AI-POWERED JOBSITE INTELLIGENCE
                </span>
                <br />
                <span className="text-white/90 text-lg md:text-xl lg:text-2xl">
                  All-in-one platform for security, remote
                  monitoring, and detailed progress tracking
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleRequestQuote}
                size="lg"
                className="bg-red-500 hover:bg-white text-black px-10 py-6 text-lg font-black shadow-2xl border-4 border-black hover:border-red-600 transition-all duration-200 angular-corner"
              >
                REQUEST A QUOTE
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-4 border-black text-black bg-white hover:bg-gray-200 hover:text-black px-10 py-6 text-lg font-black transition-all duration-200 angular-corner"
              >
                <Play className="w-5 h-5 mr-3" />
                WATCH DEMO
              </Button>
            </div>

            {/* Stats Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Badge className="bg-black border-2 border-red-500 text-white px-4 py-2 font-bold angular-corner">
                <BarChart3 className="w-4 h-4 mr-2" />
                99% UPTIME
              </Badge>
              <Badge className="bg-black border-2 border-red-500 text-white px-4 py-2 font-bold angular-corner">
                <Eye className="w-4 h-4 mr-2" />
                REAL-TIME INSIGHTS
              </Badge>
              <Badge className="bg-black border-2 border-red-500 text-white px-4 py-2 font-bold angular-corner">
                <Shield className="w-4 h-4 mr-2" />
                AI-POWERED SECURITY
              </Badge>
            </div>
          </div>

          {/* Right Column - Video Placeholder */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-2xl">
              {/* Decorative SVG Border Container */}
              <div className="relative">
                {/* Main Video Container */}
                <div className="relative bg-black/90 backdrop-blur-sm border-4 border-red-500 aspect-video angular-clip overflow-hidden shadow-2xl">
                  {/* Video Placeholder Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-black/80 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <video src="/videos/Topdeck-Hero-v0.mp4" autoPlay muted loop className="w-full h-full object-cover" />

                    </div>
                  </div>

                  {/* Simulated Video Elements */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-bold angular-corner">
                    LIVE
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 text-xs font-medium border border-white/20">
                    4K UHD
                  </div>
                </div>

                {/* Decorative Border Elements */}
                <div className="absolute -inset-2 border-2 border-white/20 angular-clip -z-10"></div>
                <div className="absolute -inset-4 border border-red-500/30 angular-clip -z-20"></div>
              </div>

              {/* Additional Info Below Video */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-white/80 text-sm">
                  <span className="font-medium">
                    Crane Camera Feed
                  </span>
                  <span className="font-bold text-red-500">
                    ●REC
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-black/60 backdrop-blur-sm border border-white/20 p-2 text-center angular-corner">
                    <div className="text-red-500 font-bold">
                      360°
                    </div>
                    <div className="text-white/70">VIEW</div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm border border-white/20 p-2 text-center angular-corner">
                    <div className="text-red-500 font-bold">
                      24/7
                    </div>
                    <div className="text-white/70">MONITOR</div>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm border border-white/20 p-2 text-center angular-corner">
                    <div className="text-red-500 font-bold">
                      AI
                    </div>
                    <div className="text-white/70">
                      ANALYTICS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Angular Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white lg:hidden">
        <div className="w-8 h-12 border-4 border-white flex justify-center animate-bounce">
          <div className="w-2 h-4 bg-red-500 mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
