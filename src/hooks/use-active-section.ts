"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/constants/nav";

export function useActiveSection() {
  const [active, setActive] = useState(navItems[0].href);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return active;
}