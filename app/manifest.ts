import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dummy LINE UI Starter",
    short_name: "LINE Starter",
    start_url: "/",
    display: "standalone",
    background_color: "#00c300",
    theme_color: "#00c300",
    lang: "ja",
    description: "Progressive web starter template for LINE-like experiences.",
  };
}
