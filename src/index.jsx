import 'normalize.css/normalize.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Page } from './components/Page'
import { configureStore } from './configure-store'

const store = configureStore()
const mountPoint = document.querySelector('#app')
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Page}/>
        <Route>
          <Redirect to={'/'}/>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
)

render(app, mountPoint)
