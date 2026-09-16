"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/brand-icons";
import { projects } from "@/constants/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Projects"
          title={
            <>
              Selected work I&apos;m <span className="text-gradient">proud of</span>
            </>
          }
          description="Full-stack applications designed with performance and user experience in mind."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.1}>
              <motion.article
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-glow-blue"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    aria-hidden
                    className={cn(
                      "absolute inset-0 z-10 bg-gradient-to-tr opacity-60 transition-opacity duration-300 group-hover:opacity-90",
                      project.gradient,
                    )}
                  />
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <motion.div
                    variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-4 top-4 z-20 flex gap-2"
                  >
                    <Button asChild size="icon" variant="outline" className="size-9 bg-black/40 hover:bg-black/60">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
                        <GithubIcon />
                      </a>
                    </Button>
                    <Button asChild size="icon" variant="outline" className="size-9 bg-black/40 hover:bg-black/60">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                        <ExternalLink />
                      </a>
                    </Button>
                  </motion.div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{project.category}</Badge>
                    <span className="text-xs tabular-nums text-muted-foreground">{project.year}</span>
                  </div>

                  <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <Button asChild size="sm" variant="outline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-1" /> GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowUpRight className="ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}