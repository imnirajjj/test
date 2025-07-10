// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-xpath';
import LoginPage from '../pages/LoginPage';


// cypress/support/commands.js
// commands.js

Cypress.Commands.add('loginWithFixture', () => {
  cy.fixture('testData').then((testData) => {
    cy.fixture('notesData').then((notesData) => {
      const login = new LoginPage();
      login.visit();
      login.clickLogin();
      login.fillEmail(testData.email);          // dynamic email
      login.fillPassword(notesData.password);   // static password
      login.clickloginButton();
      cy.url().should('include', '/app');
    });
  });
});

