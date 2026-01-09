import { defineConfig } from 'vite';

// Simulate the window and location objects
export default defineConfig({
  test: {
    include: ['js/tests/**/*.test.js', 'js/tests/**/*/.spec.js'],

    // Exclude root tests like Playwright
    exclude: ['tests', 'tests/**'],

    environment: 'jsdom',
    globals: true,
  },
});
