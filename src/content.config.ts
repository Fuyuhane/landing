import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const vessels = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/vessels" }),
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
        github: z.url().optional(),
        live: z.url().optional(),
      })
      .default({}),
    order: z.number().default(0),
  }),
});

export const collections = { vessels };
