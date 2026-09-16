"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface KineticOrbProps {
  className?: string;
  size?: number;
  colors?: [string, string, string];
  speed?: number;
}

export function KineticOrb({
  className,
  size = 420,
  colors = ["#6EE7F9", "#8B5CF6", "#3B82F6"],
  speed = 16,
}: KineticOrbProps) {
  return (
    <div
      className={cn("pointer-events-none relative", className)}
      aria-hidden
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 400 400"
        className="animate-spin-slow absolute inset-0 size-full opacity-80"
        style={{ animationDuration: `${speed * 2}s` }}
      >
        <defs>
          <radialGradient id="orb-core" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.95" />
            <stop offset="45%" stopColor={colors[1]} stopOpacity="0.55" />
            <stop offset="100%" stopColor={colors[2]} stopOpacity="0.06" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="180" fill="url(#orb-core)" />

        {[
          { cx: 320, cy: 120, r: 22 },
          { cx: 90, cy: 300, r: 15 },
          { cx: 150, cy: 90, r: 10 },
          { cx: 300, cy: 290, r: 8 },
        ].map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="white"
            opacity={0.5}
            className="animate-float"
            style={{ animationDelay: `${i * 1.2}s` }}
          />
        ))}
      </svg>

      <div className="animate-glow-pulse absolute inset-[18%] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${colors[0]}22, transparent 70%)` }}
      />
    </div>
  );
}