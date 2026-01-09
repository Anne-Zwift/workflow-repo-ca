import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],

    ...js.configs.recommended,

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        describe: 'readonly',
        test: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': 'warn',
      'no-unused-vars': 'error',
      eqeqeq: ['error', 'always'],
    },
  },
]);
