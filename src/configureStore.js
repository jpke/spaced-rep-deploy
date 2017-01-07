import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Reducer, initialState } from './reducers.js'

// enable logger for debugging store
// const logger = createLogger()
// const middleware = [logger, thunk];

const middleware = [thunk];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(
  Reducer,
  initialState,
  enhancers
)
export default store
