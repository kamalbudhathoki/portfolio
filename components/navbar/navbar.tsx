"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems, siteConfig } from "@/constants/nav";
import { useActiveSection } from "@/hooks/use-active-section";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const active = useActiveSection();
  const mounted = useMounted();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-white"
          aria-label={`${siteConfig.name} home`}
        >
          Kamal<span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = mounted && active === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-white",
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-primary to-secondary transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="#contact">Let&apos;s Talk</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] border-white/10">
            <SheetHeader className="border-b border-white/10 pb-4 text-left">
              <SheetTitle className="text-white">Menu</SheetTitle>
              <SheetDescription>Navigate through the portfolio</SheetDescription>
            </SheetHeader>
            <ul className="mt-4 flex flex-col gap-1 px-3">
              {navItems.map((item) => {
                const isActive = mounted && active === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                        isActive
                          ? "bg-white/5 font-medium text-primary"
                          : "text-muted-foreground hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}