import Api from '../utils/api'
import LocalStorage from '../utils/LocalStorage'
import * as stateActions from './state'

const ls = new LocalStorage()
const api = new Api()

function handleServerError (e, dispatch) {
  if (e && e.response && e.response.text) {
    dispatch(stateActions.setServerMsg(JSON.parse(e.response.text)))
  }
  dispatch(stateActions.setLoading(false))
}

// Just an example of how api functions can be created - doesn' do anything in this app
export function userLogin (data) {
  return (dispatch) => {
    dispatch(stateActions.setLoading(true))

    api.login(data)
      .then(resp => {
        if (resp) {
          dispatch(stateActions.setUserData(resp))
          dispatch(stateActions.setIsAuthenticated(true))
          dispatch(stateActions.setServerMsg({message: 'You were successfully logged in'}))
          ls.setItem('userData', resp)
        }
        dispatch(stateActions.setLoading(false))
      })
      .catch((e) => {
        handleServerError(e, dispatch)
      })
  }
}
