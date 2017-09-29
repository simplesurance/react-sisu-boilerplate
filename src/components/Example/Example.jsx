import React from 'react'
// This import only works when this project is in the sisu repo
// import { Button, Input } from 'components'
import * as styles from './style'
import {Spinner} from '../common'

class Example extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      nameInput: ''
    }
  }

  onInputChange = (e) => {
    const value = e.target.value

    this.setState(() => ({
      nameInput: value
    }))
  }

  onSubmit = () => {
    const {setUsername} = this.props

    setUsername instanceof Function && setUsername(this.state.nameInput)
  }

  render () {
    const {t, username} = this.props
    const {nameInput} = this.state

    return (
      <article>
        <div className={styles.ExampleContainer}>
          <h1>
            {t('common:example_app_header', {username: username || '[enter name below]'})}
          </h1>
          <div>
            {t('common:example_app_components_hint')}
          </div>
          <div className={styles.ExampleForm}>
            <label>{t('common:example_name_label')}</label>
            <input className={styles.BaseInput} onChange={this.onInputChange} value={nameInput} />
            <button className={styles.BasicButton} onClick={this.onSubmit}>{t('common:example_submit_btn')}</button>
          </div>
        </div>
      </article>
    )
  }
}

export default Example
