module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
      'airbnb-typescript',
      'plugin:prettier/recommended'
    ],
    overrides: [
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
  },
  plugins: [
    'react',
      'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    "react/react-in-jsx-scope" : "off",
    "react/jsx-no-bind": "off",
    "react/require-default-props" : 'off',
    "react/jsx-props-no-spreading" : "off"
  },
};
