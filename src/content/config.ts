import { rssSchema } from '@astrojs/rss'
import { defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: rssSchema,
})

export const collections = {
  blog: blogCollection,
}
