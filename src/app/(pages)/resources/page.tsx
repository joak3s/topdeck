import { Badge } from "@/components/ui/badge";

export default function ResourcesPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-red-500 to-black text-white py-20 concrete-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-black text-white px-6 py-2 font-bold border-2 border-red-500 mb-6 angular-corner">
              RESOURCES
            </Badge>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              RESOURCES & <span className="text-white">DOCUMENTATION</span>
            </h1>
            <p className="text-white/90 text-xl font-medium">
              Case studies, documentation, and support materials coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Resources content coming soon */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-black mb-8">
            COMPREHENSIVE RESOURCES <span className="text-red-500">COMING SOON</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Our resource library including case studies, technical documentation, and support materials is being finalized.
          </p>
        </div>
      </section>
    </div>
  );
}
