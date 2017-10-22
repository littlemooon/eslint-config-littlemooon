module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: [
    'flowtype',
    'import',
    'jest',
    'jsx-a11y',
    'react',
    'prettier',
    'standard',
  ],
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
  rules: {
    'prettier/prettier': [
      1,
      {
        printWidth: 80,
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
        parser: 'flow',
      },
    ],
    'react/sort-comp': [
      1,
      {
        order: [
          '/^displayName+$/',
          '/^propTypes+$/',
          '/^contextTypes+$/',
          '/^queries+$/',
          '/^requiredQueries+$/',
          '/^keyPaths+$/',
          '/^authed+$/',
          '/^mounted+$/',
          '/^getInitialProps+$/',
          'lifecycle',
          '/^on.+$/',
          '/^handle.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
  },
}
