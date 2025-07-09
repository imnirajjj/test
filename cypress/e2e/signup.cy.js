import SignUpPage from '../pages/signupPage';

describe('Signup Flow', () => {
    it('should sign up a new user', () => {
        // chnage the email address every time as you will run signup
        cy.fixture('notesData').then((data) => {
            const signup = new SignUpPage();
            signup.visit();
            signup.clickRegister();
            signup.fillEmail(data.email);
            signup.fillPassword(data.password);
            signup.fillName(data.name);
            signup.fillConfirmPassword(data.confirmpassword);
            signup.submit();
            signup.successMessage();
            signup.confirmButton();

        });
    });
});
