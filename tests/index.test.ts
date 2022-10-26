import { test, expect } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Alex Grover | Create > Consume')
  const brand = page.getByText('Alex Grover')
  await expect(brand).toHaveAttribute('href', '/')
})
