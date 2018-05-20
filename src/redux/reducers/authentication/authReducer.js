/* authReducer.js
 * @flow
*/
import type { RecordFactory, RecordOf } from 'immutable'
import { Record } from 'immutable'
import type { Action } from './authActions'

import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
} from './authActions'

type AuthModel = {
  isFetching: boolean,
  isAuthenticated: boolean,
  authenticationError: boolean,
  errorMessage: string,
}

type State = RecordOf<AuthModel>

export const makeInitialState: RecordFactory<AuthModel> = Record({
  isFetching: false,
  isAuthenticated: false,
  authenticationError: false,
  errorMessage: '',
})


export default (state: State = makeInitialState(), action: Action): State => {
  switch (action.type) {
    case AUTHENTICATION_REQUEST:
      return state.set('isFetching', true)
    case AUTHENTICATION_SUCCESS:
      return state.set('isFetching', false).set('isAuthenticated', true)
    case AUTHENTICATION_FAILED:
      return state.set('isFetching', false)
        .set('authenticationError', true)
        // $FlowFixMe: Can't fix this right now.
        .set('errorMessage', action.error.message)
    default:
      return state
  }
}
