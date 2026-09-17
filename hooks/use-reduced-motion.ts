"use client";

import { useEffect } from "react";

export function useReducedMotion() {
  useEffect(() => {
    const query = "prefers-reduced-motion: reduce";
    if (window.matchMedia(query).matches) {
      document.documentElement.classList.add("motion-reduce");
    }
  }, []);
}