"use client";

import * as React from "react";
import { GraduationCap, Code2, BrainCircuit } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const timeline = [
  {
    icon: GraduationCap,
    title: "Computer Engineering Graduate",
    description:
      "Completed a rigorous program covering algorithms, data structures, embedded systems and full-stack development — building a strong technical foundation.",
  },
  {
    icon: Code2,
    title: "MERN & Full-Stack Specialist",
    description:
      "Designed and shipped production-grade applications with React, Next.js, Node.js, MongoDB and PostgreSQL — from initial design to deployment.",
  },
  {
    icon: BrainCircuit,
    title: "Transitioning to AI Engineering",
    description:
      "Actively studying machine learning, deep learning and large language models, combining web engineering skills with modern AI to build intelligent systems.",
  },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="About"
          title={
            <>
              A developer building at the intersection of{' '}
              <span className="text-gradient">web engineering and AI</span>
            </>
          }
          description="I'm passionate about creating intelligent, full-stack applications that solve real problems."
        />

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          <div
            data-animate="fade-up"
            data-animate-delay="0.05"
            className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            <p>
              I&apos;m <span className="font-medium text-white">Kamal B.C.</span>, a Computer
              Engineering graduate from Nepal with a strong background in the MERN stack. I
              build polished front-end experiences and robust server-side systems with
              React, Next.js, Node.js, PostgreSQL and MongoDB.
            </p>
            <p>
              Over the past year I&apos;ve been transitioning into <span className="font-medium text-white">AI
              Engineering</span> — learning Python, machine learning fundamentals, and
              exploring how large language models can be shipped as real products.
            </p>
            <p>
              My goal is to combine clean web engineering with modern AI to build tools
              that feel intelligent, fast and genuinely useful.
            </p>
          </div>

          <div className="relative flex flex-col gap-0">
            <div
              aria-hidden
              data-animate="line-draw"
              className="absolute bottom-0 left-[1.1rem] top-0 w-px origin-top bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent"
            />

            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="relative flex gap-5 pb-10">
                  <div className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-card/80 backdrop-blur-sm">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    <h3 className="font-display text-base font-semibold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div data-animate="card-lift" data-animate-delay="0.1" className="mt-16">
          <div className="glass relative mx-auto max-w-xl overflow-hidden rounded-2xl p-10 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(110,231,249,0.18) 0%, transparent 60%)",
              }}
            />
            <p
              data-animate="text-reveal"
              data-animate-stagger="0.045"
              className="relative z-10 font-display text-xl font-medium italic tracking-tight text-white/90 md:text-2xl"
            >
              &ldquo;Clean code today, intelligent systems tomorrow.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}