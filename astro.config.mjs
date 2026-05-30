// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://airesources.dev",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
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
