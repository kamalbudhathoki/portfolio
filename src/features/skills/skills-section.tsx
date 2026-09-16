"use client";

import * as React from "react";
import { skillCategories } from "@/constants/skills";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TiltCard } from "@/components/shared/tilt-card";
import { Counter } from "@/components/shared/counter";
import { cn } from "@/lib/utils";

const accentRing: Record<string, string> = {
  primary: "border-primary/30 bg-gradient-to-br from-primary/10 to-transparent",
  secondary: "border-secondary/30 bg-gradient-to-br from-secondary/10 to-transparent",
  accent: "border-accent/30 bg-gradient-to-br from-accent/10 to-transparent",
};

const accentDot: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Skills"
          title={
            <>
              Technologies I work{' '}
              <span className="text-gradient">with every day</span>
            </>
          }
          description="Full-stack, frontend-heavy, and increasingly AI-oriented."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08} stagger={0.04}>
              <TiltCard
                className="h-full"
                glare
              >
                <div
                  className={cn(
                    "group flex h-full flex-col gap-5 rounded-2xl border p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg",
                    accentRing[cat.accent],
                  )}
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {cat.skills.map((skill) => (
                      <li key={skill.name} className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                            <skill.icon className={cn("size-3.5", accentDot[cat.accent])} aria-hidden />
                            {skill.name}
                          </span>
                          <span className="text-xs tabular-nums text-muted-foreground">
                            <Counter value={skill.level} suffix="%" duration={1.8} />
                          </span>
                        </div>
                        <div
                          className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]"
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <div
                            data-animate="progress"
                            data-progress-target={skill.level}
                            className={cn(
                              "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r",
                              cat.accent === "primary" && "from-primary/80 to-primary/40",
                              cat.accent === "secondary" && "from-secondary/80 to-secondary/40",
                              cat.accent === "accent" && "from-accent/80 to-accent/40",
                            )}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}