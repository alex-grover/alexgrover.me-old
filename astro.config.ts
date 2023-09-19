import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/static'
import postcssGlobalData from '@csstools/postcss-global-data'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import customMedia from 'postcss-custom-media'
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
    css: {
      postcss: {
        plugins: [
          postcssGlobalData({ files: ['src/media.css'] }),
          customMedia(),
        ],
      },
    },
  },
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  build: {
    format: 'file',
  },
})
