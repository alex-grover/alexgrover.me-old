import compress from 'astro-compress'
import { defineConfig } from 'astro/config'
import { SITE } from './src/constants'
import sitemap from '@astrojs/sitemap'

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
})
