"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  children,
  className,
  containerClassName,
  duration = 6,
  borderWidth = 2,
  colorFrom = "#6366f1",
  colorTo = "#06b6d4",
}: BorderBeamProps) {
  return (
    <div
      className={cn("relative rounded-xl", containerClassName)}
      style={
        {
          "--border-beam-duration": `${duration}s`,
          "--border-beam-width": `${borderWidth}px`,
          "--border-beam-color-from": colorFrom,
          "--border-beam-color-to": colorTo,
        } as React.CSSProperties
      }
    >
      {/* Animated border container */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl",
          "before:absolute before:inset-0 before:rounded-xl before:p-[var(--border-beam-width)]",
          "before:bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--border-beam-color-from)_360deg)]",
          "before:animate-border-beam before:content-['']",
          "after:absolute after:inset-[var(--border-beam-width)] after:rounded-[calc(0.75rem-var(--border-beam-width))] after:bg-black/95 after:content-['']"
        )}
      />
      {/* Content */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
