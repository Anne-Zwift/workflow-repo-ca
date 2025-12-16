import { test, expect } from '@playwright/test';

// navigation:
// Write a test that:
// 1. Navigates to the home page
// 2. Waits for the venue list to load
// 3. Clicks the first venue
// 4. Verifies that when the venue details page loads there are the words “Venue details” in the heading

test.describe('home', () => {
  test('navigates to home page', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: 'home' })).toBeVisible();
  });

  test('waits for the venue list to load', async ({ page }) => {
    await page.goto('/');

    const venues = page.locator('#venue-container > *');

    await expect(venues.first()).toBeVisible();
  });

  test('clicks on the first venue', async ({ page }) => {
    await page.goto('/');

    const venues = page.locator('#venue-container a');

    await expect(venues.first()).toBeVisible();
    await venues.first().click();
  });

  test('clicks on the first venue and heading shows the text "Venue details"', async ({
    page,
  }) => {
    await page.goto('/');

    const venues = page.locator('#venue-container a');

    await expect(venues.first()).toBeVisible();
    await venues.first().click();

    // Expects page to have a heading with the name of Venue details.
    await expect(
      page.getByRole('heading', { name: /Venue details/i }),
    ).toBeVisible();
  });
});
