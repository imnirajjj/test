class LoginPage {
    url = 'https://practice.expandtesting.com/notes/app';
    LoginPage = '//a[text() = "Login"]';
    emailInput = '//input[@id = "email"]';
    passwordInput = '//input[@id = "password"]';
    loginButton = '//button[text()="Login"]';

    visit() {
        cy.visit(this.url);
    }

    clickLogin() {
        cy.xpath(this.LoginPage).click();
    }

    fillEmail(email) {
        cy.xpath(this.emailInput).type(email);
    }

    fillPassword(password) {
        cy.xpath(this.passwordInput).type(password);
    }

    clickloginButton() {
        cy.xpath(this.loginButton).click();
    }
}

export default LoginPage;
