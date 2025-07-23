const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: 'https://reqres.in',
    setupNodeEvents(on, config) {
      
    },
    supportFile: false
  }
});
