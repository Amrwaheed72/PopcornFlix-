// eslint.config.js

import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import reactRefreshPlugin from 'eslint-plugin-react-refresh'; // Corrected Import
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // Global ignores
  {
    ignores: ['node_modules', 'dist'],
  },

  // Core and TypeScript recommended rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React, Hooks, and Accessibility recommended rules
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
      'react-refresh': reactRefreshPlugin, // Corrected Plugin
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // Apply recommended rules
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,

      // My Recommended Overrides & Additions
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'no-console': 'warn',
      "@typescript-eslint/no-unused-vars": "warn",
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
      'react/jsx-props-no-spreading': 'off',

      // Add the rule for the new plugin
      'react-refresh/only-export-components': 'warn',
    },
  },

  // Prettier config must be last
  eslintConfigPrettier,
);
