import * as React from 'react'
import PropTypes from 'prop-types'

export default function TestReact({ children }) {
  return <div>{children}</div>
}

TestReact.propTypes = {
  children: PropTypes.node,
}
