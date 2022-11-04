import rss from '@astrojs/rss'
import { DESCRIPTION, NAME, SEPARATOR, TAGLINE } from '../constants'

export function get() {
  return rss({
    title: `${NAME}${SEPARATOR}${TAGLINE}`,
    description: DESCRIPTION,
    site: import.meta.env.SITE,
    items: import.meta.glob('./posts/*.md'),
    stylesheet: '/pretty-feed.xsl',
  })
}
