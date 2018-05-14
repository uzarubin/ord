// @flow
// routerReducer.js
import { fromJS, Map } from 'immutable'

type RouterAction = {
  type: string,
  payload: Object,
}

type RouterState = Map<string, mixed>

const LOCATION_CHANGE: string = '@@router/LOCATION_CHANGE'

const initialState:RouterState = Map({ location: null })
// eslint-disable-next-line
export default (state: RouterState = initialState, { type, payload }: RouterAction): Map<string, mixed> => {
  if (type === LOCATION_CHANGE) {
    return state.set('location', fromJS(payload))
  }
  return state
}
