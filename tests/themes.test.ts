import { expect, test } from '@playwright/test'

test('themes', async ({ page }) => {
  await page.goto('/')

  const html = page.locator('html')
  await expect(html).toHaveCSS('background-color', 'rgb(255, 255, 255)')

  await expect(page.locator('[data-theme-toggle="light"]')).not.toBeVisible()
  const toggle = page.locator('[data-theme-toggle="dark"]')
  await expect(toggle).toBeVisible()
  await toggle.click()

  await expect(html).toHaveCSS('background-color', 'rgb(30, 30, 30)')
})
