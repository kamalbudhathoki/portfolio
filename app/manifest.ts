import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kamal B.C. — AI Engineer",
    short_name: "Kamal B.C.",
    description:
      "Portfolio of Kamal B.C., an AI Engineer building intelligent software with AI on strong full-stack engineering foundations.",
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