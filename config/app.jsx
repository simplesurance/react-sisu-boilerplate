import devConfig from './app/dev'

export default function getConfig () {
  let config

  switch (process.env.APP_CONFIG) {
    default:
      config = devConfig
  }

  return config
}
