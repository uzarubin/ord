/*
  @flow
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { Map } from 'immutable'

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createMemoryHistory'

import createSagaMiddleware from 'redux-saga'

// DEBUG TOOLS
import { createLogger } from 'redux-logger'
import { devToolsEnhancer } from 'redux-devtools-extension'

import rootReducer from './redux'
import rootSaga from './redux/sagas'

export const history = createHistory()

const initialState = Map({})
const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, routerMiddleware(history)]

/* eslint-disable */
if (__DEV__) {
  middleware.push(
    createLogger({
      stateTransformer: (state: Object) => state.toJS(),
    }),
  )
  enhancers.push(devToolsEnhancer())
}
/* eslint-enable */
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(rootReducer, initialState, composedEnhancers)

sagaMiddleware.run(rootSaga)

export default store
