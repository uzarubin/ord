import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'

import router from './reducers'

export default combineReducers({
  router,
  form,
})
