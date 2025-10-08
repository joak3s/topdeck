import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { 
  Camera, 
  Shield, 
  Eye, 
  ArrowRight,
  Zap,
  Clock,
  Settings,
  Activity,
  Map,
  Target,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
export default function ProductsPage() {
  const products = [
    {
      id: 'ai-reality-capture',
      title: 'AI REALITY CAPTURE',
      description: 'Advanced AI-driven analytics platform that transforms visual data into actionable insights for project optimization.',
      image: '/images/topdeck-mapping-camera.png',
      keyFeatures: [
        'AI-Driven Analytics',
        'Blueprint Overlays',
        'Progress Tracking',
        'Quality Control Analysis',
        'Orthomosaic Map Generation',
        'Custom Reporting Dashboard'
      ],
      cameraDetails: [
        'Mapping Camera System',
        'High-Resolution Sensors',
        'GPS Integration',
        'Multi-Spectral Imaging',
        'Precision Calibration'
      ],
      benefits: [
        'Automate progress documentation',
        'Identify issues before they escalate',
        'Generate accurate site measurements'
      ],
      icon: <Eye className="w-8 h-8" />,
      ctaText: 'Explore AI Reality Capture',
      color: 'red'
    },
    {
      id: 'remote-monitoring',
      title: 'REMOTE MONITORING',
      description: 'Ultra-high definition remote monitoring solution providing real-time visibility of your construction site from anywhere in the world.',
      image: '/images/topdeck-telephoto-ptz-camera.png',
      keyFeatures: [
        'Real-Time UHD Streaming',
        'Remote Pan/Tilt/Zoom Control',
        'Automated Time-Lapses',
        'Multi-Site Dashboard',
        'Weather-Resistant Housing',
        'Cloud Storage & Archiving'
      ],
      cameraDetails: [
        'Telephoto PTZ Camera',
        '4K Ultra HD Resolution',
        '30x Optical Zoom',
        'IR Night Vision',
        'IP67 Weatherproof Rating'
      ],
      benefits: [
        'Reduce site visits by 80%',
        'Monitor multiple projects remotely',
        'Create compelling project documentation'
      ],
      icon: <Camera className="w-8 h-8" />,
      ctaText: 'Explore Remote Monitoring',
      color: 'red'
    },
    {
      id: 'site-security',
      title: 'SITE SECURITY',
      description: 'Comprehensive security solution with AI-powered threat detection, thermal imaging, and automated response systems.',
      image: '/images/topdeck-wide-angle-ptz-camera.png',
      keyFeatures: [
        'Automated Motion/Threat Detection',
        'Thermal Night Vision',
        'Perimeter Breach Alerts',
        'License Plate Recognition',
        'Two-Way Audio Communication',
        'Emergency Response Integration'
      ],
      cameraDetails: [
        '360° Dome Coverage',
        'Thermal Imaging Sensor',
        'Smart Motion Detection',
        'Vandal-Resistant Design'
      ],
      benefits: [
        'Prevent theft and vandalism',
        '24/7 automated monitoring',
        'Instant security alerts'
      ],
      icon: <Shield className="w-8 h-8" />,
      ctaText: 'Explore Site Security',
      color: 'black'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black concrete-texture text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="bg-black text-white border-2 border-white px-6 py-3 font-bold mb-8 rounded-modern">
              PRODUCT SUITE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
              COMPLETE CONSTRUCTION
              <br />
              <span className="text-white">INTELLIGENCE PLATFORM</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-medium">
              Three integrated solutions designed to revolutionize how you monitor, 
              secure, and analyze your construction projects from crane-mounted perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white concrete-pattern">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div key={product.id} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  
                  {/* Product Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative">
                      <div className="bg-gray-100 p-12 aspect-square flex items-center justify-center rounded-modern-lg border-4 border-black shadow-2xl group-hover:shadow-red-500/25 transition-all duration-300">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.title}
                          width={400}
                          height={300}
                          className="w-full h-auto max-w-md mx-auto object-contain"
                        />
                      </div>
                      
                      {/* Floating Specs Badge */}
                      <div className="absolute -top-6 -right-6 bg-red-500 border-4 border-black p-4 rounded-modern shadow-xl">
                        {product.icon}
                      </div>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    
                    {/* Product Header */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-tight">
                        {product.title}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        {product.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-black text-black mb-6 tracking-wide flex items-center gap-3">
                        <Settings className="w-6 h-6 text-red-500" />
                        KEY FEATURES
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.keyFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-modern flex-shrink-0"></div>
                            <span className="text-gray-700 font-medium text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Camera Specifications */}
                    <div className="bg-black p-6 rounded-modern">
                      <h3 className="text-lg font-black text-white mb-4 tracking-wide flex items-center gap-3">
                        <Camera className="w-5 h-5 text-red-500" />
                        CAMERA SPECIFICATIONS
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.cameraDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Target className="w-3 h-3 text-red-500 flex-shrink-0" />
                            <span className="text-white/90 text-sm font-medium">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-black text-black mb-4 tracking-wide flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-red-500" />
                        KEY BENEFITS
                      </h3>
                      <div className="space-y-3">
                        {product.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <span className="text-gray-700 font-bold">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration & Platform Section */}
      <section className="py-20 bg-black concrete-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">
              UNIFIED <span className="text-red-500">PLATFORM EXPERIENCE</span>
            </h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto font-medium leading-relaxed">
              All three solutions integrate seamlessly through our cloud-based dashboard, 
              providing unified control and comprehensive analytics across your entire construction portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-4 border-red-500 shadow-2xl bg-black rounded-modern group hover:border-white transition-colors duration-300">
              <CardHeader>
                <Clock className="w-16 h-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white font-black tracking-wide text-xl">REAL-TIME UNIFIED CONTROL</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 font-medium">
                  Monitor all your sites, cameras, and security systems from a single, 
                  intuitive dashboard with real-time status updates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-4 border-red-500 shadow-2xl bg-black rounded-modern group hover:border-white transition-colors duration-300">
              <CardHeader>
                <Activity className="w-16 h-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white font-black tracking-wide text-xl">CROSS-PLATFORM ANALYTICS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 font-medium">
                  Combine data from monitoring, security, and AI capture systems 
                  for comprehensive project insights and reporting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-4 border-red-500 shadow-2xl bg-black rounded-modern group hover:border-white transition-colors duration-300">
              <CardHeader>
                <Map className="w-16 h-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-white font-black tracking-wide text-xl">SCALABLE DEPLOYMENT</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/80 font-medium">
                  Start with one solution and seamlessly add others as your 
                  project needs evolve, all within the same platform.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <Link href="/request-quote">
              <Button className="bg-red-500 hover:bg-red-600 text-white border-4 border-white hover:border-red-600 px-12 py-6 font-black text-xl rounded-modern">
                REQUEST CUSTOM SOLUTION
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}