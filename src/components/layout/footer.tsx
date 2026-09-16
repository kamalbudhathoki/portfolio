"use client";

import * as React from "react";
import { Heart, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import { navItems, siteConfig } from "@/constants/nav";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/shared/reveal";

const socialLinks = [
  { href: siteConfig.github, icon: GithubIcon, label: "GitHub" },
  { href: siteConfig.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
] as const;

export function Footer() {
  const year = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative border-t border-white/[0.07]" id="footer">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(110,231,249,0.5) 30%, rgba(139,92,246,0.5) 70%, transparent)",
        }}
      />
      <Reveal
        className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pt-16 pb-10 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center gap-4">
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-tight text-white"
          >
            Kamal<span className="text-primary">.</span>
          </a>
          <p className="max-w-md text-center text-sm leading-relaxed text-muted-foreground">
            Building the future — one intelligent application at a time.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-white"
              aria-label={label}
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>

        <Separator className="w-full max-w-md opacity-40" />

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
          <span>
            © {year} {siteConfig.name}
          </span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            Built with <Heart className="inline size-3 text-red-500" aria-label="love" /> using Next.js, GSAP & Tailwind CSS
          </span>
        </div>
      </Reveal>
    </footer>
  );
}