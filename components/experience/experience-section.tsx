"use client";

import * as React from "react";
import { MapPin, Check } from "lucide-react";
import { experienceItems } from "@/constants/experience";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Experience"
          title={
            <>
              My professional <span className="text-gradient">journey so far</span>
            </>
            }
          description="The experiences that shaped the way I build software."
          align="center"
          className="items-center"
        />

        <div className="relative ml-4 md:ml-0">
          <div
            aria-hidden
            data-animate="line-draw"
            className="absolute bottom-3 left-4 top-3 w-px origin-top bg-gradient-to-b from-primary/50 via-secondary/40 to-accent/20"
          />
          <div className="flex flex-col gap-10" data-animate="stagger" data-animate-stagger="0.12">
            {experienceItems.map((item, i) => (
              <div key={item.id} className="relative pl-12">
                <div
                  data-animate="scale-in"
                  data-animate-delay={String(i * 0.08)}
                  className="absolute left-0 top-1.5 size-8 rounded-full border border-white/10 bg-card/90"
                  aria-hidden
                >
                  <span className="absolute inset-[10px] rounded-full bg-gradient-to-br from-primary to-secondary" />
                </div>

                  <div className="group rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-primary">{item.company}</p>
                      </div>
                      <div className="flex flex-col items-start gap-1 md:items-end">
                        <Badge variant="outline">{item.period}</Badge>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="size-3" aria-hidden />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <ul className="mt-4 flex flex-col gap-2">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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