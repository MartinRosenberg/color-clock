import 'normalize.css/normalize.css'

import { Redirect, Router } from '@reach/router'
import React from 'react'
import { render } from 'react-dom'

import { App } from './components/App'

const mountPoint = document.querySelector('#app')
const app = (
  <Router>
    <App path='/'/>
    <Redirect from='/*' to='/'/>
  </Router>
)

render(app, mountPoint)
