"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface EntropyProps {
  children?: React.ReactNode;
  className?: string;
  opacity?: number;
}

// SVG-based noise using feTurbulence - lightweight and performant
export function Entropy({ children, className, opacity = 0.05 }: EntropyProps) {
  return (
    <div className={cn("relative min-h-screen bg-black", className)}>
      {/* SVG Noise Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{ opacity }}
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="noise-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#noise-filter)" />
        </svg>
      </div>
      {/* Page Content */}
      {children}
    </div>
  );
}
