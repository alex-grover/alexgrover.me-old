import { rssSchema } from '@astrojs/rss'
import { defineCollection } from 'astro:content'

const writing = defineCollection({
  schema: rssSchema,
})

export const collections = {
  writing,
}
