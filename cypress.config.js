const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "g1a8tt",
  e2e: {
    setupNodeEvents(on, config) {
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
      timestamp: 'mmddyyyy_HHMMss',
    },
  },
});
