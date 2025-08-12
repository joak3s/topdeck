"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, QuoteIcon, FileScan } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll be in touch soon.");
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
        <section className="bg-gradient-to-br from-black/80 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-black text-white px-6 py-2 font-bold border-2 border-red-500 mb-6 angular-corner">
              CONTACT US
            </Badge>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              GET STARTED WITH <span className="text-white">TOPDECK.AI</span>
            </h1>
            <p className="text-white/90 text-xl font-medium max-w-4xl mx-auto">
              Ready to transform your construction site with AI-powered intelligence? Let&apos;s discuss your project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-black text-black mb-8 tracking-tight">
                SEND US A <span className="text-red-500">MESSAGE</span>
              </h2>
              
              <Card className="border-4 border-black shadow-xl angular-corner">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-black font-bold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium angular-corner"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-black font-bold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium angular-corner"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-black font-bold mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium angular-corner"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-black font-bold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium angular-corner"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-black font-bold mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium angular-corner"
                      >
                        <option value="">Select project type</option>
                        <option value="commercial">Commercial Construction</option>
                        <option value="residential">Residential Development</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="industrial">Industrial</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-black font-bold mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-black focus:border-red-500 focus:ring-0 outline-none font-medium angular-corner resize-none"
                        placeholder="Tell us about your project, site size, timeline, and specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-6 font-black text-lg border-4 border-black hover:border-red-600 transition-all duration-200 angular-corner"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      SEND INQUIRY
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-black text-black mb-8 tracking-tight">
                GET IN <span className="text-red-500">TOUCH</span>
              </h2>

              <div className="space-y-8">
                <Card className="border-4 border-black shadow-xl angular-corner">
                  <CardHeader>
                    <CardTitle className="flex items-center text-black font-black">
                      <Mail className="w-6 h-6 text-red-500 mr-3" />
                      EMAIL US
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">
                      <a href="mailto:info@topdeck.ai" className="text-red-500 hover:text-red-600 font-bold">
                        info@topdeck.ai
                      </a>
                    </p>
                    <p className="text-gray-700 font-medium">
                      <a href="mailto:sales@topdeck.ai" className="text-red-500 hover:text-red-600 font-bold">
                        sales@topdeck.ai
                      </a>
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-4 border-black shadow-xl angular-corner">
                  <CardHeader>
                    <CardTitle className="flex items-center text-black font-black">
                      <Phone className="w-6 h-6 text-red-500 mr-3" />
                      CALL US
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">
                      <a href="tel:+1-555-TOPDECK" className="text-red-500 hover:text-red-600 font-bold">
                        +1 (555) TOP-DECK
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday, 8:00 AM - 6:00 PM PST
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-4 border-black shadow-xl angular-corner">
                  <CardHeader>
                    <CardTitle className="flex items-center text-black font-black">
                      <MapPin className="w-6 h-6 text-red-500 mr-3" />
                      LOCATION
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">
                      Pasadena, California, United States
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Linked with the JPL/Caltech ecosystem
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-4 border-black shadow-xl angular-corner">
                  <CardHeader>
                    <CardTitle className="flex items-center text-black font-black">
                      <FileScan className="w-6 h-6 text-red-500 mr-3" />
                      REQUEST A QUOTE
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium mb-4">
                      To provide you with a detailed quote, please fill out the form on this following page
                    </p>
                    <Link href="/request-quote">
                      <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-bold border-4 border-black hover:border-red-600 transition-all duration-200 angular-corner">
                        REQUEST QUOTE
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
