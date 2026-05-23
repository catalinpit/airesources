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

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    categorySlug: z.string(),
    link: z.string().optional(),
    iconUrl: z.string().optional(),
    previewImage: z.string().optional(),
    type: z.string().optional(),
    pricing: z.object({
      type: z.enum(['free', 'paid', 'freemium', 'byok', 'top-up']),
      tiers: z.array(z.object({
        name: z.string(),
        price: z.string(),
      })),
      details: z.string().optional(),
    }).optional(),
    models: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    prompt: z.string().optional(),
    example: z.string().optional(),
    author: z.object({
      name: z.string(),
      link: z.string(),
      iconUrl: z.string(),
    }).optional(),
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
