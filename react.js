module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:react/recommended', 'prettier/react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
