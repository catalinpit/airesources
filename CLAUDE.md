# CLAUDE.md

## Purpose
airesources.dev is a curated directory helping developers discover AI coding tools, prompts, and learning resources. The site prioritizes discoverability, fast load times, and SEO for organic growth.

## Commands
```bash
pnpm dev          # Start dev server (http://localhost:4321)
pnpm build        # Build for production - USE THIS TO VERIFY CHANGES
pnpm preview      # Preview production build locally
```

## Tech Stack
- Astro 5 (static site generation)
- Tailwind CSS 4 (via Vite plugin)
- Content Collections for resources (`src/content/`)

## Project Structure
```
src/
├── content/           # Content collections (categories, resources)
│   ├── categories/    # Category definitions (.json)
│   └── resources/     # Resource entries (.md) organized by category
├── pages/             # Route handlers
│   ├── index.astro    # Homepage
│   ├── category/[slug].astro
│   └── [category]/[product].astro
├── components/        # UI components and icons
├── layouts/           # Base layout with SEO
└── data/categories.ts # Legacy data (being migrated to content collections)
```

## Key Files
- `src/content.config.ts` - Content collection schemas (Zod validation)
- `src/data/categories.ts` - Resource type definitions and legacy data
- `astro.config.mjs` - Site config, redirects, integrations

## Verifying Changes
Always run `pnpm build` before committing. The build will fail on:
- Invalid content collection schemas
- Broken imports or missing files
- TypeScript errors in `.astro` files

## For Detailed Guides
Read these files when working on specific tasks:
- Adding resources: See schema in `src/content.config.ts:13-42`
- Category structure: See types in `src/data/categories.ts:1-35`
