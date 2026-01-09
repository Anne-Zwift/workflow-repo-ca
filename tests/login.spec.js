import { test, expect } from '@playwright/test';

// Verify the user flow for log in and gives an error message if credentials are wrong

test.describe('login', () => {
  test('user can login with valid credentials', async ({ page }) => {
    // Go to login page
    await page.goto('/login');

    // Fill in form using name attributes
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Click login
    await page.getByRole('button', { name: 'Login' }).click();

    // Check if we see logout button - means you're logged in
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  });

  test('an error message is shown wth invalid credentials', async ({
    page,
  }) => {
    await page.goto('/login');

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill('wrongpassword');

    await page.getByRole('button', { name: 'Login' }).click();

    // Check for error in message container
    await expect(page.locator('#message-container')).toContainText(
      'Invalid email or password',
    );
  });
});
