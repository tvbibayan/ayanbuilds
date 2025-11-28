"use client";

import React, { Suspense, lazy } from "react";
import { cn } from "@/lib/utils";

// Lazy load Spline to reduce initial bundle size
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

function SplineLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-500 border-t-white" />
        <span className="text-sm text-neutral-400">Loading 3D Scene...</span>
      </div>
    </div>
  );
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense fallback={<SplineLoader />}>
      <Spline scene={scene} className={cn("w-full h-full", className)} />
    </Suspense>
  );
}
