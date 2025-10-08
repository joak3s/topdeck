"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, BarChart3, Shield, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  // Standard hero section fade-out configuration
  const FADE_START_THRESHOLD = 0.0; 
  const FADE_DURATION = 0.5; // Fade duration over 80% of section height
  
  // Parallax configuration
  const PARALLAX_SPEED = 0.3; // Speed of parallax movement (0.5 = half scroll speed)

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;

        // Parallax animation - starts immediately when user scrolls
        const scrollY = window.scrollY;
        const parallaxY = scrollY * PARALLAX_SPEED;
        setParallaxOffset(parallaxY);

        // Standard hero fade-out: start when section begins to leave viewport
        // Calculate how much of the section is visible
        const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
        const visibilityRatio = visibleHeight / sectionHeight;
        
        // Start fade when section becomes less than (1 - FADE_START_THRESHOLD) visible
        const fadeStartPoint = 1 - FADE_START_THRESHOLD;
        const fadeEndPoint = fadeStartPoint - FADE_DURATION;
        
        // Calculate fade progress (0 = fully visible, 1 = fully faded)
        let progress = 0;
        if (visibilityRatio < fadeStartPoint) {
          const fadeRange = fadeStartPoint - fadeEndPoint;
          const fadeProgress = (fadeStartPoint - visibilityRatio) / fadeRange;
          progress = Math.min(1, Math.max(0, fadeProgress));
        }

        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-48 bg-black flex items-center justify-center overflow-hidden">
      <div
        ref={videoWrapperRef}
        className="fixed w-full h-full inset-0 z-0 mt-10 contrast-125 brightness-100 bg-gradient-to-b from-black/20 to-black/10"
        style={{
          opacity: Math.max(0, 1 - scrollProgress),
          transform: `translateY(-${parallaxOffset}px)`,
          willChange: 'opacity, transform', 
          transition: 'opacity 0.1s ease-out'
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none motion-reduce:hidden "
          src="/videos/aerial-flight-over-a-new-constructions-development-1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10"></div>
    

      </div>

      {/* Two-Column Content Layout */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full rounded-4xl bg-black/80">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 sm:p-12 md:p-16  gap-12 items-center lg:mt-0">
          {/* Left Column - Hero Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-snug tracking-tight">
                Visual Intelligence
                <br />
                <span className="text-red-500 bg-black/70 px-4 py-2 rounded-modern-xl drop-shadow-xl">
                  For Builders
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
              <Link href="/request-quote">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-white text-black px-10 py-6 text-lg font-black shadow-2xl border-4 border-black hover:border-red-600 transition-all duration-200 rounded-modern"
                >
                  REQUEST A QUOTE
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-4 border-black text-black bg-white hover:bg-gray-200 hover:text-black px-10 py-6 text-lg font-black transition-all duration-200 rounded-modern"
              >
                <Play className="w-5 h-5 mr-3" />
                WATCH DEMO
              </Button>
            </div>

            {/* Stats Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Badge className="bg-black text-white px-4 py-2 font-bold rounded-modern"
              style={{
                boxShadow: `
                6px 6px 12px #000000,
                -6px -6px 12px #1a1a1a,
                inset 1px 1px 2px rgba(255, 255, 255, 0.05)
              `}}>
                <BarChart3 className="w-4 h-4 mr-2" />
                99% UPTIME
              </Badge>
              <Badge className="bg-black text-white px-4 py-2 font-bold rounded-modern"
              style={{
                boxShadow: `
                6px 6px 12px #000000,
                -6px -6px 12px #1a1a1a,
                inset 1px 1px 2px rgba(255, 255, 255, 0.05)
              `}}>
                <Eye className="w-4 h-4 mr-2" />
                REAL-TIME INSIGHTS
              </Badge>
              <Badge className="bg-black text-white px-4 py-2 font-bold rounded-modern"
              style={{
                boxShadow: `
                6px 6px 12px #000000,
                -6px -6px 12px #1a1a1a,
                inset 1px 1px 2px rgba(255, 255, 255, 0.05)
              `}}>
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
                <div className="relative border-4 border-white/10 backdrop-blur-sm aspect-video rounded-xl shadow-2xl">
                  {/* Video Container with Gradient Overlay */}
                  <div className="aspect-square inset-0 bg-gradient-to-br from-red-500/20 to-black/80 flex items-center rounded-xl justify-center">
                    <div className="text-center space-y-4">
                      {/* Video Content 
                      <video src="/videos/Topdeck-Hero-v0.mp4" autoPlay muted loop className="w-full h-full object-cover" /> */}
                      <Image src="/images/topdeck-generated-icon-glow-orange.jpg"
                        alt="Gradient Background" fill
                        className="w-full h-full object-cover opacity-100 rounded-xl hue-rotate-[-20deg]"
                        priority
                      />
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Angular Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white hidden">
        <div className="w-8 h-12 border-4 border-white flex justify-center animate-bounce">
          <div className="w-2 h-4 bg-red-500 mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
