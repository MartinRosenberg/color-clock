import moment from 'moment'
import React, { Component } from 'react'

const getNewState = () => {
  const time = moment()
  return {
    color: time.format('#HHmmss'),
    time: time.format('H:mm:ss'),
  }
}

export class App extends Component {
  state = getNewState()

  setClock = () => {
    this.setState(() => getNewState())
    document.body.setAttribute('style', `background: ${this.state.color}`)
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
    )
  }
}
