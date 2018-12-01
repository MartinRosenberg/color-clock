import Color from 'color'
import PropTypes from 'prop-types'
import React from 'react'

import { ClockContainer } from './Container'
import { ClockH1 } from './H1'

export const Clock = ({ color, time }) => (
  <ClockContainer color={Color(color).isDark() ? '#eee' : '#111'}>
    <ClockH1>{time}</ClockH1>
    <h2>{color}</h2>
  </ClockContainer>
)

Clock.propTypes = {
  color: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}
