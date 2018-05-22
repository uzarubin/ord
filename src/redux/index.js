import { combineReducers } from 'redux-immutable'

import router, { auth } from './reducers'

export default combineReducers({
  router,
  auth,
})
