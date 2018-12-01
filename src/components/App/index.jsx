import React, { Component, Fragment } from 'react'

import { Body } from './Body'
import { Clock } from './Clock'
import { defaultMode } from './constants'
import { ModeButtons } from './ModeButtons'
import { getColorAndTime } from './utils'

export class App extends Component {
  state = {
    ...getColorAndTime(defaultMode),
    mode: defaultMode,
    ticker: null,
  }

  handleSetMode = (mode) => {
    this.setState(() => ({ ...getColorAndTime(mode), mode }))
  }

  componentDidMount () {
    const tick = () => this.setState(() => getColorAndTime(this.state.mode))
    this.setState(() => ({ ticker: setInterval(tick, 1000) }))
  }

  componentWillUnmount () {
    clearInterval(this.state.ticker)
  }

  render () {
    const { color, time } = this.state
    return (
      <Fragment>
        <Body color={color}/>
        <Clock color={color} time={time}/>
        <ModeButtons handleSetMode={this.handleSetMode}/>
      </Fragment>
    )
  }
}
