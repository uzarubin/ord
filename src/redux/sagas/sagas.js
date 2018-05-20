/*
@flow
*/
import type { Saga } from 'redux-saga'
import { all, call } from 'redux-saga/effects'
// import Api from '../../utils/ApiConfig'

/* eslint-disable */
export function* helloSaga(): Saga<void>{
  yield call(console.log, 'Hello Sagas!')
}
/* eslint-enable */
export default function* rootSaga(): Saga<void> {
  yield all([helloSaga()])
}
