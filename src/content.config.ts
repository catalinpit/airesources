import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { HIGHLIGHT_ICONS } from './lib/highlight-icons';
import { STACK_LIMITS, USERNAME_PATTERN, stripAt } from './lib/stack-rules';

const categories = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/categories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categorySlug: z.string(),
  }),
});

// Filter facets (see src/lib/filters.ts) are rendered into the resource list as
// comma-separated data attributes, so a value containing a comma would silently
// never match.
const facetValue = z.string().refine((value) => !value.includes(','), {
  message: 'Facet values must not contain commas',
});

const RESOURCE_TYPES = [
  'agent',
  'app-generator',
  'audio',
  'chat',
  'cli-assistant',
  'code-review',
  'course',
  'desktop-assistant',
  'documentation',
  'editor',
  'extension',
  'git-client',
  'image',
  'model',
  'openai-plugin',
  'plugin',
  'search',
  'skill',
  'snippet-generator',
  'support',
  'terminal',
  'testing',
  'ui-generator',
  'use-case',
  'web-assistant',
] as const;

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    // How to access the resource, such as the format, whether signup is needed, or install
    // options. Courses show it under the description; tools show it in the Platforms section.
    // Wrap commands in backticks to render them as code. The page derives lesson counts
    // from `curriculum`, so don't repeat them here.
    accessNote: z.string().optional(),
    categorySlug: z.string(),
    link: z.url().optional(),
    iconUrl: z.string().optional(),
    previewImage: z.string().optional(),
    type: z.enum(RESOURCE_TYPES).optional(), // `course` selects the course page layout
    pricing: z.object({
      type: z.enum(['free', 'paid', 'freemium', 'byok', 'top-up']),
      tiers: z.array(z.object({
        name: z.string(),
        price: z.string(),
      })),
      details: z.string().optional(),
    }).optional(),
    models: z.array(z.string()).optional(),
    // Title + one-liner cards shown under the description on tool pages. Distinct from
    // `features`, which is a flat filter facet.
    highlights: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.enum(HIGHLIGHT_ICONS).default('check'),
    })).optional(),
    platforms: z.array(z.string()).optional(), // e.g., ['macOS', 'Windows', 'Linux']; also sets JSON-LD operatingSystem
    tags: z.array(z.string()).optional(),
    prompt: z.string().optional(),
    skill: z.string().optional(),
    // Names of resources in this category that make up this pack. The page lists them and
    // each part links back here.
    includes: z.array(z.string()).optional(),
    useCase: z.string().optional(),
    example: z.string().optional(),
    author: z.object({
      name: z.string(),
      link: z.string(),
      iconUrl: z.string(),
    }).optional(),
    curriculum: z.array(z.object({
      title: z.string(),
      description: z.string().optional(),
      lessons: z.array(z.string()),
    })).optional(),
    lessonLabel: z.enum(['lessons', 'episodes']).default('lessons'), // Noun for curriculum items
    sponsored: z.enum(['small', 'big']).optional(),
    features: z.array(facetValue).optional(), // Filter facet, e.g. ['use-case', 'plugin']
    createdAt: z.string().optional(), // ISO date string for sorting "latest"
    popularity: z.number().optional(), // For sorting popular items
  }),
});

const username = z
  .string()
  .trim()
  .regex(USERNAME_PATTERN, 'Use the bare username, not a profile URL')
  .transform(stripAt);

// These end up in href attributes, so only web URLs are accepted.
const httpUrl = z.url({ protocol: /^https?$/, hostname: z.regexes.domain });

// A resource's id is its path under src/content/resources without the
// extension, e.g. "coding-tools/cursor". Existence is checked in src/lib/stacks.ts.
const resourceId = z.string().trim().min(1);

// One resource in a stack: the bare id, or an object that adds a note. Both
// forms normalize to the object form.
const stackItem = z
  .union([
    resourceId,
    z.strictObject({
      resource: resourceId,
      // Replaces the resource's description on the stack page, so it reads in the author's voice.
      note: z.string().trim().min(1).max(STACK_LIMITS.note).optional(),
    }),
  ])
  .transform((item) => (typeof item === 'string' ? { resource: item } : item));

// A person's AI stack, published at /stack/<handle>/. The handle is the file
// name (src/content/stacks/<handle>.json), validated in src/lib/stacks.ts.
// Strict objects keep a stray key (a typo, or `slug`, which the loader would
// otherwise take as the entry id) from slipping through.
const stacks = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/stacks' }),
  schema: z.strictObject({
    name: z.string().trim().min(1).max(STACK_LIMITS.name),
    bio: z.string().trim().max(STACK_LIMITS.bio).optional(),
    avatar: httpUrl.optional(), // Falls back to the GitHub avatar when links.github is set
    links: z
      .strictObject({
        website: httpUrl.optional(),
        github: username.optional(),
        x: username.optional(),
      })
      .optional(),
    updatedAt: z.iso.date().optional(), // YYYY-MM-DD
    stack: z.array(stackItem).min(1),
  }),
});

export const collections = { categories, resources, stacks };
