import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {I18nextProvider} from 'react-i18next'
import i18n from './i18n'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import {routes} from './constants'
import coreReducer from './reducers'
import App from './containers/App'
import Example from './containers/Example'

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJS()
})

const store = compose(applyMiddleware(thunk, loggerMiddleware))(createStore)(coreReducer)

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router>
        <App>
          <Switch>
            <Route exact path={routes.example} component={Example} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'))
