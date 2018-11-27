import PropTypes from 'prop-types'
import React from 'react'

export const Clock = ({ color, time }) => (
  <div style={{
    alignItems: 'center',
    color: '#eeeeee',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  }}>
    <h1>{time}</h1>
    <h2>{color}</h2>
  </div>
)

Clock.propTypes = {
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
