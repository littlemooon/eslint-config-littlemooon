module.exports = {
  parser: 'babel-eslint',
  extends: [
    './rules/base',
    './rules/import',
    './rules/jest',
    './rules/jsx-a11y',
    './rules/react',
    './rules/flow',
    './rules/prettier',
  ].map(require.resolve),
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  globals: {
    System: true,
    Set: true,
    Map: true,
    Promise: true,
    window: true,
  },
  rules: {},
}
