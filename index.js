module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      1,
      {
        printWidth: 80,
        trailingComma: 'all',
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
