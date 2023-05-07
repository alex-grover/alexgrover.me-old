import { expect, test } from '@playwright/test'

// Sitemaps are only generated in production builds, so we just test that the
// link tag is in the document
test('sitemap', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('link[rel="sitemap"]')).toHaveAttribute(
    'href',
    '/sitemap-index.xml'
  )
})
