import React, { Component, Fragment } from 'react'

import { getColorAndFormattedTime } from './utils'
import { Body } from '../../components/Body'
import { Clock } from '../../components/Clock'

export class App extends Component {
  state = {
    ...getColorAndFormattedTime(),
    ticker: null
  }

  tick = () => {
    this.setState(() => getColorAndFormattedTime())
  }

  componentDidMount () {
    this.setState(() => ({ ticker: setInterval(this.tick, 1000) }))
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
      </Fragment>
    )
  }
}
