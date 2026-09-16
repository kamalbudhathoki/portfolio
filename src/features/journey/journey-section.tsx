"use client";

import * as React from "react";
import { journeySteps } from "@/constants/journey";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const stepColors = [
  "text-primary border-primary/40 bg-primary/10",
  "text-accent border-accent/40 bg-accent/10",
  "text-secondary border-secondary/40 bg-secondary/10",
];

export function JourneySection() {
  const isEven = (index: number) => index % 2 === 1;

  return (
    <section id="journey" className="relative py-24 sm:py-32 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="AI Journey"
          title={
            <>
              The roadmap to <span className="text-gradient">AI Engineering</span>
            </>
          }
          description="From writing my first line of HTML to building intelligent systems — a step-by-step evolution."
          align="center"
        />

        <div className="relative">
          <div
            aria-hidden
            data-animate="line-draw"
            className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-primary/60 via-secondary/50 to-accent/30 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {journeySteps.map((step, i) => (
              <div key={step.id} className="relative md:grid md:grid-cols-2 md:gap-0">
                <div className="absolute left-5 top-1 z-10 -translate-x-1/2 md:left-1/2" aria-hidden>
                  <span
                    data-animate="scale-in"
                    data-animate-delay={String((i % 3) * 0.07)}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border font-display text-sm font-bold shadow-lg",
                      stepColors[i % stepColors.length],
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div
                  data-animate={isEven(i) ? "fade-slide-left" : "fade-slide-right"}
                  data-animate-delay="0.05"
                  className={cn(
                    "pl-14 md:pl-0",
                    isEven(i) ? "md:col-start-1 md:pr-14 md:text-right" : "md:col-start-2 md:pl-14",
                  )}
                >
                  <div className="group inline-flex max-w-lg flex-col gap-3 text-left rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80">
                    <div className="flex items-center gap-3 md:justify-start">
                      <span
                        className={cn(
                          "flex size-9 items-center justify-center rounded-lg",
                          stepColors[i % stepColors.length],
                        )}
                      >
                        <step.icon className="size-4" aria-hidden />
                      </span>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}