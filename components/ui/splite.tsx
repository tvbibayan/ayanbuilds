'use client'
import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

interface SpliteProps {
  title?: string;
  description?: string;
  splineUrl?: string;
}

export function Splite({ 
  title = "Interactive 3D",
  description = "Bring your UI to life with beautiful 3D scenes.",
  splineUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
}: SpliteProps) {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {title}
          </h2>
          <p className="mt-4 text-neutral-300 max-w-lg">
            {description}
          </p>
        </div>
        {/* Right content - 3D Scene */}
        <div className="flex-1 relative min-h-[250px]">
          <SplineScene scene={splineUrl} className="w-full h-full" />
        </div>
      </div>
    </Card>
  )
}

// Keep legacy export for backward compatibility
export function SplineSceneBasic() {
  return <Splite />
}
