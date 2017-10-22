module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      1,
      {
        printWidth: 80,
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
