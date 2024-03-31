import { loginPage } from "../page-objects/login-page";
import { ssoPage } from "../page-objects/sso-page";

describe('SSO', () => {
  it('should return to the login page', () => {
    cy.visit(Cypress.env('baseUrl'));
    loginPage.clickSSOLoginButton();
    ssoPage.checkSSOTitle('Sign in with SSO');
    ssoPage.clickReturnButton();
    loginPage.checkPageTitle('Sign in to your account');
  })
})