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

class LoginPage {
  elements: LoginPageElements;

  constructor() {
    this.elements = {
      email: '[data-testid=emailInput] input#email',
      password: '[data-testid=passwordInput] input#password',
      signInButton: 'button#signInButton',
      forgotPassword: '[data-testid=resetPasswordLink] a',
      showPassword: '[data-testid=showIcon]',
      hidePassword: '[data-testid=hideIcon]',
      pageTitle: 'h1',
      ssoLoginButton: '[data-testid=ssoLoginButton]',
      emailErrorMessage: '[data-testid=emailErrorMessage]',
      loginErrorMessage: '[data-testid=loginErrorMessage]',
    };
  }

  enterEmail(email: string) {
    cy.get(this.elements.email).click();
    cy.get(this.elements.email).type(email);
    cy.get(this.elements.email).blur();
  }

  enterPassword(password: string) {
    cy.get(this.elements.password).click();
    cy.get(this.elements.password).type(password);
  }

  clickSignInButton() {
    cy.get(this.elements.signInButton).click();
  }

  clickForgotPassword() {
    cy.get(this.elements.forgotPassword).click();
  }

  clickShowPassword() {
    cy.get(this.elements.showPassword).click();
  }

  clickHidePassword() {
    cy.get(this.elements.hidePassword).click();
  }

  checkPageTitle(title: string) {
    cy.get(this.elements.pageTitle).should('have.text', title);
  }

  clickSSOLoginButton() {
    cy.get(this.elements.ssoLoginButton).click();
  }

  getEmailErrorMessage(errorMessage: string) {
    cy.get(this.elements.emailErrorMessage).should('have.text', errorMessage);
  }

  getLoginErrorMessage(errorMessage: string) {
    cy.get(this.elements.loginErrorMessage).should('have.text', errorMessage);
  }
}

export const loginPage: LoginPage = new LoginPage();