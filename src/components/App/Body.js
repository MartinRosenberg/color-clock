import Color from 'color'
import { Global, css } from '@emotion/core'
import PropTypes from 'prop-types'
import React from 'react'

export const Body = ({ color }) =>
  <Global styles={css`
    body {
      align-items: center;
      background: ${color};
      color: ${Color(color).isDark() ? '#eee' : '#111'};
      display: flex;
      flex-direction: column;
      font-family: sans-serif;
      height: 100vh;
      justify-content: center;
      text-align: center;
      transition: background-color 250ms;
      width: 100vw;
    }
  `}/>

Body.propTypes = {
  color: PropTypes.string.isRequired,
}
