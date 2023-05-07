import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import { DESCRIPTION, NAME, SEPARATOR, TAGLINE } from '../constants'

const parser = new MarkdownIt()

export async function get() {
  const posts = await getCollection('writing')

  return rss({
    title: `${NAME} ${SEPARATOR} ${TAGLINE}`,
    description: DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: `/writing/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    })),
    stylesheet: '/pretty-feed.xsl',
    trailingSlash: false,
  })
}
