import { expect, test } from '@playwright/test'

const TITLE = 'Hexagonal Architecture in Python using Flask and SqlAlchemy'

test('post page', async ({ page }) => {
  await page.goto('/writing/python-hexagonal-architecture')
  await expect(page).toHaveTitle(`Alex Grover | ${TITLE}`)
  await expect(page.getByTestId('title')).toHaveText(TITLE)
  await expect(page.getByTestId('content')).toBeVisible()
})
