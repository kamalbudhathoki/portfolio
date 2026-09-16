"use client";

import * as React from "react";
import { ArrowDown, ExternalLink, Download } from "lucide-react";
import { siteConfig } from "@/constants/nav";
import { KineticOrb } from "@/components/shared/kinetic-orb";
import { CursorGlow } from "@/components/shared/cursor-glow";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";
import { registerGsap, gsap } from "@/lib/gsap";
import { useMounted } from "@/hooks/use-mounted";

export function HeroSection() {
  const mounted = useMounted();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!mounted || !containerRef.current) return;

    registerGsap();

    const tl = gsap.timeline({ delay: 0.15 });

    const el = containerRef.current;
    const kicker = el.querySelector("[data-hero-kicker]");
    const heading = el.querySelector("[data-hero-heading]");
    const sub = el.querySelector("[data-hero-sub]");
    const pills = el.querySelectorAll("[data-hero-pill]");
    const tagline = el.querySelector("[data-hero-tagline]");
    const cta = el.querySelectorAll("[data-hero-cta]");
    const orb = el.querySelector("[data-hero-orb]");

    [kicker, heading, sub, pills, tagline, cta, orb].forEach((t) => {
      if (t) {
        gsap.set(t, { opacity: 0, y: 38, filter: "blur(8px)" });
      }
    });

    tl.to(kicker, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" })
      .to(heading, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, ease: "power3.out" }, "-=0.55")
      .to(sub, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }, "-=0.55")
      .to(pills, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.1, ease: "power3.out" }, "-=0.55")
      .to(tagline, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.65, ease: "power3.out" }, "-=0.35")
      .to(cta, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, stagger: 0.12, ease: "power3.out" }, "-=0.35")
      .to(orb, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, ease: "power2.out" }, "-=1.2");

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

          <h1 data-hero-heading className="font-display text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">Kamal B.C.</span>
          </h1>

          <p data-hero-sub className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {siteConfig.role}
          </p>

          <div data-hero-sub className="flex flex-wrap gap-2">
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
            <MagneticButton>
              <Button asChild size="lg">
                <a href="#projects">
                  <ExternalLink className="mr-1" />
                  View Projects
                </a>
              </Button>
            </MagneticButton>

            <MagneticButton>
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

      <MagneticButton className="absolute inset-x-0 bottom-10 z-10 mx-auto flex w-fit">
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