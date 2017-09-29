import React from 'react'

import * as styles from './style'
import getConfig from '../../../../config/app'

const config = getConfig()

const Spinner = ({isLoading}) => {
  if (!isLoading) return null

  return (
    <div className={styles.Spinner}>
      <img src={`${config.garden_url}/assets/images/ico-loading.gif`} alt='spinner' />
    </div>
  )
}

export {Spinner}
