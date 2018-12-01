import PropTypes from 'prop-types'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Color from 'color'

export const Body = createGlobalStyle`
  body {
    align-items: center;
    background: ${props => props.color};
    color: ${props => Color(props.color).isDark() ? '#eee' : '#111'};
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    height: 100vh;
    justify-content: center;
    text-align: center;
    transition: background-color 250ms;
    width: 100vw;
  }
`

Body.propTypes = {
  color: PropTypes.string.isRequired,
}
