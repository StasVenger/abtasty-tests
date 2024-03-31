import { loginPage } from '../page-objects/login-page';

describe('Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('should login successfully', () => {
    loginPage.checkPageTitle('Sign in to your account');
    loginPage.enterEmail('test@test.com');
    loginPage.enterPassword('password');
    loginPage.clickSignInButton();
  });

  it('should show error if password or email is invalid', () => {
    loginPage.enterEmail('test@t.com');
    loginPage.enterPassword('password33');
    loginPage.clickSignInButton();
    loginPage.getLoginErrorMessage('Please enter a valid email or password');
  });

  it('should show error message for invalid type email', () => {
    loginPage.enterEmail('test.com');
    loginPage.getEmailErrorMessage('Please enter a valid email');
  });

  it('should show and hide password', () => {
    loginPage.enterPassword('password');
    loginPage.clickShowPassword();
    loginPage.clickHidePassword();
  });
});