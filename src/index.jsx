import 'normalize.css/normalize.css'

import createHistory from 'history/createBrowserHistory'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import { NotFoundPage } from './components/NotFound'
import { configureStore } from './store/configure-store'

const history = createHistory()
const store = configureStore()
const app = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(app, document.querySelector('#app'))
