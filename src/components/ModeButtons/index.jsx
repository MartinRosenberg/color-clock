import PropTypes from 'prop-types'
import React from 'react'

import { Modes } from '../../containers/App/constants'
import { style } from './constants'

export const ModeButtons = ({ handleSetMode }) =>
  <div>
    {Object.values(Modes).map((mode) =>
      <button
        key={mode.value}
        onClick={() => handleSetMode(mode.value)}
        style={style}
      >
        {mode.name}
      </button>
    )}
  </div>

ModeButtons.propTypes = {
  handleSetMode: PropTypes.func.isRequired
}
