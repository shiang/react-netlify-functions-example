module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: '16.11.0'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'jsx-a11y'],
  rules: {
    'no-unused-vars': ['off'],
    semi: ['error', 'never'],
    'sort-imports': ['off'],
    'sort-keys': ['off'],
    'no-console': ['off'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    camelcase: ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
}
