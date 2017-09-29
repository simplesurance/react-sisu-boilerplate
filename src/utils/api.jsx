import $ from 'superagent'

import getConfig from '../../config/app'
import LocalStorage from './LocalStorage'

const config = getConfig()

const DEFAULT_USER_DATA = {
  userID: undefined
}

class Api {
  constructor () {
    const ls = new LocalStorage()
    const userData = ls.getItem('userData')

    this.userID = userData ? userData.userID : DEFAULT_USER_DATA.userID
  }

  login (data) {
    return this.request('post', `${config.base_url}/login`, data)
  }

  request (method, url, opt = {}) {
    return new Promise((resolve, reject) => {
      const request = $[method](url).set('Accept', 'application/json')

      const {data} = opt
      if (data && Object.keys(data).length > 0) {
        request.type('json').send(data)
      }

      request
        .then(response => resolve(response.body))
        .catch(reject)
    })
  }
}

export default Api
