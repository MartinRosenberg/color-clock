import { combineReducers, compose, createStore } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = () => createStore(
  combineReducers({}),
  composeEnhancers()
)
