import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { 
  Camera, 
  BarChart3, 
  Shield, 
  Target, 
  Cpu,
  Activity,
  ArrowRight,
  CheckCircleIcon
} from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Camera className="w-12 h-12 text-red-500" />,
      title: "360° PHOTOSPHERES",
      description: "Capture complete site perspectives with automated 360-degree imaging from crane-mounted sensors",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "CONSTRUCTION CAMERAS"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-red-500" />,
      title: "TIMELAPSE ANALYTICS",
      description: "AI-powered progress tracking with automated milestone detection and deviation alerts",
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "PROJECT INTELLIGENCE"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "MOTION DETECTION",
      description: "Advanced security with thermal vision, perimeter monitoring, and automated threat response",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "SECURITY"
    },
    {
      icon: <Target className="w-12 h-12 text-red-500" />,
      title: "HOOK ACTIVITY TRACKING",
      description: "Precise monitoring of crane operations, load movements, and working deck optimization",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "CRANE INTELLIGENCE"
    },
    {
      icon: <Activity className="w-12 h-12 text-red-500" />,
      title: "CONCRETE WORKFLOWS",
      description: "Monitor concrete pours, curing times, quality metrics, and structural integrity",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "WORKFLOW ANALYTICS"
    },
    {
      icon: <Cpu className="w-12 h-12 text-red-500" />,
      title: "LICENSE PLATE RECOGNITION",
      description: "Automated vehicle tracking, access control, and comprehensive site entry logging",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tag: "SECURITY"
    }
  ];

  return (
    <section className="py-20 bg-white concrete-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-black text-white px-6 py-2 font-bold border-2 border-red-500 mb-6 angular-corner">
            PLATFORM FEATURES
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8 tracking-tight">
            COMPLETE JOBSITE
            <br />
            <span className="text-red-500">INTELLIGENCE</span>
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto font-medium leading-relaxed">
            Transform your construction site with AI-powered monitoring, real-time analytics, 
            and comprehensive security through our revolutionary crane-mounted camera system.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-4 border-black shadow-lg overflow-hidden angular-corner bg-white">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-red-500/00 group-hover:bg-red-500/20 transition-all duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-black border-2 border-red-500 text-white font-bold angular-corner">
                  {feature.tag}
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <CardTitle className="text-xl font-black text-black tracking-wide">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 font-medium leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works - Angular Design */}
        <div className="bg-black p-12 angular-clip">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              HOW IT <span className="text-red-500">WORKS</span>
            </h3>
            <p className="text-white/90 text-lg font-medium">
              Three-step process to digitize your construction site with industrial precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-500 border-4 border-white flex items-center justify-center mx-auto mb-6 angular-corner group-hover:bg-red-600 transition-colors">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-black text-white mb-4 tracking-wide">1. CAMERA FEED</h4>
              <p className="text-white/80 font-medium">Crane-mounted cameras capture high-resolution overhead footage</p>
              <ArrowRight className="w-8 h-8 text-red-500 mx-auto mt-4 hidden md:block" />
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-500 border-4 border-white flex items-center justify-center mx-auto mb-6 angular-corner group-hover:bg-red-600 transition-colors">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-black text-white mb-4 tracking-wide">2. AI ANALYSIS</h4>
              <p className="text-white/80 font-medium">Industrial-grade algorithms process and analyze visual intelligence data</p>
              <ArrowRight className="w-8 h-8 text-red-500 mx-auto mt-4 hidden md:block" />
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-red-500 border-4 border-white flex items-center justify-center mx-auto mb-6 angular-corner group-hover:bg-red-600 transition-colors">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-black text-white mb-4 tracking-wide">3. DASHBOARD INSIGHTS</h4>
              <p className="text-white/80 font-medium">Access real-time metrics and analytics in secure cloud platform</p>
              <CheckCircleIcon className="w-8 h-8 text-red-500 mx-auto mt-4 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
