import PropTypes from 'prop-types'
import React from 'react'

import { Modes } from '../constants'
import { ModeButton } from './Button'

export const Mode = ({ handleSetMode }) =>
  <div>
    {Object.values(Modes).map((mode) =>
      <ModeButton
        key={mode.value}
        onClick={() => handleSetMode(mode.value)}
      >
        {mode.name}
      </ModeButton>
    )}
  </div>

Mode.propTypes = {
  handleSetMode: PropTypes.func.isRequired
}
