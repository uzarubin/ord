/* authActions.js
 * @flow
*/
import { Map } from 'immutable'

const namespace = 'ord/redux/authentication/'

/* Grouping actions and their texts */
export const AUTHENTICATION_REQUEST = `${namespace}AUTHENTICATION_REQUEST`
export const AUTHENTICATION_SUCCESS = `${namespace}AUTHENTICATION_SUCCESS`
export const AUTHENTICATION_FAILED = `${namespace}AUTHENTICATION_FAILED`

type AuthenticationData = {
  email: string,
  password: string,
}
type AUTH_ERROR = {
  message: string,
}

type AUTHENTICATION_REQUEST_ACTION = {
  type: typeof AUTHENTICATION_REQUEST,
  payload: Object,
}

type AUTHENTICATION_SUCCESS_ACTION = {
  type: typeof AUTHENTICATION_SUCCESS,
}

type AUTHENTICATION_FAILED_ACTION = {
  type: typeof AUTHENTICATION_FAILED,
  error: AUTH_ERROR,
}

// eslint-disable-next-line
export type Action = AUTHENTICATION_FAILED_ACTION | AUTHENTICATION_REQUEST_ACTION | AUTHENTICATION_SUCCESS_ACTION


// eslint-disable-next-line
export const authenticateUser = (payload: AuthenticationData): AUTHENTICATION_REQUEST_ACTION => (
  {
    type: AUTHENTICATION_REQUEST,
    payload: Map(payload),
  }
)

export const authenticationSuccess = (): AUTHENTICATION_SUCCESS_ACTION => (
  {
    type: AUTHENTICATION_SUCCESS,
  }
)

export const authenticationFailed = (error: AUTH_ERROR): AUTHENTICATION_FAILED_ACTION => (
  {
    type: AUTHENTICATION_FAILED,
    error,
  }
)
