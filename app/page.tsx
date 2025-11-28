import { Cover } from "@/components/ui/cover";
import InfiniteHero from "@/components/ui/infinite-hero";
import { Splite } from "@/components/ui/splite";
import { BorderBeam } from "@/components/ui/border-beam";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero Section - Full screen with shader background */}
      <InfiniteHero
        title="Inventing the Horizon"
        subtitle="I am Ayan. Creative UI/UX Developer obsessed with interactive design. I combine Python and TypeScript with Three.js magic to build next-level web experiences."
        primaryButtonText="View Work"
        secondaryButtonText="Get in Touch"
      />

      {/* Bio & Stack Section - Bento Grid */}
      <section className="relative px-6 py-24 bg-black">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1: Bio - Glassmorphism */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-400">
                About Me
              </h2>
              <p className="text-lg leading-relaxed text-neutral-300">
                Creative UI/UX Developer obsessed with interactive design. I combine{" "}
                <span className="font-semibold text-white">Python</span> and{" "}
                <span className="font-semibold text-white">TypeScript</span> with{" "}
                <span className="font-semibold text-white">Three.js</span> magic.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "TypeScript", "Three.js", "React", "Next.js"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Socials - With BorderBeam */}
            <BorderBeam
              duration={6}
              borderWidth={2}
              colorFrom="#8b5cf6"
              colorTo="#06b6d4"
              containerClassName="h-full"
              className="h-full rounded-2xl bg-black/60 p-8 backdrop-blur-xl"
            >
              <div className="flex h-full flex-col justify-center">
                <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-400">
                  Connect With Me
                </h2>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://github.com/tvbibayan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    <Github className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-white" />
                    <div>
                      <p className="font-semibold text-white">GitHub</p>
                      <p className="text-sm text-neutral-500">@tvbibayan</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayan-developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    <Linkedin className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-white" />
                    <div>
                      <p className="font-semibold text-white">LinkedIn</p>
                      <p className="text-sm text-neutral-500">ayan-developer</p>
                    </div>
                  </a>
                </div>
              </div>
            </BorderBeam>
          </div>
        </div>
      </section>

      {/* 3D Showcase Section */}
      <section className="relative px-6 py-24 bg-black">
        <div className="mx-auto max-w-5xl">
          <Splite
            title="Let's make the web 3D."
            description="I believe the future of web is immersive. Using Three.js and WebGL, I create interactive 3D experiences that captivate users and push the boundaries of what's possible in the browser."
            splineUrl="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
            <p>© {new Date().getFullYear()} Ayan. All rights reserved.</p>
            <p>Built with Next.js, Tailwind CSS & Three.js</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
