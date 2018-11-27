import 'normalize.css/normalize.css'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { App } from './containers/App'

const mountPoint = document.querySelector('#app')
const app = (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={App}/>
      <Route>
        <Redirect to={'/'}/>
      </Route>
    </Switch>
  </BrowserRouter>
)

render(app, mountPoint)
