/*
@flow
*/
import type { Saga } from 'redux-saga'
import { all } from 'redux-saga/effects'
// import Api from '../../utils/ApiConfig'
import { loginFlow } from './authentication/authentication_saga'

export default function* rootSaga(): Saga<void> {
  yield all([loginFlow()])
}
