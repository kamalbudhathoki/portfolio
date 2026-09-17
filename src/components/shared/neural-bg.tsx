"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface NeuralBgProps {
  className?: string;
  density?: number;
  maxDistance?: number;
  speed?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  violet: boolean;
}

interface Packet {
  from: number;
  to: number;
  progress: number;
  speed: number;
  trail: { x: number; y: number }[];
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function NeuralBg({
  className,
  density = 9000,
  maxDistance = 140,
  speed = 1,
}: NeuralBgProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let raf = 0;
    let running = true;

    const cyan = "110, 231, 249";
    const violet = "139, 92, 246";

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(24, Math.min(90, Math.floor((width * height) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22 * speed,
        vy: (Math.random() - 0.5) * 0.22 * speed,
        r: Math.random() * 1.4 + 0.8,
        violet: Math.random() < 0.3,
      }));

      packets = [0, 1, 2].map(() => ({
        from: Math.floor(Math.random() * count),
        to: Math.floor(Math.random() * count),
        progress: Math.random(),
        speed: Math.random() * 0.002 + 0.0006,
        trail: [],
      }));
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((a) => {
        nodes.forEach((b) => {
          if (a === b) return;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > maxDistance * maxDistance) return;
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / maxDistance) * 0.09;
          const mix = a.violet && b.violet ? violet : cyan;
          ctx.strokeStyle = `rgba(${mix}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        });
      });

      nodes.forEach((n) => {
        const rgb = n.violet ? violet : cyan;
        ctx.fillStyle = `rgba(${rgb}, ${n.r > 1.6 ? 0.42 : 0.3})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      packets.forEach((p) => {
        const from = nodes[p.from];
        const to = nodes[p.to];
        if (!from || !to) return;

        const x = from.x + (to.x - from.x) * p.progress;
        const y = from.y + (to.y - from.y) * p.progress;
        p.trail.push({ x, y });
        if (p.trail.length > 9) p.trail.shift();

        for (let i = 1; i < p.trail.length; i++) {
          const t = i / p.trail.length;
          ctx.strokeStyle = `rgba(${cyan}, ${t * 0.22})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y);
          ctx.lineTo(p.trail[i].x, p.trail[i].y);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(${cyan}, 0.6)`;
        ctx.beginPath();
        ctx.arc(p.trail[p.trail.length - 1].x, p.trail[p.trail.length - 1].y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        p.progress += p.speed * speed;
        if (p.progress >= 1) {
          p.from = p.to;
          p.to = nodes.length > 0 ? Math.floor(Math.random() * nodes.length) : 0;
          p.progress = 0;
          p.trail = [];
        }
      });
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!running) return;
      drawFrame();
    };

    resize();
    if (reduced) {
      drawFrame();
      return;
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, [density, maxDistance, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 -z-10 h-full w-full", className)}
      style={{
        maskImage: "radial-gradient(ellipse at 60% 40%, black 20%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, black 20%, transparent 78%)",
      }}
    />
  );
}