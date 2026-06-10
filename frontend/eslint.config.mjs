import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';
import preferArrow from 'eslint-plugin-prefer-arrow';

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,

  globalIgnores([
    '.next/**',
    'node_modules/**',
    'coverage/**',
    'dist/**',
    'build/**',
  ]),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      '@stylistic': stylistic,
      'prefer-arrow': preferArrow,
    },

    rules: {
      // Arrow functions only
      'func-style': [
        'error',
        'expression',
        {
          allowArrowFunctions: true,
        },
      ],

      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],

      // No console
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      // JS/TS strings
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      // JSX attributes
      '@stylistic/jsx-quotes': [
        'error',
        'prefer-single',
      ],

      // Semicolons
      semi: ['error', 'always'],

      // Unused vars
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
]);