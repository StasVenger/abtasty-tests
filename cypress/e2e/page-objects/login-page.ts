interface LoginPageElements {
  email: string;
  password: string;
  signInButton: string;
  forgotPassword: string;
  showPassword: string;
  hidePassword: string;
  pageTitle: string;
  ssoLoginButton: string;
  emailErrorMessage: string;
  loginErrorMessage: string;
}

export default class LoginPage {
  elements: LoginPageElements;

  constructor() {
    this.elements = {
      email: '[data-testi=emailInput] input#email',
      password: '[data-testid=passwordInput] input#password',
      signInButton: '[#signInButton]',
      forgotPassword: '[data-testid=resetPasswordlink]',
      showPassword: '[data-testid=showIcon]',
      hidePassword: '[data-testid=hideIcon]',
      pageTitle: 'h1',
      ssoLoginButton: '[data-testid=ssoLoginButton]',
      emailErrorMessage: '[data-testid=emailErrorMessage]',
      loginErrorMessage: '[data-testid=loginErrorMessage]',
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

  async clickShowPassword() {
    cy.get(this.elements.showPassword).click();
  }

  async clickHidePassword() {
    cy.get(this.elements.hidePassword).click();
  }

  async getPageTitle(title: string) {
    cy.get(this.elements.pageTitle).should('have.text', title);
  }

  async clickSSOLoginButton() {
    cy.get(this.elements.ssoLoginButton).click();
  }

  async getEmailErrorMessage(errorMessage: string) {
    cy.get(this.elements.emailErrorMessage).should('have.text', errorMessage);
  }

  async getLoginErrorMessage(errorMessage: string) {
    cy.get(this.elements.loginErrorMessage).should('have.text', errorMessage);
  }
}