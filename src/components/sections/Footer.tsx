import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 concrete-texture">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="text-white hover:opacity-80 transition-opacity">
              <Image src="/images/topdeck-logo-white.svg" alt="Topdeck Logo" width={250} height={200} />
              </Link>
            </div>
            <p className="text-white/80 text-lg font-medium leading-relaxed mb-8 max-w-md">
              Revolutionizing construction site visibility through AI-powered crane-mounted intelligence systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-bold border-2 border-red-500 hover:border-red-600 transition-all duration-200 angular-corner">
                  GET STARTED TODAY
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-8 py-3 font-bold transition-all duration-200 angular-corner"
              >
                SCHEDULE DEMO
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 tracking-wide">PRODUCTS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products#ai-reality-capture"
                  className="text-white/80 hover:text-red-500 font-medium transition-colors"
                >
                  AI Reality Capture
                </Link>
              </li>
              <li>
                <Link
                  href="/products#remote-monitoring"
                  className="text-white/80 hover:text-red-500 font-medium transition-colors"
                >
                  Remote Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/products#site-security"
                  className="text-white/80 hover:text-red-500 font-medium transition-colors"
                >
                  Site Security
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white/80 hover:text-red-500 font-medium transition-colors"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-black text-lg mb-6 tracking-wide">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-red-500 font-medium transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-white/80 hover:text-red-500 font-medium transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-white/80 hover:text-red-500 font-medium transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-red-500 font-medium transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-red-500 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/60 font-medium">
                © {currentYear} Topdeck.ai. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                href="/request-quote"
                className="text-white/60 hover:text-red-500 font-medium transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
