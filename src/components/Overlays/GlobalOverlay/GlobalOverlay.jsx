import React from 'react'

import * as styles from './style'

class GlobalOverlay extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isVisible: props.isVisible
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const {isVisible} = nextProps

    if (nextProps.hasOwnProperty('isVisible') && isVisible !== this.state.isVisible) { this.setState(() => ({isVisible})) }
  }

  onClose = () => {
    const {onClose, setGlobalOverlay} = this.props

    this.setState(() => ({isVisible: false}))
    if (onClose instanceof Function) onClose()
    if (setGlobalOverlay instanceof Function) setGlobalOverlay({isVisible: false})
  }

  onCTA = (data = {}) => {
    const {onAction} = this.props

    if (onAction && onAction instanceof Function) onAction(data)
    this.onClose()
  }

  getOverlayProps = () => {
    return {
      onClose: this.onClose,
      onCTA: this.onCTA,
      ...this.props

    }
  }

  render () {
    const {isVisible} = this.state

    if (!isVisible) return null

    return (
      <aside className={styles.OverlayLayout}>
        <div className={styles.OverlayBackground}>
          {this.renderOverlayContent()}
        </div>
      </aside>
    )
  }
}

export default GlobalOverlay
