import LoginPage from '../pages/LoginPage';

describe('Login Flow', () => {
  it('User should be logged into the system and verify the dashboard URL', () => {
    cy.fixture('testData').then((testData) => {
      cy.fixture('notesData').then((notesData) => {
        const login = new LoginPage();

        login.visit();
        login.clickLogin();
        login.fillEmail(testData.email);         // from testData.json
        login.fillPassword(notesData.password);  // from notesData.json
        login.clickloginButton();

        // Verify successful login
        cy.url().should('include', '/app');
        cy.log("Login is successful");
      });
    });
  });
});
