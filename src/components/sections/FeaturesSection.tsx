import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import {
  Camera,
  BarChart3,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircleIcon,
  Eye,
  Video
} from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Eye className="w-12 h-12 text-red-500" />,
      title: "REALITY CAPTURE",
      description: "Live overhead views from crane-mounted cameras track hook and deck activity without on-site personnel. AI-driven analytics provide deep insights into jobsite production and crane utilization by trade. Tracks concrete workflows (pours, decking, shoring) and structural progress (steel, precast, timber). Automated milestone tracking, piece counts, and outlier detection for real-time course correction. Secure cloud dashboard integrates with workflows for safety, logistics, and custom analytics.",
      bullets: [
        "Live overhead views from crane-mounted cameras track hook and deck activity without on-site personnel",
        "AI-driven analytics provide deep insights into jobsite production and crane utilization by trade",
        "Tracks concrete workflows (pours, decking, shoring) and structural progress (steel, precast, timber)",
        "Automated milestone tracking, piece counts, and outlier detection for real-time course correction",
        "Secure cloud dashboard integrates with workflows for safety, logistics, and custom analytics"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "AI ANALYTICS"
    },
    {
      icon: <Video className="w-12 h-12 text-red-500" />,
      title: "CONSTRUCTION CAMERAS",
      description: "Live-feed remote monitoring and timelapse capture for real-time site progress tracking. UHD quality video streams, archivable indefinitely, with 360° photosphere documentation. Milestone tracking and marketing content support to showcase project achievements. High-resolution visuals ensure clarity for remote oversight and stakeholder updates. Seamless integration with secure cloud systems for easy access and workflow efficiency.",
      bullets: [
        "Live-feed remote monitoring and timelapse capture for real-time site progress tracking",
        "UHD quality video streams, archivable indefinitely, with 360° photosphere documentation",
        "Milestone tracking and marketing content support to showcase project achievements",
        "High-resolution visuals ensure clarity for remote oversight and stakeholder updates",
        "Seamless integration with secure cloud systems for easy access and workflow efficiency"
      ],
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "UHD MONITORING"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "SECURITY CAMERAS",
      description: "Automated motion and threat detection with live human verification and dispatch. Five Diamond Certified protection with alarms, strobes, and thermal night vision. License Plate Recognition (LPR) enhances site security and access monitoring. Real-time alerts and robust encryption safeguard sensitive project data. Cloud-based integration ensures reliable, secure monitoring from any device.",
      bullets: [
        "Automated motion and threat detection with live human verification and dispatch",
        "Five Diamond Certified protection with alarms, strobes, and thermal night vision",
        "License Plate Recognition (LPR) enhances site security and access monitoring",
        "Real-time alerts and robust encryption safeguard sensitive project data",
        "Cloud-based integration ensures reliable, secure monitoring from any device"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "FIVE DIAMOND CERTIFIED"
    }
  ];

  return (
    <section className="py-24 bg-white concrete-pattern">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <Badge className="bg-black text-white px-8 py-3 text-lg font-bold border-2 border-red-500 mb-8 angular-corner">
            PLATFORM FEATURES
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-10 tracking-tight">
            COMPLETE JOBSITE
            <br />
            <span className="text-red-500">INTELLIGENCE</span>
          </h2>
          <p className="text-gray-700 text-xl md:text-2xl max-w-5xl mx-auto font-medium leading-relaxed">
            Transform your construction site with AI-powered monitoring, real-time analytics,
            and comprehensive security through our revolutionary crane-mounted camera system.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-4 border-black shadow-lg overflow-hidden angular-corner bg-white">
              {/* Title and Icon at Top */}
              <CardHeader className="pb-4 bg-black">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 text-red-500">{feature.icon}</div>
                  <CardTitle className="text-2xl font-black text-white tracking-wide">{feature.title}</CardTitle>
                </div>
                <Badge className="w-fit bg-black border-2 border-red-500 text-white font-bold text-base angular-corner mt-2 absolute bottom-4 left-4">
                  {feature.tag}
                </Badge>
              </CardHeader>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <Badge className="w-fit bg-black border-2 border-red-500 text-white font-bold text-sm angular-corner mt-2 absolute bottom-4 left-4">
                  {feature.tag}
                </Badge>
              </div>

              {/* Bulleted List */}
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium leading-relaxed text-base">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* View Products Button */}
        <div className="max-w-8xl mx-auto p-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-24">
            
          <Link href="/products">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 font-black text-lg border-4 border-black hover:border-red-600 transition-all duration-200 angular-corner">
              LEARN MORE
            </Button>
          </Link>
          </div>
        </div>

        {/* How It Works - Angular Design */}
        <div className="bg-black p-16 angular-clip">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
              HOW IT <span className="text-red-500">WORKS</span>
            </h3>
            <p className="text-white/90 text-xl font-medium">
              Three-step process to digitize your construction site with industrial precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-24 h-24 bg-red-500 border-4 border-white flex items-center justify-center mx-auto mb-8 angular-corner group-hover:bg-red-600 transition-colors">
                <Camera className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-6 tracking-wide">1. CAMERA FEED</h4>
              <p className="text-white/80 font-medium text-lg">Crane-mounted cameras capture high-resolution overhead footage</p>
              <ArrowRight className="w-10 h-10 text-red-500 mx-auto mt-6 hidden md:block" />
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-red-500 border-4 border-white flex items-center justify-center mx-auto mb-8 angular-corner group-hover:bg-red-600 transition-colors">
                <Cpu className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-6 tracking-wide">2. AI ANALYSIS</h4>
              <p className="text-white/80 font-medium text-lg">Industrial-grade algorithms process and analyze visual intelligence data</p>
              <ArrowRight className="w-10 h-10 text-red-500 mx-auto mt-6 hidden md:block" />
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-red-500 border-4 border-white flex items-center justify-center mx-auto mb-8 angular-corner group-hover:bg-red-600 transition-colors">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-6 tracking-wide">3. DASHBOARD INSIGHTS</h4>
              <p className="text-white/80 font-medium text-lg">Access real-time metrics and analytics in secure cloud platform</p>
              <CheckCircleIcon className="w-10 h-10 text-red-500 mx-auto mt-6 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
