# CLAUDE.md

## Purpose
airesources.dev is a curated directory helping developers discover AI coding tools, prompts, and learning resources. The site prioritizes discoverability, fast load times, and SEO for organic growth.

## Commands
```bash
pnpm dev          # Start dev server (http://localhost:4321)
pnpm build        # Build for production - USE THIS TO VERIFY CHANGES
pnpm check        # Type-check .astro and .ts files (the build does not)
pnpm preview      # Preview production build locally
```

## Tech Stack
- Astro 5 (static site generation)
- Tailwind CSS 4 (via Vite plugin)
- Content Collections for resources (`src/content/`)

## Project Structure
```
src/
├── content/           # Content collections (categories, resources, stacks)
│   ├── categories/    # Category definitions (.json)
│   ├── resources/     # Resource entries (.md) organized by category
│   └── stacks/        # Per-person AI stacks (.json); the file name is the /stack/<handle>/ URL
├── pages/             # Route handlers
│   ├── index.astro    # Homepage
│   ├── category/[slug].astro
│   ├── stack/         # index (all stacks), new (builder), [handle] (one stack)
│   └── [category]/[product].astro
├── components/        # UI components and icons
├── layouts/           # Base layout with SEO
└── data/categories.ts # Legacy data (being migrated to content collections)
```

## Key Files
- `src/content.config.ts` - Content collection schemas (Zod validation)
- `src/data/categories.ts` - Resource type definitions and legacy data
- `astro.config.mjs` - Site config, redirects, integrations

## Styling Conventions
- Tailwind utilities in markup. The exceptions are the resource list row, the icon tile and the stack builder's picker row (`.resource-row*`, `.resource-icon*`, `.stack-pick*`, declared in `<style is:global>` blocks inside `Resource-Row.astro`, `Resource-Icon.astro` and `Stack-Pick.astro` with `@reference`), which render ~200 times per page; the component classes exist only to keep that HTML small. Don't add more without the same justification.
- Shared chrome lives in `src/components/ui/`: `Page-Shell` (glow + content column), `Card`, `Breadcrumbs`, `Button` (`variant="primary" | "tonal"`), `Copy-Button`. Use them instead of copying class strings between pages.
- Client scripts hook onto `data-*` attributes (`data-resource`, `data-empty-state`, ...), never onto style class names.
- JSON-LD goes through `toJsonLd()` from `src/lib/structured-data.ts`, never raw `JSON.stringify`, so content can't close the `<script>` tag.

## Verifying Changes
Always run `pnpm build` and `pnpm check` before committing. The build fails on:
- Invalid content collection schemas (including stack files with unknown resource ids or bad file names)
- Broken imports or missing files

`pnpm check` catches TypeScript errors in `.astro` and `.ts` files; the build does not type-check.

## For Detailed Guides
Read these files when working on specific tasks:
- Adding resources: See schema in `src/content.config.ts:13-42`
- Category structure: See types in `src/data/categories.ts:1-35`
- Stacks: schema at the bottom of `src/content.config.ts`; shared limits/patterns in `src/lib/stack-rules.ts`; loading, section order and validation in `src/lib/stacks.ts`; builder logic in `src/lib/stack-builder.ts`
