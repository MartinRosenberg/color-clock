import PropTypes from 'prop-types'
import React from 'react'

import { style } from './constants'

export const Content = ({ children }) =>
  <div style={style}>
    {children}
  </div>

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ])
}
