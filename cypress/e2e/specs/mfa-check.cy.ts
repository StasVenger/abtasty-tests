import { loginPage } from "../page-objects/login-page";
import { mfaPage } from "../page-objects/mfa-page";

describe('2 step verifation', () => {
  it('should render to mfa page', () => {
    cy.visit(Cypress.env('baseUrl'));
    loginPage.checkPageTitle('Sign in to your account');
    loginPage.enterEmail(Cypress.env('loginEmail'));
    loginPage.enterPassword(Cypress.env('loginPassword'));
    loginPage.clickSignInButton();
    mfaPage.checkPageTitle('2-Step Verification');
  })
});