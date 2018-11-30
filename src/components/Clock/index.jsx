import PropTypes from 'prop-types'
import React from 'react'

import { style } from './constants'

export const Clock = ({ color, time }) => (
  <div style={style}>
    <h1 style={{ margin: 0 }}>{time}</h1>
    <h2>{color}</h2>
  </div>
)

Clock.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}
