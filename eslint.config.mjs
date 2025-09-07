import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // 1. Ignore patterns first
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      '.turbo/**',
      'dist/**',
      '*.config.mjs',
      '*.config.js',
    ],
  },

  // 2. Apply Next + Airbnb + TypeScript
  ...compat.extends(
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ),

  // 3. Add parserOptions.project (needed for airbnb-typescript)
  ...compat.config({
    parserOptions: {
      project: resolve(__dirname, './tsconfig.json'),
      tsconfigRootDir: __dirname,
    },
  }),

  // 4. overrides for arrow functions for making shadcn like components
  {
    files: ['app/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}'],
    rules: {
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['function-declaration', 'arrow-function'],
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  },

  // 5. Custom rules / fixes
  {
    rules: {
      '@typescript-eslint/brace-style': 'off',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'import/extensions': [
        'error',
        'ignorePackages',
        { ts: 'never', tsx: 'never' },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'no-console': 'warn',
    },
  },
];
