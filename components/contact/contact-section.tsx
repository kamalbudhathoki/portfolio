"use client";

import * as React from "react";
import { contactLinks } from "@/constants/contact";
import { ContactForm } from "./contact-form";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Contact"
          title={
            <>
              Let&apos;s build something{' '}
              <span className="text-gradient">great together</span>
            </>
          }
          description="Whether it's a project, a collaboration or just a hello — my inbox is always open."
          align="center"
        />

        <div data-animate="card-lift">
          <div className="glass grid grid-cols-1 gap-8 overflow-hidden rounded-2xl p-6 md:grid-cols-5 md:p-10">
            <div className="flex flex-col gap-8 md:col-span-2">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                  Get in touch
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I usually respond within 24 hours. Let&apos;s talk about your next
                  project or an AI opportunity.
                </p>
              </div>

              <ul className="flex flex-col gap-3" data-animate="stagger" data-animate-stagger="0.06">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06]"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-secondary/15 text-primary transition-colors group-hover:from-primary/25 group-hover:to-secondary/25">
                        <link.icon className="size-4" aria-hidden />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs text-muted-foreground">{link.label}</span>
                        <span className="text-sm font-medium text-white">{link.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div data-animate="fade-up" data-animate-delay="0.1" className="relative md:col-span-3">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full opacity-40 blur-3xl"
                style={{
                  background: "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.2), transparent 60%)",
                }}
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}