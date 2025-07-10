class SignUpPage {
  url = 'https://practice.expandtesting.com/notes/app';
  registerPage = '//a[@data-testid="open-register-view" and text() = "Create an account"]';
  emailInput = '//input[@id = "email"]';
  passwordInput = '//input[@id = "password"]';
  nameInput = '//input[@id = "name"]';
  confirmPasswordInput = '//input[@id = "confirmPassword"]';
  registerButton = '//button[@type="submit"]';
  successMessageLabel = '//b[text()="User account created successfully"]';
  confirmationButton = '//a[text()="Click here to Log In"]';

  visit() {
    cy.visit(this.url);
  }

  clickRegister() {
    cy.xpath(this.registerPage).click();
  }

  fillEmail(email) {
    cy.xpath(this.emailInput).type(email);
  }

  fillPassword(password) {
    cy.xpath(this.passwordInput).type(password);
  }

  fillName(name) {
    cy.xpath(this.nameInput).type(name);
  }

  fillConfirmPassword(confirmPassword) {
    cy.xpath(this.confirmPasswordInput).type(confirmPassword);
  }

  submit() {
    cy.xpath(this.registerButton).click();
  }

  successMessage() {
    cy.xpath(this.successMessageLabel).should('be.visible');
  }

  confirmButton() {
    cy.xpath(this.confirmationButton).should('be.visible').click();
  }
}

export default SignUpPage;
