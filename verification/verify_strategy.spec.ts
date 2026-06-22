import { test, expect } from '@playwright/test';

test('verify ingeniacr strategy update', async ({ page }) => {
  await page.goto('http://localhost:4321/proyectos/ingeniacr');
  // In the current template, "Nuestra Estrategia" is an h2
  const strategyHeading = page.locator('h2:has-text("Nuestra Estrategia")');
  const strategyText = page.locator('p').filter({ hasText: 'Desde identificar el buyer persona' });
  await expect(strategyText).toBeVisible();
  await page.screenshot({ path: 'verification/screenshots/ingeniacr_strategy_updated.png', fullPage: true });
});
