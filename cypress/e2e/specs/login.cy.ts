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

  it('should show error message for invalid type email', () => {
    loginPage.enterEmail('test.com');
    loginPage.getEmailErrorMessage('Please enter a valid email');
  });
});