import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import { DESCRIPTION, NAME, SEPARATOR, TAGLINE } from '../constants'

export async function get() {
  return rss({
    title: `${NAME}${SEPARATOR}${TAGLINE}`,
    description: DESCRIPTION,
    site: import.meta.env.SITE,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
    stylesheet: '/pretty-feed.xsl',
  })
}
