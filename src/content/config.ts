import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    pubDate: z.string(),
    categoria: z.string(),
    estilo: z.string().optional()
  })
});

export const collections = {
  posts: postsCollection
};
