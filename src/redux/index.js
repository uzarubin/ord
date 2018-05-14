import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'

import router from './router_reducer'

export default combineReducers({
  router,
  form,
})
