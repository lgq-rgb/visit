import { test, expect } from '@playwright/test';

test('test internal link', async ({ page }) => {
    await page.goto('https://forum.katalon.com/');
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('disposable');
    await page.getByPlaceholder('Search').press('Enter');
    await page.getByRole('link', { name: 'Improper Restriction on' }).locator('a').click();
    await page.getByLabel('TestOps - Bypass of Disabled').click();
    await expect(page.getByRole('link', { name: 'TestOps - Bypass of Disabled Input Fields via HTML Manipulation', exact: true })).toBeVisible();
});