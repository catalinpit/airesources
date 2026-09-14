// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://airesources.dev",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  // The site only uses weights 400-700 and no italics, so a single variable
  // font file instanced to that range is downloaded at build time and
  // self-hosted, removing the Google Fonts CSS from the critical path.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Hanken Grotesk",
      cssVariable: "--font-hanken-grotesk",
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
  build: {
    // The whole stylesheet is ~9 KiB compressed; inlining it removes a
    // render-blocking request from every page.
    inlineStylesheets: "always",
  },
  integrations: [sitemap(), partytown()],
  redirects: {
    "/category/ides": "/category/coding-tools",
    "/category/people": "/",
    "/people": "/",
    "/people/andrej-karpathy": "/",
    "/people/andrew-ng": "/",
    "/people/simon-willison": "/",
    "/category/posts": "/",
    "/posts": "/",
    "/posts/vibing-a-non-trivial-ghostty-feature": "/",
  },
});
