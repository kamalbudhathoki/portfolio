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

export function splitTextToWords(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent ?? "";
  const words = text.split(/\s+/).filter(Boolean);
  element.textContent = "";
  return words.map((word) => {
    const span = document.createElement("span");
    span.className = "inline-block will-change-transform";
    span.textContent = word;
    span.style.marginRight = "0.3em";
    element.appendChild(span);
    return span;
  });
}

export function splitTextToChars(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent ?? "";
  element.textContent = "";
  return Array.from(text).map((char) => {
    const span = document.createElement("span");
    span.className = "inline-block will-change-transform";
    span.textContent = char === " " ? "\u00A0" : char;
    element.appendChild(span);
    return span;
  });
}

function toNum(value: string | undefined, fallback: number): number {
  const parsed = value === undefined ? NaN : parseFloat(value);
  return Number.isNaN(parsed) ? fallback : parsed;
}

export function getAnimateParams(el: HTMLElement) {
  const delay = toNum(el.dataset.animateDelay, 0);
  const duration = toNum(el.dataset.animateDuration, 0.8);
  const stagger = toNum(el.dataset.animateStagger, 0.06);
  const y = toNum(el.dataset.animateY, 40);
  const scrub = el.hasAttribute("data-animate-scrub");
  return { delay, duration, stagger, y, scrub };
}
