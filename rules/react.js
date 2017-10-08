module.exports = {
  plugins: ['react'],
  settings: {
    react: {
      version: '15.6',
    },
  },
  rules: {
    'react/boolean-prop-naming': 1, // Enforces consistent naming for boolean props
    'react/default-props-match-prop-types': 1, // Prevent extraneous defaultProps on components
    'react/display-name': [1, { ignoreTranspilerName: false }], // Prevent missing displayName in a React component definition
    'react/no-array-index-key': 1, // Prevent using Array index in key props
    'react/no-children-prop': 1, // Prevent passing children as props
    'react/no-danger': 1, // Prevent usage of dangerous JSX properties
    'react/no-danger-with-children': 1, // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-deprecated': 1, // Prevent usage of deprecated methods
    'react/no-did-mount-set-state': 1, // Prevent usage of setState in componentDidMount
    'react/no-did-update-set-state': 1, // Prevent usage of setState in componentDidUpdate
    'react/no-direct-mutation-state': 1, // Prevent direct mutation of this.state
    'react/no-is-mounted': 1, // Prevent usage of isMounted
    // 'react/no-multi-comp': 1, // Prevent multiple component definition per file
    'react/no-redundant-should-component-update': 1, // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-render-return-value': 1, // Prevent usage of the return value of React.render
    'react/no-typos': 1, // Prevent common casing typos
    'react/no-string-refs': 1, // Prevent using string references in ref attribute.
    'react/no-unescaped-entities': 1, // Prevent invalid characters from appearing in markup
    'react/no-unknown-property': 1, // Prevent usage of unknown DOM property (fixable)
    'react/no-unused-prop-types': 1, // Prevent definitions of unused prop types
    'react/no-will-update-set-state': 1, // Prevent usage of setState in componentWillUpdate
    // 'react/prefer-es6-class': 1, // Enforce ES5 or ES6 class for React Components
    // 'react/prefer-stateless-function': 1, // Enforce stateless React Components to be written as a pure function
    'react/prop-types': 1, // Prevent missing props validation in a React component definition
    'react/react-in-jsx-scope': 1, // Prevent missing React when using JSX
    // 'react/require-default-props': 1, // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-render-return': 1, // Enforce ES5 or ES6 class for returning value in render function
    'react/self-closing-comp': 1, // Prevent extra closing tags for components without children (fixable)
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
    ], // Enforce component methods order (fixable)
    // 'react/sort-prop-types': 1, // Enforce propTypes declarations alphabetical sorting
    // 'react/style-prop-object': 1, // Enforce style prop value being an object
    'react/void-dom-elements-no-children': 1, // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    // JSX-specific rules

    'react/jsx-boolean-value': 1, // Enforce boolean attributes notation in JSX (fixable)
    'react/jsx-first-prop-new-line': 1, // Enforce position of the first prop in JSX (fixable)
    'react/jsx-handler-names': 0, // Enforce event handler naming conventions in JSX
    'react/jsx-key': 1, // Validate JSX has key prop when in array or iterator
    'react/jsx-no-bind': [1, { allowArrowFunctions: true }], // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-comment-textnodes': 1, // Prevent comments from being inserted as text nodes
    'react/jsx-no-duplicate-props': 1, // Prevent duplicate props in JSX
    'react/jsx-no-literals': 1, // Prevent usage of unwrapped JSX strings
    'react/jsx-no-target-blank': 1, // Prevent usage of unsafe target='_blank'
    'react/jsx-no-undef': 1, // Disallow undeclared variables in JSX
    'react/jsx-pascal-case': 1, // Enforce PascalCase for user-defined JSX components
    'react/jsx-sort-props': 1, // Enforce props alphabetical sorting (fixable)
    'react/jsx-uses-react': 1, // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars': 1, // Prevent variables used in JSX to be incorrectly marked as unused
  },
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'react/prop-types': 0,
      },
    },
  ],
}
