import PropTypes from 'prop-types'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const Body = createGlobalStyle`
  body {
    background: ${props => props.color};
    transition: background-color 250ms;
  }
`

Body.propTypes = {
  color: PropTypes.string.isRequired,
}
