import { expect, test } from '@playwright/test'

test('rss', async ({ request }) => {
  const response = await request.get('/rss.xml', { failOnStatusCode: true })
  const xml = await response.text()
  expect(xml).toContain(
    '<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/"><channel><title>Alex Grover | Create &gt; Consume</title><description>Alex Grover&apos;s personal website.</description><link>https://alexgrover.me/</link>'
  )
})
