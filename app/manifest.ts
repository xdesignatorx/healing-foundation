import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} Wellness Residence`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F8F6F2",
    theme_color: "#1F4D3A",
    icons: [
      {
        src: siteConfig.logo,
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: siteConfig.logo,
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
