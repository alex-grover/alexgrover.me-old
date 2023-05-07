import { expect, test } from '@playwright/test'

test('seo', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Alex Grover | Create > Consume')

  const descriptionElement = await page.locator('meta[name="description"]')
  const description = await descriptionElement.getAttribute('content')
  await expect(description).toEqual("Alex Grover's personal website.")

  const ogTitleElement = await page.locator('meta[property="og:title"]')
  const ogTitle = await ogTitleElement.getAttribute('content')
  await expect(ogTitle).toEqual('Alex Grover | Create > Consume')

  const ogTypeElement = await page.locator('meta[property="og:type"]')
  const ogType = await ogTypeElement.getAttribute('content')
  await expect(ogType).toEqual('website')

  const ogImageElement = await page.locator('meta[property="og:image"]')
  const ogImage = await ogImageElement.getAttribute('content')
  await expect(ogImage).toEqual('/og.png')
})
