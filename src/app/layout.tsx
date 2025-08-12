import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Topdeck - AI-Powered Construction Site Intelligence",
  description: "Transform your construction site with AI-powered monitoring, real-time analytics, and comprehensive security through our revolutionary crane-mounted camera system.",
  keywords: "construction technology, AI monitoring, crane cameras, jobsite intelligence, construction security, project management",
  authors: [{ name: "Topdeck" }],
  icons: {
    icon: "/Topdeck-White-Shadow-Iso.png",
    shortcut: "/Topdeck-White-Shadow-Iso.png",
    apple: "/Topdeck-White-Shadow-Iso.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}