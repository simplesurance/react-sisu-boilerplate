import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'

i18n
  .use(XHR)
  .init({
    fallbackLng: 'en',

    react: {
      wait: true, // globally set to wait for loaded translations in translate hoc
      exposeNamespace: true // exposes namespace on data-i18next-options to be used in eg. localize-editor
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: false,

    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json'
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
