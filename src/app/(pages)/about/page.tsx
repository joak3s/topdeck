import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black/80 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="bg-black text-white px-6 py-2 font-bold border-2 border-red-500 mb-6 rounded-modern">
              ABOUT US
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
              ABOUT <span className="text-white">TOPDECK.AI</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-bold mb-6 tracking-wide">
              STREAMLINE VISIBILITY TO COURSE-CORRECT IN REAL-TIME AND REDUCE REWORK
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white concrete-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black p-12 rounded-modern-xl">
            <h2 className="text-3xl font-black text-white mb-8 tracking-tight">
              COMPANY <span className="text-red-500">OVERVIEW</span>
            </h2>
            <div className="text-white/90 text-lg leading-relaxed space-y-6 font-medium">
              <p>
                Topdeck is a leading provider of end-to-end visual intelligence solutions that 
                enable general contractors and developers to capture, manage and analyze their assets 
                and turn the collected data into valuable business insights.
              </p>
              <p>
                The company&apos;s offerings combine high-performance sensors with Topdeck.AI, a secured 
                cloud-based platform to power your entire visual intelligence workflow, from visual 
                data management to advanced analytics. Its solutions are sold globally.
              </p>
              <p>
                Founded in 2015 by experts in the aerospace industry and computer science, the 
                company&apos;s main office is situated in the Los Angeles area and is strongly linked 
                with the JPL/Caltech ecosystem.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="bg-white border-4 border-black p-8 rounded-modern shadow-xl">
              <h3 className="text-2xl font-black text-black mb-6 tracking-wide">OUR MISSION</h3>
              <p className="text-gray-700 text-lg font-medium leading-relaxed">
                To revolutionize construction site visibility through innovative crane-mounted 
                intelligence systems that enable real-time decision making and eliminate costly rework.
              </p>
            </div>
            <div className="bg-red-500 border-4 border-black p-8 rounded-modern shadow-xl">
              <h3 className="text-2xl font-black text-white mb-6 tracking-wide">OUR VISION</h3>
              <p className="text-white/90 text-lg font-medium leading-relaxed">
                Every construction site equipped with intelligent monitoring systems that prevent 
                problems before they occur and optimize project outcomes through data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
