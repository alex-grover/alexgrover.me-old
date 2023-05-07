import { expect, test } from '@playwright/test'

test('writing page', async ({ page }) => {
  await page.goto('/writing')
  await expect(page).toHaveTitle('Alex Grover | Writing')
  await expect(page.getByTestId('post-list')).toBeVisible()
})
