import React, { Component, Fragment } from 'react'

import { Body } from '../../components/Body'
import { Clock } from '../../components/Clock'
import { ModeButtons } from '../../components/ModeButtons'
import { defaultMode } from './constants'
import { getColorAndTime } from './utils'
import { Content } from '../../components/Content'

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
        <Content>
          <Clock color={color} time={time}/>
          <ModeButtons handleSetMode={this.handleSetMode}/>
        </Content>
      </Fragment>
    )
  }
}
