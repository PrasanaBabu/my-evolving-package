import { test, expect } from '@playwright/test';

test('renders homepage on load', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page.getByText('Homepage')).toBeVisible();
})


test('navigates to about page when about link in header clicked', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByRole('link', { name: 'About' }).click();

    await expect(page.getByText('About Page')).toBeVisible();
})


test('should render 404 no found with home button', async ({ page }) => {
    await page.goto('http://localhost:3000/random-page')
    await expect(page.getByText('404')).toBeVisible();

    await page.getByRole('button', { name: 'Home' }).click();

    await expect(page.getByText('Homepage')).toBeVisible();
})
