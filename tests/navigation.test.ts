import { expect, test } from '@playwright/test'

test('navigation header', async ({ page }) => {
  await page.goto('/')

  const brand = page.getByTestId('brand')
  await expect(brand).toBeVisible()
  await expect(brand).toHaveAttribute('href', '/')

  await expect(page.getByTestId('nav')).toBeVisible()
  await expect(page.getByTestId('nav-open')).not.toBeVisible()
})

test.describe('mobile', () => {
  test.use({ viewport: { width: 585, height: 1266 } })

  test('navigation menu', async ({ page }) => {
    await page.goto('/')

    const menu = page.locator('[data-nav-menu]')
    await expect(menu).toHaveCSS('opacity', '0')

    const open = page.getByTestId('nav-open')
    await expect(open).toBeVisible()
    await open.click()
    await expect(menu).toHaveCSS('opacity', '1')

    await page.getByTestId('nav-close').click()
    await expect(menu).toHaveCSS('opacity', '0')
  })
})
