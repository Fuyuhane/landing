import { defineCollection, z } from "astro:content";

const vessels = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    kanji: z.string(),
    romaji: z.string(),
    meaning: z.string(),
    description: z.string(),
    longDescription: z.string(),
    accent: z.enum(["mint", "lavender"]).optional(),
    status: z.enum(["active", "resting", "coming-soon"]),
    techStack: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        codeberg: z.string().url().optional(),
        live: z.string().url().optional(),
      })
      .default({}),
    order: z.number().default(0),
  }),
});

export const collections = { vessels };
