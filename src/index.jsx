import 'normalize.css/normalize.css'

import { Grommet, grommet } from 'grommet'
import { Redirect, Router } from '@reach/router'
import React from 'react'
import { render } from 'react-dom'

import { App } from './components/App'

const mountPoint = document.querySelector('#app')
const app = (
  <Grommet theme={grommet}>
    <Router>
      <App path="/"/>
      <Redirect from="/*" to="/"/>
    </Router>
  </Grommet>
)

render(app, mountPoint)
