"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const ClientsSection = () => {
  const clients = [
    { name: "Hensel Phelps", logo: "/images/clients/hensel-phelps.png", href: "https://www.henselphelps.com/" },
    { name: "Bluebeam", logo: "/images/clients/bluebeam.png", href: "https://www.bluebeam.com/" },
    { name: "Swinerton", logo: "/images/clients/swinerton.png", href: "https://www.swinerton.com/" },
    { name: "Bigge Crane", logo: "/images/clients/bigge.png", href: "https://www.bigge.com/" },
    { name: "SCG America", logo: "/images/clients/scg-america.png", href: "https://www.scgamerica.com/" }
  ];

  const testimonials = [
    {
      quote: "Topdeck.ai's crane-mounted cameras saved us $300K and helped us finish 3 months early. The overhead view gives us insights we never had before.",
      author: "Mike Rodriguez",
      title: "Project Manager",
      company: "Hensel Phelps",
      project: "Downtown Office Complex - 42 Stories",
      savings: "$300K SAVED"
    },
    {
      quote: "The integration with our existing workflows through Bluebeam has been seamless. The AI analytics provide real-time insights that help us make better decisions.",
      author: "Sarah Chen",
      title: "Digital Construction Manager", 
      company: "Bluebeam",
      project: "Digital Construction Platform",
      savings: "25% EFFICIENCY GAIN"
    },
    {
      quote: "Security features are outstanding. Motion detection and license plate recognition have dramatically improved our site safety across all projects.",
      author: "David Thompson",
      title: "Site Supervisor",
      company: "Swinerton",
      project: "Mixed-Use Development",
      savings: "ZERO SECURITY INCIDENTS"
    }
  ];

  const caseStudies = [
    {
      title: "42-STORY OFFICE COMPLEX",
      client: "HENSEL PHELPS",
      metrics: [
        { label: "TIME SAVED", value: "3 MONTHS" },
        { label: "COST REDUCTION", value: "$300K" },
        { label: "REWORK ELIMINATED", value: "85%" }
      ],
      description: "Crane-mounted intelligence reduced rework and accelerated project timeline through predictive analytics"
    },
    {
      title: "MIXED-USE DEVELOPMENT", 
      client: "SWINERTON",
      metrics: [
        { label: "SECURITY INCIDENTS", value: "0" },
        { label: "MONITORING COVERAGE", value: "100%" },
        { label: "RESPONSE TIME", value: "<2 MIN" }
      ],
      description: "Comprehensive security monitoring with AI-powered threat detection eliminated all security incidents while providing complete site coverage"
    }
  ];

  return (
    <>
      {/* Client Logos - Professional White Section */}
      <section className="py-20 bg-white">
        <div className="main-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-black text-white px-6 py-2 font-bold border-2 border-red-500 mb-6 rounded-modern">
              TRUSTED PARTNERS
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-8 tracking-tight">
              LEADING CONSTRUCTION COMPANIES
              <br />
              <span className="text-red-500">TRUST TOPDECK</span>
            </h2>
            
            <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center">
              {clients.map((client, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => window.open(client.href, '_blank')}>
                  <div className="w-full h-32 bg-black border-2 border-gray-200 rounded-modern flex items-center justify-center mx-auto group-hover:border-red-500 group-hover:shadow-lg transition-all duration-300 p-8">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={400}
                      height={200}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Black Section */}
      <section className="py-20 bg-black concrete-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              WHAT OUR <span className="text-red-500">CLIENTS SAY</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black border-4 border-red-500 shadow-2xl hover:shadow-red-500/25 transition-all duration-300 rounded-modern ">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-red-500 mb-6" />
                  <blockquote className="text-white text-lg leading-relaxed mb-8 font-medium">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t-2 border-red-500 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-black text-white text-lg tracking-wide">{testimonial.author}</p>
                        <p className="text-white/80 font-medium">{testimonial.title}</p>
                        <p className="text-red-500 font-bold tracking-wide">{testimonial.company}</p>
                      </div>
                      <Badge className="bg-red-500 text-black font-black border-2 border-white rounded-modern">
                        {testimonial.savings}
                      </Badge>
                    </div>
                    <p className="text-white/60 font-medium italic">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - White Section */}
      <section className="py-20 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-black mb-6 tracking-tight">
              CASE <span className="text-red-500">STUDIES</span>
            </h3>
            <p className="text-gray-700 text-lg font-medium">
              Real results from real projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-4 border-black shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white rounded-modern">
                <CardContent className="p-10">
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-red-500 text-white font-black px-4 py-2 border-2 border-black rounded-modern">
                      {study.client}
                    </Badge>
                    <ArrowRight className="w-6 h-6 text-red-500 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <h4 className="text-2xl font-black text-black mb-6 tracking-wide">{study.title}</h4>
                  <p className="text-gray-700 mb-8 font-medium text-lg leading-relaxed">{study.description}</p>
                  
                  <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center bg-gray-50 p-4 border-2 border-red-500 rounded-modern">
                        <p className="text-2xl font-black text-red-500 mb-1">{metric.value}</p>
                        <p className="text-black font-bold text-xs tracking-wide">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 font-black text-lg border-4 border-black hover:border-red-600 transition-all duration-200 rounded-modern">
              VIEW ALL CASE STUDIES
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
