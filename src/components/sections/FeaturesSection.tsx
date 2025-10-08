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

export const FeaturesSection = () => {
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
    <section className="py-24 bg-gradient-to-b from-[#000000] via-[#121212] to-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-32">
          <Badge className="bg-black text-white px-8 py-3 text-lg font-bold border-2 border-red-500 mb-8 rounded-modern">
            PLATFORM FEATURES
          </Badge>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-10 tracking-tight">
            COMPLETE JOBSITE
            <br />
            <span className="text-red-500">INTELLIGENCE</span>
          </h2>
          <p className="text-white/90 text-xl md:text-2xl max-w-5xl mx-auto font-medium leading-relaxed">
            Transform your construction site with AI-powered monitoring, real-time analytics,
            and comprehensive security through our revolutionary crane-mounted camera system.
          </p>
        </div>
        {/* Grid of features */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-16  mx-auto">
          {/* Features 1 */}
          <div className="flex flex-col mb-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                DAILY <span className="text-red-500">REPORTS</span>
              </h3>
              <p className="text-white/80 text-xl font-medium">
                Distribution of crane usage and productivity
              </p>
            </div>
            {/* Neumorphic Pie Chart Wrapper */}
            <div className="flex flex-col items-center justify-center gap-16 max-w-6xl mx-auto">
              {/* Neumorphic Pie Chart */}
              <div className="relative">
                {/* Outer neumorphic container */}
                <div
                  className="relative w-[300px] h-[300px] bg-gradient-to-tl from-[#0d0d0d] to-[#141414] rounded-full flex items-center justify-center"
                  style={{
                    boxShadow: `
                    20px 20px 40px #000000,
                    -20px -20px 40px #1a1a1a
                  `
                  }}
                >
                  {/* Inner chart container with inset shadow */}
                  <div
                    className="relative w-[300px] h-[300px] rounded-full flex items-center justify-center"
                    style={{
                      background: '#0f0f0f',
                      boxShadow: `
                      inset 8px 8px 16px #000000,
                      inset -8px -8px 16px #1a1a1a
                    `
                    }}
                  >
                    {/* SVG Pie Chart */}
                    <svg
                      width="300"
                      height="300"
                      viewBox="0 0 300 300"
                      className="transform transition-transform duration-500"
                    >
                      <defs>
                        {/* Shadow filters for each segment */}
                        {segments.map((_, index) => (
                          <filter key={`shadow-${index}`} id={`shadow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                            <feOffset dx="2" dy="2" result="offsetblur" />
                            <feComponentTransfer>
                              <feFuncA type="linear" slope="0.5" />
                            </feComponentTransfer>
                            <feMerge>
                              <feMergeNode />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        ))}

                        {/* Glow effect for hover */}
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Render pie segments */}
                      {segments.map((segment, index) => (
                        <g key={index}>
                          <path
                            d={segment.pathData}
                            fill={hoveredSegment === index ? segment.lightColor : segment.color}
                            filter={hoveredSegment === index ? 'url(#glow)' : `url(#shadow-${index})`}
                            className="transition-all duration-300 cursor-pointer"
                            style={{
                              transformOrigin: '150px 150px',
                              transform: hoveredSegment === index ? 'scale(1.05)' : 'scale(1)',
                            }}
                            onMouseEnter={() => setHoveredSegment(index)}
                            onMouseLeave={() => setHoveredSegment(null)}
                          />
                          {/* Percentage text always visible */}
                          <text
                            x={segment.labelX}
                            y={segment.labelY}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="fill-white font-black pointer-events-none"
                            style={{
                              fontSize: '18px',
                              filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.8))',
                            }}
                          >
                            {segment.value}%
                          </text>
                        </g>
                      ))}

                      {/* Center circle with linear gradient */}
                      <defs>
                        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0f0f0f" stopOpacity="1" />
                          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="150"
                        cy="150"
                        r="40"
                        fill="url(#centerGradient)"
                      />
                    </svg>
                  </div>
                </div>

              </div>
              {/* Legend with neumorphic styling */}
              <div className="flex flex-col gap-1 w-full min-w-sm lg:w-auto bg-[#0a0a0a] rounded-xl p-4"
                style={{
                  boxShadow: `
                  6px 6px 12px #000000,
                  -6px -6px 12px #1a1a1a,
                  inset 1px 1px 2px rgba(255, 255, 255, 0.05)
                `
                }}
              >
                <h4 className="text-white text-2xl font-black mb-2 pl-2">Subcontractors</h4>
                {segments.map((segment, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer transition-all duration-200 flex items-center gap-3 px-2 pt-1 hover:bg-foreground border-t-1 border-white/10 ${hoveredSegment === index ? 'bg-white/10 pb-1 font-bold' : ''
                      }`}
                    onMouseEnter={() => setHoveredSegment(index)}
                    onMouseLeave={() => setHoveredSegment(null)}
                  >
                    {/* Color indicator */}
                    <div
                      className="w-3 h-8 flex-shrink-0"
                      style={{
                        background: segment.color,
                        boxShadow: hoveredSegment === index ? `0 0 8px ${segment.color}80` : 'none'
                      }}
                    />

                    <div className="flex-1 text-white/90 text-lg">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-white/90 text-lg">{segment.label}</span>
                        <span className="text-white/90 text-lg">{segment.value}%</span>
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </div>
          {/* Features 2 */}
          <div className="flex flex-col mb-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                CRANE <span className="text-red-500">UTILIZATION</span>
              </h3>
              <p className="text-white/80 text-xl font-medium">
                Real-time utilization metrics
              </p>
            </div>

            {/* Utilization Chart Wrapper */}
            <div className="flex flex-col items-center justify-center gap-16 max-w-6xl mx-auto">
              {/* Circular Progress Chart */}
              <div className="relative">
                {/* Outer neumorphic container */}
                <div
                  className="relative w-[300px] h-[300px] bg-gradient-to-tl from-[#0d0d0d] to-[#141414] rounded-full flex items-center justify-center"
                  style={{
                    boxShadow: `
                    20px 20px 40px #000000,
                    -20px -20px 40px #1a1a1a
                  `
                  }}
                >
                  {/* Inner chart container */}
                  <div
                    className="relative w-[300px] h-[300px] rounded-full flex items-center justify-center"
                    style={{
                      background: '#0f0f0f',
                      boxShadow: `
                      inset 8px 8px 16px #000000,
                      inset -8px -8px 16px #1a1a1a
                    `
                    }}
                  >
                    {/* SVG Circle Chart */}
                    <svg width="300" height="300" viewBox="0 0 300 300">
                      {/* Outer circle - Inactive segment (59% - orange) */}
                      <circle
                        cx="150"
                        cy="150"
                        r="120"
                        fill="none"
                        stroke="#fb923c"
                        strokeWidth="30"
                        strokeDasharray="445 309"
                        strokeLinecap="round"
                        className="transform -rotate-90"
                        style={{ transformOrigin: '150px 150px' }}
                      />

                      {/* Outer circle - Value Added segment (41% - green) */}
                      <circle
                        cx="150"
                        cy="150"
                        r="120"
                        fill="none"
                        stroke="#4ade80"
                        strokeWidth="30"
                        strokeDasharray="309 445"
                        strokeDashoffset="-445"
                        className="transform -rotate-90"
                        style={{ transformOrigin: '150px 150px' }}
                      />

                      {/* Inner circle - Utilization segment (41% - blue) */}
                      <circle
                        cx="150"
                        cy="150"
                        r="80"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="15"
                        strokeDasharray="209 295"
                        className="transform -rotate-90"
                        style={{ transformOrigin: '150px 150px' }}
                      />

                      {/* Center text */}
                      <text
                        x="150"
                        y="150"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-white font-black"
                        style={{ fontSize: '48px' }}
                      >
                        41%
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Legend with neumorphic styling */}
              <div className="flex flex-col gap-1 w-full min-w-sm lg:w-auto bg-[#0a0a0a] rounded-xl p-4"
                style={{
                  boxShadow: `
                  6px 6px 12px #000000,
                  -6px -6px 12px #1a1a1a,
                  inset 1px 1px 2px rgba(255, 255, 255, 0.05)
                `
                }}
              >
                <h4 className="text-white text-2xl font-black mb-2 pl-2">Utilization</h4>

                {/* Legend */}
                <div className="space-y-3 pl-2">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-white/90 text-lg font-medium">41% Utilization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <span className="text-white/90 text-lg font-medium">100% Value Added</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                    <span className="text-white/90 text-lg font-medium">0% Non-Value Added</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                    <span className="text-white/90 text-lg font-medium">59% Inactive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col mb-32">
            {/* Neumorphic Daily Schedule Wrapper */}
            <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  PICK <span className="text-red-500">ANALYTICS</span>
                </h3>
                <p className="text-white/80 text-xl font-medium">
                  Crane picks and activities
                </p>
              </div>
              {/* Neumorphic Daily Schedule Timeline */}
              <div className="relative w-full h-full max-w-md bg-background rounded-2xl p-6"
                style={{
                  boxShadow: `
                    10px 10px 20px #000000,
                    -10px -10px 20px #1a1a1a
                  `
                }}>
                <h4 className="text-white font-bold text-2xl mb-6">Crane Picks</h4>

                <div className="flex flex-col space-y-2">

                  {/* 07:15 */}
                  <div className="flex items-start gap-2 border-t border-white/10">
                    <div className="w-16 text-white/70 text-sm pt-1">07:15</div>
                    <div className="bg-[#eb4b4b] text-white rounded-lg px-4 py-2 flex-1"
                      style={{ minHeight: '60px' }}>
                      <div className="font-semibold text-sm">PREFAB- METAL STAIRCASE COMPONENTS: MOVE/FAB</div>
                      <div className="text-xs text-white/80 mt-1">Concrete</div>
                    </div>
                  </div>


                  {/* 07:20 */}
                  <div className="flex items-start gap-2 border-t border-white/10">
                    <div className="w-16 text-white/70 text-sm pt-1">07:20</div>
                    <div className="bg-[#eb4b4b] text-white rounded-lg px-4 py-2 flex-1"
                      style={{ minHeight: '60px' }}>
                      <div className="font-semibold text-sm">PREFAB- METAL STAIRCASE: MOVE/FAB</div>
                      <div className="text-xs text-white/80 mt-1">Concrete</div>
                    </div>
                  </div>

                  {/* 07:25 */}
                  <div className="flex items-start gap-2 border-t border-white/10">
                    <div className="w-16 text-white/70 text-sm pt-1">07:25</div>
                    <div className="bg-[#5B8FA3] text-white rounded-lg px-4 py-2 flex-1"
                      style={{ minHeight: '140px' }}>
                      <div className="font-semibold text-sm">WINDOW WALL GLAZING PANELS: BUNDLE DELIVERY</div>
                      <div className="text-xs text-white/80 mt-1">Window Wall</div>
                    </div>
                  </div>

                  {/* 07:45 */}
                  <div className="flex items-start gap-2 border-t border-white/10">
                    <div className="w-16 text-white/70 text-sm pt-1">07:45</div>
                    <div className="bg-[#5B8FA3] text-white rounded-lg px-4 py-2 flex-1"
                      style={{ minHeight: '120px' }}>
                      <div className="font-semibold text-sm">WINDOW WALL COMPONENTS: DELIVERY</div>
                      <div className="text-xs text-white/80 mt-1">Window Wall</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col mb-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                CRANE <span className="text-red-500">TIMELINE</span>
              </h3>
              <p className="text-white/80 text-xl font-medium">
                Detailed activity breakdown by time
              </p>
            </div>

            {/* Timeline Wrapper */}
            <div className="flex flex-col w-full items-center justify-center gap-16 max-w-6xl mx-auto">
              {/* Timeline Container */}
              <div className="relative w-full bg-gradient-to-tl from-[#0d0d0d] to-[#141414] rounded-xl p-8"
                style={{
                  boxShadow: `
                  6px 6px 12px #000000,
                  -6px -6px 12px #1a1a1a,
                  inset 1px 1px 2px rgba(255, 255, 255, 0.05)
                `
                }}
              >
                <h4 className="text-white text-2xl font-black mb-8">Activity Timeline</h4>

                {/* Timeline Content */}
                <div className="relative">
                  {/* Activity Bars */}
                  <div className="relative h-13">
                    {/* To pick - 0m 56s */}
                    <div className="absolute top-0 h-16" style={{ left: '0%', width: '24%' }}>
                      <div className="border-l-4 border-[#3498DB] text-white text-sm font-bold whitespace-nowrap pl-1 pb-1">
                        To pick 1m
                      </div>
                      <div className="h-6 bg-[#5DADE2] "></div>
                    </div>

                    {/* Load - 5m 8s */}
                    <div className="absolute top-0 h-16" style={{ left: '24.5%', width: '45%' }}>
                      <div className="border-l-4 border-[#3498DB] text-white text-sm font-bold whitespace-nowrap pl-1 pb-1">
                        Load 5m 8s
                      </div>
                      <div className="h-6 bg-[#5DADE2] "></div>
                    </div>

                    {/* Travel - 4m 36s */}
                    <div className="absolute top-0 h-16" style={{ left: '70%', width: '30%' }}>
                      <div className="border-l-4 border-[#3498DB] text-white text-sm font-bold whitespace-nowrap pl-1 pb-1">
                        Travel 4m 36s
                      </div>
                      <div className="h-6 bg-[#5DADE2] "></div>
                    </div>
                  </div>

                  {/* Time marker ticks */}
                  <div className="flex justify-between border-t border-white/20">
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                    <div className="w-px h-2 bg-white/20"></div>
                  </div>

                  {/* Time Markers */}
                  <div className="relative pt-2">
                    <div className="flex justify-between text-white/70 text-xs font-medium">
                      <span>07:40</span>
                      <span>07:42</span>
                      <span>07:44</span>
                      <span>07:45</span>
                      <span>07:46</span>
                      <span>07:48</span>

                    </div>

                  </div>
                </div>
                <video src="/videos/Topdeck-Hero-v0.mp4"
                  autoPlay muted loop playsInline preload="metadata"
                  aria-hidden="true"
                  className="w-full object-cover aspect-video mt-4" />
              </div>
            </div>
          </div>

        </div>
        {/* Learn More Button */}
        <div className="max-w-8xl mx-auto p-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-24">

            <Link href="/products">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 font-black text-lg border-4 border-black hover:border-red-600 transition-all duration-200 rounded-modern">
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
