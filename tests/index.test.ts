import { test, expect } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Alex Grover | Create > Consume')
  const brand = page.getByRole('link', { name: 'Alex Grover' })
  await expect(brand).toBeVisible()
  await expect(brand).toHaveAttribute('href', '/')
})
