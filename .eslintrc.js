const isProductionEnvironment = process.env.NODE_ENV === 'production';
// .eslintrc.js
module.exports = {
  root: true, // Indicates to eslint rules establisher to stop searching down for .eslintrc
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'import',
    'jsx-a11y',
  ],
  rules: {
    'indent': ['error', 2],
    'no-unused-vars': isProductionEnvironment ? 'error' : 'warn',
    'no-console': isProductionEnvironment ? 'error' : 'off',
    'no-debugger': isProductionEnvironment ? 'warn' : 'off',
    'no-undef': 'error',
    'linebreak-style': 'off',
    'quote-props': ['error', 'consistent'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    {
      files: ['**/*.json', '**/*.jsx'],
      extends: [
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
};
