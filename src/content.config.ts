import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const vessels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: new URL('./content/vessels', import.meta.url) }),
  schema: z.object({
    title: z.string(),
    kanji: z.string(),
    romaji: z.string(),
    meaning: z.string(),
    description: z.string(),
    longDescription: z.string(),
    accent: z.enum(['mint', 'lavender']).optional(),
    status: z.enum(['active', 'resting', 'coming-soon']),
    techStack: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    links: z.object({
      github: z.string().optional(),
      live: z.string().optional(),
    }).default({}),
    order: z.number().default(0),
  }),
});

export const collections = { vessels };
