import { expect, test } from '@playwright/test'

test('not found page loads', async ({ page }) => {
  await page.goto('/not-found')
  await expect(page).toHaveTitle('Alex Grover | Not Found')
  await expect(page.getByTestId('heading')).toBeVisible()
  const link = page.getByTestId('link')
  await expect(link).toBeVisible()
  await expect(link).toHaveText('Go home')
  await expect(link).toHaveAttribute('href', '/')
})
