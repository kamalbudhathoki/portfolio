"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { registerGsap, gsap } from "@/lib/gsap";

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function Counter({ value, duration = 2, prefix = "", suffix = "", className }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  React.useEffect(() => {
    if (!inView || !ref.current) return;
    registerGsap();

    const obj = { current: 0 };
    const tween = gsap.to(obj, {
      current: value,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(obj.current)}${suffix}`;
        }
      },
    });

    return () => {
      tween.kill();
    };
  }, [inView, value, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}