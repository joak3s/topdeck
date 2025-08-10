import { Badge } from "@/components/ui/badge";

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-red-500 to-black text-white py-20 concrete-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-black text-white px-6 py-2 font-bold border-2 border-red-500 mb-6 angular-corner">
              SOLUTIONS
            </Badge>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              CONSTRUCTION <span className="text-white">INTELLIGENCE SOLUTIONS</span>
            </h1>
            <p className="text-white/90 text-xl font-medium max-w-4xl mx-auto">
              Comprehensive AI-powered solutions for project intelligence, construction cameras, and security systems.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions content coming soon */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-black mb-8">
            DETAILED SOLUTIONS <span className="text-red-500">COMING SOON</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Our comprehensive solutions documentation is being finalized. Contact us for detailed information.
          </p>
        </div>
      </section>
    </div>
  );
}
