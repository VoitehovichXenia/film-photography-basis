import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
  eslint.configs.recommended,
  ...astro.configs.recommended,
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**'],
  },
  {
    files: ['*.astro'],
    languageOptions: {
      parser: (await import('astro-eslint-parser')).default,
      parserOptions: {
        parser: tsParser,
      },
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
  },
];
