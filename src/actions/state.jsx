import {actionTypes} from '../constants'

export function setLoading (bool) {
  return {
    type: actionTypes.SET_LOADING_FLAG,
    payload: bool
  }
}

export function setUsername (value) {
  return {
    type: actionTypes.SET_USER_NAME,
    payload: value
  }
}
