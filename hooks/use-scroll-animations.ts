"use client";

import { useEffect } from "react";
import {
  registerGsap,
  gsap,
  ScrollTrigger,
  splitTextToWords,
  getAnimateParams,
} from "@/lib/gsap";

function reducedMotionPreferred(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function num(value: string | undefined, fallback: number): number {
  const parsed = value === undefined ? NaN : parseFloat(value);
  return Number.isNaN(parsed) ? fallback : parsed;
}

export function useScrollAnimations() {
  useEffect(() => {
    if (reducedMotionPreferred()) return;

    registerGsap();

    const ctx = gsap.context(() => {
      initFadeUp();
      initFadeSlide();
      initCardLift();
      initTextReveal();
      initStagger();
      initParallax();
      initLineDraw();
      initScaleIn();
      initProgressBar();
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      ctx.revert();
      window.removeEventListener("load", onLoad);
    };
  }, []);
}

function initFadeUp() {
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
    const { delay, duration, y, scrub } = getAnimateParams(el);
    gsap.fromTo(
      el,
      { opacity: 0, y, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
          ...(scrub ? { scrub: 1.2 } : {}),
        },
      },
    );
  });
}

function initFadeSlide() {
  const directions: Record<string, { x: number }> = {
    "fade-slide-left": { x: -60 },
    "fade-slide-right": { x: 60 },
  };

  Object.entries(directions).forEach(([attr, from]) => {
    gsap.utils.toArray<HTMLElement>(`[data-animate="${attr}"]`).forEach((el) => {
      const { delay, duration, scrub } = getAnimateParams(el);
      gsap.fromTo(
        el,
        { opacity: 0, x: from.x, filter: "blur(4px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            ...(scrub ? { scrub: 1.2 } : {}),
          },
        },
      );
    });
  });
}

function initCardLift() {
  gsap.utils.toArray<HTMLElement>('[data-animate="card-lift"]').forEach((el) => {
    const { delay, duration, y, scrub } = getAnimateParams(el);
    gsap.fromTo(
      el,
      { opacity: 0, y: y * 0.8, scale: 0.96, filter: "blur(3px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          ...(scrub ? { scrub: 1.2 } : {}),
        },
      },
    );
  });
}

function initTextReveal() {
  gsap.utils.toArray<HTMLElement>('[data-animate="text-reveal"]').forEach((el) => {
    const { delay, duration, stagger } = getAnimateParams(el);
    const words = splitTextToWords(el);

    if (words.length === 0) return;

    gsap.fromTo(
      words,
      { opacity: 0, y: 12, filter: "blur(3px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      },
    );
  });
}

function initStagger() {
  gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((el) => {
    const { delay, duration, stagger, y } = getAnimateParams(el);
    const children = Array.from(el.children) as HTMLElement[];

    if (children.length === 0) return;

    const tl = gsap.timeline({
      delay,
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      children,
      { opacity: 0, y, filter: "blur(3px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        stagger,
      },
    );
  });
}

function initParallax() {
  gsap.utils.toArray<HTMLElement>('[data-animate="parallax"]').forEach((el) => {
    const y = num(el.dataset.animateY, 60);
    gsap.fromTo(
      el,
      { y: -y * 0.5 },
      {
        y: y * 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
}

function initLineDraw() {
  gsap.utils.toArray<HTMLElement>('[data-animate="line-draw"]').forEach((el) => {
    const { delay, duration } = getAnimateParams(el);
    gsap.fromTo(
      el,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration,
        delay,
        ease: "power2.out",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      },
    );
  });
}

function initScaleIn() {
  gsap.utils.toArray<HTMLElement>('[data-animate="scale-in"]').forEach((el) => {
    const { delay, duration } = getAnimateParams(el);
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.4 },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    );
  });
}

function initProgressBar() {
  gsap.utils.toArray<HTMLElement>('[data-animate="progress"]').forEach((el) => {
    const target = num(el.dataset.progressTarget, 0);
    const { delay, duration } = getAnimateParams(el);
    gsap.fromTo(
      el,
      { width: "0%" },
      {
        width: `${target}%`,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      },
    );
  });
}