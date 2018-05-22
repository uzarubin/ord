/* eslint-disable */
import { fork, call, take, put } from 'redux-saga/effects'
import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  authenticateUser,
 } from '../../reducers/authentication/authActions'
import Api from '../../../utils/ApiConfig'

function* authorize(email, password) {
  console.log('I am inside login saga')
  try {
    yield put(authenticateUser( ))
    const token = yield call('foo', user, password)
    yield call( Api.storeItem, { token })
  } catch(error) {
    yield put({ type: 'LOGIN_ERROR', error })
  }
}

export function* loginFlow() {
  console.log('HEre I am')
  while (true) {

    const { email, password } = yield take(AUTHENTICATION_REQUEST)
    console.log("I got my email and password", email, password)
    yield fork(authorize, email, password)
    yield take(['LOGOUT', 'LOGIN_ERROR'])
    // yield call(Api.clearItem, 'token')
  }
}
