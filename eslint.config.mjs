import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrors: 'none' }],
      '@typescript-eslint/no-explicit-any': 'off',
      'jsx-a11y/alt-text': 'warn',
    },
  },
  { ignores: ['.next/**', 'node_modules/**', 'scripts/**', 'research/**', 'seofx/**', 'scratch/**', 'next-env.d.ts'] },
];

export default config;
