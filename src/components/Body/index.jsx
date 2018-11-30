import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

export const Body = ({ color }) => (
  <Helmet>
    <body style={`background: ${color}; transition: background 250ms;`}/>
  </Helmet>
)

Body.propTypes = {
  color: PropTypes.string.isRequired,
}
