import 'normalize.css/normalize.css'

import createHistory from 'history/createBrowserHistory'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, Switch } from 'react-router-dom'

import { NotFoundPage } from './components/NotFoundPage'
import { configureStore } from './configure-store'

const history = createHistory()
const store = configureStore()
const mountPoint = document.querySelector('#app')
const app = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  </Provider>
)

render(app, mountPoint)
