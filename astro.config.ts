import { defineConfig } from 'astro/config'
import { SITE } from './src/constants'

export default defineConfig({
  site: SITE,
  vite: {
    server: {
      watch: {
        ignored: ['**/{.github,.husky,.idea,cache,dist}/**'],
      },
    },
  },
})
