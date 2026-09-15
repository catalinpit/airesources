import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const categories = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/categories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categorySlug: z.string(),
  }),
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
    // The page derives lesson counts from `curriculum`, so don't repeat them here.
    accessNote: z.string().optional(),
    categorySlug: z.string(),
    link: z.string().url().optional(),
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
    })).optional(),
    platforms: z.array(z.string()).optional(), // e.g., ['macOS', 'Windows', 'Linux']; also sets JSON-LD operatingSystem
    tags: z.array(z.string()).optional(),
    prompt: z.string().optional(),
    skill: z.string().optional(),
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
    // New fields for enhanced filtering
    techStack: z.array(z.string()).optional(), // e.g., ['Next.js', 'React', 'TypeScript']
    features: z.array(z.string()).optional(), // e.g., ['AI', 'Authentication', 'Blog', 'SEO']
    badges: z.object({
      featured: z.boolean().optional(),
      bestseller: z.boolean().optional(),
      verified: z.boolean().optional(),
      new: z.boolean().optional(),
    }).optional(),
    integrations: z.array(z.string()).optional(), // e.g., ['Stripe', 'LemonSqueezy', 'Firebase']
    createdAt: z.string().optional(), // ISO date string for sorting "latest"
    popularity: z.number().optional(), // For sorting popular items
  }),
});

export const collections = { categories, resources };
