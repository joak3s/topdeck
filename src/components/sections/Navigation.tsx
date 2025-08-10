"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    {
      id: "products",
      label: "Products",
      href: "/products",
      dropdown: [
        { label: "Remote Monitoring", href: "/products#remote-monitoring" },
        { label: "Site Security", href: "/products#site-security" },
        { label: "AI Reality Capture", href: "/products#ai-reality-capture" },
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-2 border-red-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-black hover:opacity-80 transition-opacity group"
            >
              <Image src="/images/topdeck-logo-color.svg" alt="Topdeck Logo" width={150} height={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <DropdownMenu key={item.id}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`text-black hover:bg-red-500 hover:text-white px-6 py-2 font-semibold transition-all duration-200 ${
                          pathname === item.href ||
                          pathname.startsWith(item.href + "/")
                            ? "bg-red-500 text-white"
                            : ""
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border-red-500 border-2">
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.label} asChild>
                          <Link
                            href={subItem.href}
                            className="text-black hover:bg-red-500 focus:bg-red-500 font-medium cursor-pointer"
                          >
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`text-black hover:bg-red-500 hover:text-white px-6 py-2 font-semibold transition-all duration-200 ${
                      pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))
                        ? "bg-red-500 text-white"
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
            <Link href="/contact">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-bold border-2 border-red-500 hover:border-red-600 transition-all duration-200">
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
                <Link
                  key={item.id}
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
              ))}
              <Link href="/contact" onClick={handleMobileMenuClose}>
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
