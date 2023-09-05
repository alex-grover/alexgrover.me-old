import { expect, test } from '@playwright/test'

test('seo', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Alex Grover | Create > Consume')

  const descriptionElement = page.locator('meta[name="description"]')
  const description = await descriptionElement.getAttribute('content')
  expect(description).toEqual("Alex Grover's personal website.")

  const ogTitleElement = page.locator('meta[property="og:title"]')
  const ogTitle = await ogTitleElement.getAttribute('content')
  expect(ogTitle).toEqual('Alex Grover | Create > Consume')

  const ogTypeElement = page.locator('meta[property="og:type"]')
  const ogType = await ogTypeElement.getAttribute('content')
  expect(ogType).toEqual('website')

  const ogImageElement = page.locator('meta[property="og:image"]')
  const ogImage = await ogImageElement.getAttribute('content')
  expect(ogImage).toEqual('https://alexgrover.me/og.png')
})
