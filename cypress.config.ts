import { defineConfig } from "cypress";
require('dotenv').config()

module.exports = defineConfig({
  projectId: '',
  pageLoadTimeout: 20000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      loginEmail: process.env.LOGIN,
      loginPassword: process.env.PASSWORD
    }
  },
});
