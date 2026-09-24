import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), subtitle: z.string(), summary: z.string(),
    category: z.enum(['Systems engineering', 'Desktop application', 'Interactive web', 'Full-stack web', 'Developer tools']),
    tags: z.array(z.string()).min(1), role: z.string(),
    order: z.number(), featured: z.boolean().default(false),
    visual: z.enum(['signal', 'medicine', 'typing', 'food', 'tool']),
    accent: z.string(), context: z.string(),
    evidence: z.array(z.string()).min(1),
    sourceUrl: z.url().optional(),
  }),
});
export const collections = { projects };
