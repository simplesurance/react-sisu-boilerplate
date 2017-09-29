import { fromJS } from 'immutable'

import {actionTypes} from '../../constants'

export default function ExampleReducer (_state, action) {
  const state = _state || fromJS({})

  switch (action.type) {
    case actionTypes.SET_USER_NAME:
      return state.setIn(['username'], action.payload)
      break
    default:
      return state
  }
}
