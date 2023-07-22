import { test, expect } from '@playwright/test'

test('has text from msw', async ({ page }) => {
  await page.goto('http://localhost')

  // Expect a title "to contain" a substring.
  await expect(page.locator(`[data-testid="http-mock-response"]`)).toHaveText(/Mock_service_worker_response_todo_2/)
})
