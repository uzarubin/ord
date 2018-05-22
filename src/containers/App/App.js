/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-native'

import store, { history } from '../../store'

// import Welcome from './Welcome'
import LoginForm from '../Login/Login'
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu',
// })

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={LoginForm} />
    </ConnectedRouter>
  </Provider>
)
