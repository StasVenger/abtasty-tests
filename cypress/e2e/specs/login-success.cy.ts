import { loginPage } from '../page-objects/login-page';

describe('Login', () => {
  it('should login successfully', () => {
    cy.visit(Cypress.env('baseUrl'));
    loginPage.checkPageTitle('Sign in to your account');
    loginPage.enterEmail('test@test.com');
    loginPage.enterPassword('password');
    loginPage.clickSignInButton();
  });
});