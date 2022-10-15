import { defineConfig } from 'astro/config'

export default defineConfig({
  vite: {
    server: {
      watch: {
        ignored: ['**/{.github,.husky,.idea,cache,dist}/**'],
      },
    },
  },
})
