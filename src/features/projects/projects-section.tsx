"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/brand-icons";
import { projects } from "@/constants/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const bentoLayouts = [
  { span: "md:col-span-2 lg:col-span-2", featured: true },
  { span: "", featured: false },
  { span: "", featured: false },
  { span: "md:col-span-2 lg:col-span-2", featured: true },
] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 size-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.22), transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Projects"
          title={
            <>
              Selected work I&apos;m <span className="text-gradient">proud of</span>
            </>
          }
          description="Full-stack applications designed with performance and user experience in mind."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const layout = bentoLayouts[i] ?? { span: "", featured: false };

            return (
              <Reveal
                key={project.id}
                delay={(i % 2) * 0.1}
                y={36}
                className={cn("h-full", layout.span)}
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/55 p-2.5 backdrop-blur-xl will-change-transform",
                    "shadow-[0_12px_40px_-18px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out",
                    "hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_32px_80px_-24px_rgba(96,165,250,0.45)]",
                  )}
                >
                  <div
                    aria-hidden
                    className="bento-anim-border pointer-events-none opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div
                    className={cn(
                      "relative w-full overflow-hidden rounded-2xl",
                      layout.featured ? "aspect-[16/9]" : "aspect-[4/3]",
                    )}
                  >
                    <div
                      data-animate="parallax"
                      data-animate-y="16"
                      className="absolute inset-x-0 -inset-y-[6%]"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    <div
                      aria-hidden
                      className={cn(
                        "absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 transition-opacity duration-300 group-hover:opacity-85",
                        project.gradient,
                      )}
                    />

                    <div className="absolute left-3 top-3 z-20">
                      <Badge
                        variant="outline"
                        className="border-white/20 bg-black/40 text-white/90 backdrop-blur-md"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    <div className="absolute bottom-3 right-3 z-20">
                      <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-xs font-medium tabular-nums text-white/80 backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute right-3 top-3 z-20 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button
                        asChild
                        size="icon"
                        variant="outline"
                        className="size-8 rounded-full border-white/25 bg-black/50 hover:border-white/50 hover:bg-black/70"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GithubIcon />
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="icon"
                        variant="outline"
                        className="size-8 rounded-full border-white/25 bg-black/50 hover:border-white/50 hover:bg-black/70"
                        aria-label={`${project.title} live demo`}
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col gap-3 p-4 sm:p-5">
                    <h3
                      className={cn(
                        "font-display font-semibold tracking-tight text-white",
                        layout.featured ? "text-2xl" : "text-xl",
                      )}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={cn(
                        "line-clamp-3 text-sm leading-relaxed text-muted-foreground",
                        layout.featured && "md:text-[15px]",
                      )}
                    >
                      {project.description}
                    </p>

                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-2.5 border-t border-white/[0.06] pt-4">
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GithubIcon /> GitHub
                        </a>
                      </Button>
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          Live Demo <ArrowUpRight />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}