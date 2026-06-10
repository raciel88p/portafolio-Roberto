import { test, expect } from '@playwright/test';

test('verify testimonials section', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(page.locator('#testimonios')).toBeVisible();
  await page.locator('#testimonios').screenshot({ path: 'testimonials_section.png' });
});
