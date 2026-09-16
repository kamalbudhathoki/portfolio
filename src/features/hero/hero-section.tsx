"use client";

import * as React from "react";
import { ArrowDown, ExternalLink, Download } from "lucide-react";
import { siteConfig } from "@/constants/nav";
import { KineticOrb } from "@/components/shared/kinetic-orb";
import { CursorGlow } from "@/components/shared/cursor-glow";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";
import { registerGsap, gsap, splitTextToSpans } from "@/lib/gsap";
import { useMounted } from "@/hooks/use-mounted";

function useTypewriter(text: string, typeSpeed = 70, startDelay = 1500) {
  const [value, setValue] = React.useState("");
  const mounted = useMounted();

  React.useEffect(() => {
    if (!mounted) return;
    let i = 0;
    let timer = 0;

    const tick = () => {
      i += 1;
      setValue(text.slice(0, i));
      if (i < text.length) {
        timer = window.setTimeout(tick, typeSpeed);
      }
    };

    timer = window.setTimeout(tick, startDelay);
    return () => window.clearTimeout(timer);
  }, [text, typeSpeed, startDelay, mounted]);

  return value;
}

function CharSplit({ label }: { label: string }) {
  return (
    <>
      {label.split("").map((char, i) => (
        <span
          key={i}
          data-hero-char
          className="inline-block will-change-transform"
          aria-hidden
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export function HeroSection() {
  const mounted = useMounted();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const typed = useTypewriter(siteConfig.role);

  React.useEffect(() => {
    if (!mounted || !containerRef.current) return;

    registerGsap();

    const tl = gsap.timeline({ delay: 0.15 });

    const el = containerRef.current;
    const kicker = el.querySelector("[data-hero-kicker]");
    const heading = el.querySelector("[data-hero-heading]");
    const chars = el.querySelectorAll("[data-hero-char]");
    const sub = el.querySelector("[data-hero-sub]");
    const pills = el.querySelectorAll("[data-hero-pill]");
    const tagline = el.querySelector("[data-hero-tagline]");
    const cta = el.querySelectorAll("[data-hero-cta]");
    const orb = el.querySelector("[data-hero-orb]");
    const scroll = el.querySelector("[data-hero-scroll]");

    [kicker, heading, sub, pills, tagline, cta, orb, scroll].forEach((t) => {
      if (t) {
        gsap.set(t, { opacity: 0, y: 38, filter: "blur(8px)" });
      }
    });
    gsap.set(chars, { opacity: 0, y: 16, filter: "blur(6px)" });

    tl.to(kicker, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" })
      .to(chars, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, stagger: 0.045, ease: "power3.out" }, "-=0.55")
      .to(sub, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }, "-=0.55")
      .to(pills, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.1, ease: "power3.out" }, "-=0.55")
      .to(tagline, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, ease: "power3.out" }, "-=0.35")
      .to(cta, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.12, ease: "power3.out" }, "-=0.35")
      .to(orb, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, ease: "power2.out" }, "-=1.2")
      .to(scroll, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power3.out" }, "-=0.4");

    return () => {
      tl.kill();
    };
  }, [mounted]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <CursorGlow />

      <div aria-hidden className="grid-lines absolute inset-0 z-0" />

      <div
        ref={containerRef}
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8"
      >
        <div className="flex flex-col items-start gap-6">
          <span
            data-hero-kicker
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-primary"
          >
            <span className="size-1.5 rounded-full bg-primary shadow-glow-cyan" aria-hidden />
            Open to opportunities
          </span>

          <h1
            data-hero-heading
            className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span data-hero-orb className="text-gradient">
              <span aria-hidden className="block">
                <CharSplit label={siteConfig.name} />
              </span>
              <span className="sr-only">{siteConfig.name}</span>
            </span>
          </h1>

          <p data-hero-sub className="flex items-center font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] rounded-sm bg-primary" aria-hidden />
          </p>

          <div data-hero-pills className="flex flex-wrap gap-2">
            {["React", "Next.js", "Node.js", "AI"].map((pill) => (
              <span
                key={pill}
                data-hero-pill
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground"
              >
                {pill}
              </span>
            ))}
          </div>

          <p data-hero-tagline className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <MagneticButton data-hero-cta>
              <Button asChild size="lg">
                <a href="#projects">
                  <ExternalLink className="mr-1" />
                  View Projects
                </a>
              </Button>
            </MagneticButton>

            <MagneticButton data-hero-cta>
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.resumeUrl} download>
                  <Download className="mr-1" />
                  Resume
                </a>
              </Button>
            </MagneticButton>
          </div>
        </div>

        <div
          data-hero-orb
          className="relative mx-auto flex items-center justify-center md:justify-end"
        >
          <KineticOrb
            className="size-[280px] sm:size-[340px] lg:size-[420px]"
            size={420}
          />

          <div className="absolute inset-0 mx-auto flex items-center justify-center">
            <span className="font-display text-7xl font-bold text-gradient opacity-20 blur-sm select-none sm:text-8xl lg:text-9xl">
              KC
            </span>
          </div>
        </div>
      </div>

      <MagneticButton
        data-hero-scroll
        className="absolute inset-x-0 bottom-10 z-10 mx-auto flex w-fit"
      >
        <a
          href="#about"
          className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-muted-foreground backdrop-blur-sm transition-colors hover:text-primary"
          aria-label="Scroll to About"
        >
          <ArrowDown className="size-5 animate-bounce" />
        </a>
      </MagneticButton>
    </section>
  );
}
