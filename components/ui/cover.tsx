"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Cover({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-block cursor-pointer group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speed of light beam effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal beams */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`h-beam-${i}`}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            style={{
              top: `${15 + i * 15}%`,
              left: "-100%",
              width: "200%",
            }}
            animate={{
              x: isHovered ? ["0%", "100%"] : "0%",
              opacity: isHovered ? [0, 1, 1, 0] : 0,
              scaleY: isHovered ? [1, 2, 1] : 1,
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
        {/* Vertical accent beams */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`v-beam-${i}`}
            className="absolute w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              top: "-100%",
              height: "200%",
            }}
            animate={{
              y: isHovered ? ["0%", "100%"] : "0%",
              opacity: isHovered ? [0, 0.7, 0.7, 0] : 0,
              scaleX: isHovered ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Glow effect background */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 blur-xl"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content wrapper */}
      <motion.span
        className={cn(
          "relative z-10 inline-block px-4 py-2",
          "bg-gradient-to-r from-neutral-100 to-neutral-300 dark:from-neutral-100 dark:to-neutral-400",
          "bg-clip-text text-transparent"
        )}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>

      {/* Bottom highlight line */}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
