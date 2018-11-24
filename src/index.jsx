import 'normalize.css/normalize.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import './firebase/firebase'
import './styles/styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { logIn, logOut } from './actions/auth'
import { LoadingPage } from './components/LoadingPage'
import { AppRouter, history } from './routers/AppRouter'
import { configureStore } from './store/configure-store'
import { firebase } from './firebase/firebase'

const store = configureStore()
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.querySelector('#app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.querySelector('#app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(logIn(user.uid))
    renderApp()
    if (history.location.pathname === '/') {
      history.push('/dashboard')
    }
  } else {
    store.dispatch(logOut())
    renderApp()
    history.push('/')
  }
})

