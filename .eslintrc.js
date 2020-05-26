module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'react-hooks', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    'react/display-name': 'off',
  },
  globals: {
    Promise: false,
  },
  parser: '@typescript-eslint/parser',
}
