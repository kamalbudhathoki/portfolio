"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-800);
  const mouseY = useMotionValue(-800);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 25, mass: 0.5 });

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 size-[600px] rounded-full opacity-40 blur-3xl"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgba(110,231,249,0.10) 0%, rgba(139,92,246,0.08) 35%, transparent 70%)",
      }}
    />
  );
}