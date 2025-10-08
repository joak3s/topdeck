'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import {
  Camera,
  BarChart3,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircleIcon,
  Eye,
  Video
} from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useState } from 'react';

export const HowItWorksSection = () => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  // Pie chart data for construction site monitoring (4 slices)
  const chartData = [
    { label: 'Concrete Placement', value: 33, color: '#ef4444', lightColor: '#fca5a5' },
    { label: 'Steel Placement', value: 27, color: '#f97316', lightColor: '#fdba74' },
    { label: 'Rebar Placement', value: 22, color: '#64748b', lightColor: '#cbd5e1' },
    { label: 'Framing', value: 18, color: '#374151', lightColor: '#9ca3af' },
  ];

  // Calculate pie segments
  const calculateSegments = () => {
    let currentAngle = -90; // Start from top
    return chartData.map((item, index) => {
      const percentage = item.value;
      const angle = (percentage / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      
      // Convert to radians
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      
      // Calculate path
      const x1 = 150 + 120 * Math.cos(startRad);
      const y1 = 150 + 120 * Math.sin(startRad);
      const x2 = 150 + 120 * Math.cos(endRad);
      const y2 = 150 + 120 * Math.sin(endRad);
      
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      const pathData = [
        `M 150 150`,
        `L ${x1} ${y1}`,
        `A 120 120 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        `Z`
      ].join(' ');
      
      // Calculate label position (middle of the slice)
      const midAngle = startAngle + (angle / 2);
      const midRad = (midAngle * Math.PI) / 180;
      const labelRadius = 75; // Position text at 75% of radius
      const labelX = 150 + labelRadius * Math.cos(midRad);
      const labelY = 150 + labelRadius * Math.sin(midRad);
      
      currentAngle = endAngle;
      
      return {
        ...item,
        pathData,
        startAngle,
        endAngle,
        labelX,
        labelY,
      };
    });
  };

  const segments = calculateSegments();

  return (
    <section className="py-24 bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works */}
        <div className="bg-black p-16 rounded-modern-xl">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
              HOW IT <span className="text-red-500">WORKS</span>
            </h3>
            <p className="text-white/90 text-xl font-medium">
              Three-step process to digitize your construction site with industrial precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-24 h-24 bg-red-500 border-4 border-white flex items-center justify-center mx-auto mb-8 rounded-modern group-hover:bg-red-600 transition-colors">
                <Camera className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-6 tracking-wide">1. CAMERA FEED</h4>
              <p className="text-white/80 font-medium text-lg">Crane-mounted cameras capture high-resolution overhead footage</p>
              <ArrowRight className="w-10 h-10 text-red-500 mx-auto mt-6 hidden md:block" />
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-red-500 border-4 border-white flex items-center justify-center mx-auto mb-8 rounded-modern group-hover:bg-red-600 transition-colors">
                <Cpu className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-6 tracking-wide">2. AI ANALYSIS</h4>
              <p className="text-white/80 font-medium text-lg">Industrial-grade algorithms process and analyze visual intelligence data</p>
              <ArrowRight className="w-10 h-10 text-red-500 mx-auto mt-6 hidden md:block" />
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-red-500 border-4 border-white flex items-center justify-center mx-auto mb-8 rounded-modern group-hover:bg-red-600 transition-colors">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-2xl font-black text-white mb-6 tracking-wide">3. DASHBOARD INSIGHTS</h4>
              <p className="text-white/80 font-medium text-lg">Access real-time metrics and analytics in secure cloud platform</p>
              <CheckCircleIcon className="w-10 h-10 text-red-500 mx-auto mt-6 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
