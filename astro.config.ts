import compress from 'astro-compress'
import { defineConfig } from 'astro/config'
import { SITE } from './src/constants'

export default defineConfig({
  site: SITE,
  integrations: [compress()],
  vite: {
    server: {
      watch: {
        ignored: ['**/{.github,.husky,.idea,cache,dist}/**'],
      },
    },
  },
})
