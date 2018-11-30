import PropTypes from 'prop-types'
import React from 'react'

import { Modes } from '../../containers/App/constants'
import { Button } from './Button'

export const ModeButtons = ({ handleSetMode }) =>
  <div>
    {Object.values(Modes).map((mode) =>
      <Button
        key={mode.value}
        onClick={() => handleSetMode(mode.value)}
      >
        {mode.name}
      </Button>
    )}
  </div>

ModeButtons.propTypes = {
  handleSetMode: PropTypes.func.isRequired
}
