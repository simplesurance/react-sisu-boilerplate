import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import App from '../components/App/App'
import {setUserData, setIsAuthenticated, setGlobalOverlay, setServerMsg} from '../actions/state'

function mapStateToProps (state) {
  const isAuthenticated = state.getIn(['globalReducer', 'isAuthenticated'], false)
  const isLoading = state.getIn(['globalReducer', 'isLoading'], false)
  const globalOverlay = state.getIn(['globalReducer', 'globalOverlay'], false)
  const serverMsg = state.getIn(['globalReducer', 'serverMsg'], false)

  return {
    isAuthenticated,
    isLoading,
    globalOverlay,
    serverMsg
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setUserData: (data) => dispatch(setUserData(data)),
    setIsAuthenticated: (bool) => dispatch(setIsAuthenticated(bool)),
    setGlobalOverlay: obj => dispatch(setGlobalOverlay(obj)),
    setServerMsg: obj => dispatch(setServerMsg(obj))
  }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default withRouter(AppContainer)
