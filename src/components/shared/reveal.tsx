"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { registerGsap, gsap } from "@/lib/gsap";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  y?: number;
  delay?: number;
  duration?: number;
  blur?: boolean;
  stagger?: number;
  once?: boolean;
  className?: string;
}

export function Reveal({
  children,
  y = 48,
  delay = 0,
  duration = 0.9,
  blur = true,
  stagger = 0,
  once = true,
  className,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [childrenHidden, setChildrenHidden] = React.useState(true);

  React.useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets: Element[] = [];

      if (stagger > 0) {
        const directChildren = Array.from(el.children);
        targets.push(...directChildren);
      } else {
        targets.push(el);
      }

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y,
          filter: blur ? "blur(6px)" : "none",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        },
      );
    }, el);

    setChildrenHidden(false);

    return () => ctx.revert();
  }, [y, delay, duration, blur, stagger, once]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={childrenHidden ? { opacity: 0 } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}