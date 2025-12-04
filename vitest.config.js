import { defineConfig } from 'vite';

// Simulate the window and location objects
export default defineConfig({
  test: {
    environment: 'jsdom',
  },
});
