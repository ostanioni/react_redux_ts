module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react-redux'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-redux/recommended',
    "prettier",
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': 'webpack'   
  },
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always',
        objects: 'always',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    '@typescript-eslint/comma-dangle': ['warn'],

    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/quotes': ['warn'],

    // semi: 0,
    '@typescript-eslint/semicolon': ['warn', 'single'],

    'comma-spacing': ['error', { before: false, after: true }],
    '@typescript-eslint/comma-spacing': ['warn'],

    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/brace-style': ['warn'],

    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
