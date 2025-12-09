import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      description: z.string().optional(),
      cover: image().optional(),
    }),
});

export const collections = { posts };
