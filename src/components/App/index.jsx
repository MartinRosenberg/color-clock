import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'

import { getNewState } from './utils'

export class App extends Component {
  state = getNewState()

  setClock = () => {
    this.setState(() => getNewState())
  }

  componentDidMount () {
    this.setClock()
    this.tick = setInterval(this.setClock, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.tick)
  }

  render () {
    return (
      <Fragment>
        <Helmet>
          <body style={`background: ${this.state.color}`}/>
        </Helmet>
        <div style={{
          alignItems: 'center',
          color: '#eeeeee',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
        }}>
          <h1>{this.state.time}</h1>
          <h2>{this.state.color}</h2>
        </div>
      </Fragment>
    )
  }
}
