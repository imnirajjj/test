import SignUpPage from '../pages/signupPage';
import { faker } from '@faker-js/faker';

describe('Signup Flow', () => {
  it('User should sign up into the system', () => {
    cy.fixture('notesData').then((data) => {
      const signup = new SignUpPage();
      const randomEmail = faker.internet.email();

      cy.writeFile('cypress/fixtures/testData.json', {
        email: randomEmail,
        // password: data.password
      });

      signup.visit();
      signup.clickRegister();
      signup.fillEmail(randomEmail);
      signup.fillPassword(data.password);
      signup.fillName(data.name);
      signup.fillConfirmPassword(data.confirmpassword);
      signup.submit();
      signup.successMessage();
      signup.confirmButton();
    });
  });
});
