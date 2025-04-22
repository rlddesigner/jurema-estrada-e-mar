import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    pubDate: z.string(),
    categoria: z.string(),
    estilo: z.string().optional()
  })
});

export const collections = { posts };
