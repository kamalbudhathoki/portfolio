"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  registered = true;
}

export { gsap, ScrollTrigger };

export function splitTextToSpans(element: HTMLElement): HTMLElement[] {
  const words = element.textContent?.split(/\s+/) ?? [];
  element.textContent = "";
  return words.map((word) => {
    const span = document.createElement("span");
    span.className = "inline-block will-change-transform";
    span.textContent = word;
    span.style.marginRight = "0.25em";
    element.appendChild(span);
    return span;
  });
}