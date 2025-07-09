import LoginPage from '../pages/LoginPage';

describe('Login Flow', () => {
    it('User should be loggined into the system and verify the dashboard URL', () => {
        // Load test data from fixture
        cy.fixture('notesData').then((data) => {
            const login = new LoginPage();
            login.visit();
            login.clickLogin();
            login.fillEmail(data.email);
            login.fillPassword(data.password);
            login.clickloginButton();

            // After login is successful, verify the URL
            cy.url().should('include', '/app');
            cy.log("Login is successful"); // Log success in the console
        });
    });
});
