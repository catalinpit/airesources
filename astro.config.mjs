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
  // Hanken Grotesk (OFL, https://github.com/marcologous/hanken-grotesk) is
  // vendored as a variable font instanced to the 400-700 weight range the
  // site uses, so the build has no network dependency and the browser never
  // touches Google Fonts.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Hanken Grotesk",
      cssVariable: "--font-hanken-grotesk",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/hanken-grotesk-latin-400-700.woff2"],
            weight: "400 700",
            style: "normal",
          },
        ],
      },
    },
  ],
  build: {
    // The stylesheet is small enough that a separate render-blocking request
    // costs more than shipping it inline with every page.
    inlineStylesheets: "always",
  },
  integrations: [sitemap(), partytown()],
  redirects: {
    "/category/ides": "/category/coding-tools",
    "/coding-tools/windsurf-ide": "/coding-tools/devin-desktop",
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
