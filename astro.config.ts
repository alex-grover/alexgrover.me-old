import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/static'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import { SITE } from './src/constants'

export default defineConfig({
  site: SITE,
  integrations: [compress(), sitemap()],
  vite: {
    server: {
      watch: {
        ignored: ['**/{.github,.husky,.idea,cache,dist}/**'],
      },
    },
  },
  output: 'static',
  adapter: vercel({
    analytics: true,
  }),
})
