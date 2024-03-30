interface LoginPageElements {
  email: string;
  password: string;
  signInButton: string;
  forgotPassword: string;
}

export default class LoginPage {
  elements: LoginPageElements;

  constructor() {
    this.elements = {
      email: '[data-testi=emailInput] input#email',
      password: '[data-testid=passwordInput] input#password',
      signInButton: '[#signInButton]',
      forgotPassword: '[data-testid=resetPasswordlink]',
    };
  }

  async enterEmail(email: string) {
    cy.get(this.elements.email).type(email);
  }

  async enterPassword(password: string) {
    cy.get(this.elements.password).type(password);
  }

  async clickSignInButton() {
    cy.get(this.elements.signInButton).click();
  }

  async clickForgotPassword() {
    cy.get(this.elements.forgotPassword).click();
  }
}