import PropTypes from 'prop-types'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const Body = createGlobalStyle`
  body {
    align-items: center;
    background: ${props => props.color};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    transition: background-color 250ms;
    width: 100vw;
  }
`

Body.propTypes = {
  color: PropTypes.string.isRequired,
}
