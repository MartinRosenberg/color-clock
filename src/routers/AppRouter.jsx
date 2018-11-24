import createHistory from 'history/createBrowserHistory'
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { DashboardPage } from '../components/DashboardPage'
import { LoginPage } from '../components/LoginPage'
import { NotFoundPage } from '../components/NotFound'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const history = createHistory()

export const AppRouter = () =>
  <Router history={history}>
    <Switch>
      <PublicRoute exact path="/" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
