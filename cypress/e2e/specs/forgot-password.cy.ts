import { loginPage } from '../page-objects/login-page';
import { resendPassword } from '../page-objects/reset-password';

describe('Forgot password', () => {
  it('should return to the login page', () => {
    cy.visit(Cypress.env('baseUrl'));
    loginPage.clickForgotPassword();
    resendPassword.checkResendTitle('Reset your password');
    resendPassword.clickReturnLink();
    loginPage.checkPageTitle('Sign in to your account');
  });
});