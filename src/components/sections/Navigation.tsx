"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

import Image from "next/image";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    {
      id: "products",
      label: "Products",
      href: "/products",
      dropdown: [
        { label: "AI Reality Capture", href: "/products#ai-reality-capture" },
        { label: "Remote Monitoring", href: "/products#remote-monitoring" },
        { label: "Site Security", href: "/products#site-security" },
      ],
    },
    { id: "clients", label: "Clients", href: "/clients" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleDropdownHover = (itemId: string) => {
    setHoveredDropdown(itemId);
  };

  const handleDropdownLeave = () => {
    setHoveredDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg border-b-2">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-white hover:opacity-80 transition-opacity group"
            >
              <Image src="/images/topdeck-logo-color-lt-grey.svg" alt="Topdeck Logo" width={180} height={120} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => handleDropdownHover(item.id)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className={`rounded-sm text-white hover:bg-red-500 hover:text-white px-6 py-2 font-semibold transition-all duration-200 ${
                          pathname === item.href ||
                          pathname.startsWith(item.href + "/")
                            ? "bg-red-500 text-black"
                            : ""
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                    
                    {/* Custom Dropdown Menu */}
                    {hoveredDropdown === item.id && (
                      <div className="absolute top-full left-0 bg-black border-red-500 border-2 rounded-modern shadow-lg min-w-[200px] z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block text-white hover:bg-red-500 focus:bg-red-500 font-medium cursor-pointer px-4 py-3 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`rounded-sm text-white hover:bg-red-500 hover:text-white px-6 py-2 font-semibold transition-all duration-200 ${
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))
                        ? "bg-red-500 text-black"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/request-quote">
              <Button className="rounded-sm bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-bold border-2 border-red-500 hover:border-red-600 transition-all duration-200">
                REQUEST QUOTE
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-white hover:bg-red-500 p-2 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t-2 border-red-500">
              {navItems.map((item) => (
                <div key={item.id}>
                  <Link
                    href={item.href}
                    onClick={handleMobileMenuClose}
                    className={`text-white hover:bg-red-500 block px-4 py-3 font-semibold w-full text-left transition-colors ${
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))
                        ? "bg-red-500 text-white"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={handleMobileMenuClose}
                          className="text-white/80 hover:bg-red-500 hover:text-white block px-4 py-2 font-medium w-full text-left transition-colors text-sm"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/request-quote" onClick={handleMobileMenuClose}>
                <Button className="bg-red-500 hover:bg-red-600 text-white w-full mt-4 font-bold">
                  REQUEST QUOTE
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
