// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });



// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:3000',
//     specPattern: 'cypress/e2e/**/*.cy.js',
//     supportFile: 'cypress/support/e2e.js',
//     video: false,
//     retries: {
//       runMode: 2,
//       openMode: 0,
//     },
//     env: {
//       testUserEmail: 'testuser@example.com',
//       testUserPassword: 'Password123!',
//     },
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//   },
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     reportDir: 'cypress/reports',
//     overwrite: false,
//     html: true,
//     json: true,
//   },
// });


const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: [
      'cypress/e2e/signup.cy.js',
      'cypress/e2e/Login.cy.js',
      'cypress/e2e/notes.cy.js',
    ],
  },
});
