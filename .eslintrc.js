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
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'] // Specify it only for TypeScript files
      }
    }
  ],
  plugins: ['@typescript-eslint', 'react-redux', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-redux/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  settings: {
    react: {
      version: 'detect'
    }
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

    semi: ['error', 'never', { omitLastInOneLineBlock: true }],
    '@typescript-eslint/semicolon': ['warn'],

    'comma-spacing': ['error', { before: false, after: true }],
    '@typescript-eslint/comma-spacing': ['warn'],

    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/brace-style': ['warn'],

    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
