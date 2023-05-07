import { expect, test } from '@playwright/test'

test('home page', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('about')).toBeVisible()
  await expect(page.getByTestId('contact')).toBeVisible()
})
