// /* eslint-disable */
// import { fork, call, take, put } from 'redux-saga/effects'
// import { authenticateUser } from '../../reducers/authentication/authActions'
// // import Api from '../../utils/ApiConfig'
//
// function* authorize(user, password) {
//   try {
//     yield put(authenticateUser( ))
//     const token = yield call('foo', user, password)
//     yield call( Api.storeItem, { token })
//   } catch(error) {
//     yield put({ type: 'LOGIN_ERROR', error })
//   }
// }
//
// function* loginFlow() {
//   while (true) {
//     const { user, password } = yield take('LOGIN_REQUEST')
//     yield fork(authorize, user, password)
//     yield take(['LOGOUT', 'LOGIN_ERROR'])
//     yield call(Api.clearItem, 'token')
//   }
// }
