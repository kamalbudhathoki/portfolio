import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kamal B.C. — AI Engineer & Full-Stack Developer",
    short_name: "Kamal B.C.",
    description:
      "Portfolio of Kamal B.C., a Computer Engineering graduate transitioning into AI Engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}