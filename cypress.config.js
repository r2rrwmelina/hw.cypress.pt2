const {defineConfig} = require("cypress");

module.exports = defineConfig({
  projectId: "19m7j8",
  e2e: {
    baseUrl: "https://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
