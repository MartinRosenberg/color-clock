import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = () => createStore(
  combineReducers({
    auth: authReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
)
