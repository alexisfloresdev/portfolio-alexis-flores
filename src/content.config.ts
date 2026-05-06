import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum([
      "Software",
      "Data",
      "Machine Learning",
      "Cloud",
      "Web",
    ]),
    status: z.enum(["Idea", "En desarrollo", "Beta", "Finalizado"]),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
};