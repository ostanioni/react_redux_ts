module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "./tsconfig.json",
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  plugins: ["@typescript-eslint", "react-redux"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-redux/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "indent": ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "none"],
    "@typescript-eslint/semicolon": "warn",
    "@typescript-eslint/trailing-comma": false
  }
}