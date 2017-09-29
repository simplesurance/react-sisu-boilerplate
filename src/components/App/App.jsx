import React from 'react'

import {Spinner} from '../common'
import GlobalOverlay from '../Overlays/GlobalOverlay/GlobalOverlay'
import * as styles from './style'
import LocalStorage from '../../utils/LocalStorage'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    // Simulate loading
    setTimeout(() => {
      this.setState(() => ({ isLoading: false }))
    }, 3000)
  }

  renderOverlays = () => {
    return <GlobalOverlay {...this.props.globalOverlay} setGlobalOverlay={this.props.setGlobalOverlay} />
  }

  render () {
    const {children} = this.props
    const {isLoading} = this.state

    return (
      <div className={styles.AppContainer}>
        <Spinner isLoading={isLoading} />
        {this.renderOverlays()}
        {children}
      </div>
    )
  }
}

export default App
