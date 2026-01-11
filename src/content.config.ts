import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
  }),
});

export const collections = { categories, resources };
