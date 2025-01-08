import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://forum.katalon.com/');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('testops - bypass');
  await page.getByPlaceholder('Search').press('Enter');
  await page.getByRole('link', { name: 'TestOps - Bypass of Disabled Input Fields via HTML Manipulation Bugs Report' }).locator('a').click();
  await page.getByLabel('Katalon TestOps link clicked').click();
  await expect(page.locator('div').filter({ hasText: /^Log in$/ })).toBeVisible();
});