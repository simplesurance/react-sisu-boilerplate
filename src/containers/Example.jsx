import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'

import Example from '../components/Example/Example'
import {setUsername} from '../actions/state'

function mapStateToProps (state) {
  const username = state.getIn(['exampleReducer', 'username'], '')

  return {
    username
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setUsername: (value) => dispatch(setUsername(value))
  }
}

const ExampleContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(translate(['common'])(Example)))

export default ExampleContainer
