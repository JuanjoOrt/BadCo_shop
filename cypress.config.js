const { defineConfig } = require('cypress')
const env = require('./src/env.json')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  },
  viewportWidth: 1800,
  viewportHeight: 969,
  watchForFileChanges: false,
  env: {
    googleClientId: env.cypress.REACT_APP_GOOGLE_CLIENTID,
    googleClientSecret: env.cypress.REACT_APP_GOOGLE_CLIENT_SECRET,
    googleRefreshToken: env.cypress.GOOGLE_REFRESH_TOKEN
  }
})
