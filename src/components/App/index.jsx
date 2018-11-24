import moment from 'moment'
import React, { Component } from 'react'

const time = moment()
const defaultState = Object.freeze({
  time: time.valueOf(),
  color: time.format('#HHmmss'),
})

export class App extends Component {
  state = defaultState

  setClock = () => {
    const time = moment()
    this.setState(() => ({
      color: time.format('#HHmmss'),
      time: time.valueOf(),
    }))
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
        <h1>{moment(this.state.time).format('H:mm:ss')}</h1>
        <h2>{this.state.color}</h2>
      </div>
    )
  }
}
