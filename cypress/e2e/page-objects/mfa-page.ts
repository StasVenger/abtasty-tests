interface MfaPageElements {
  mfaTitle: string;
  codeInput: string;
  dontAskCheckbox: string;
  resendCode: string;
  useAnotheMethod: string;
  returnToLogin: string;
  verifyButton: string;
  errorMessage: string;
}

class MfaPage {
  elements: MfaPageElements;

  constructor() {
    this.elements = {
      mfaTitle: 'h1',
      codeInput: 'input#mfaCode',
      dontAskCheckbox: 'input[name="remember"]',
      resendCode: '[data-testid=resendButton]',
      useAnotheMethod: '[data-testid=tryAnotherMfaButton]',
      returnToLogin: 'a[href="/login"]',
      verifyButton: '[data-testid=verifyButton]',
      errorMessage: '[data-testid=mfaCodeErrorMessage]',
    };
  }

  enterCode(code: string) {
    cy.get(this.elements.codeInput).click();
    cy.get(this.elements.codeInput).type(code, { delay: 200 });
  }

  clickDontAskCheckbox() {
    cy.get(this.elements.dontAskCheckbox).should('be.visible');
    cy.get(this.elements.dontAskCheckbox).click();
  }

  clickResendCode() {
    cy.get(this.elements.resendCode).should('be.visible');
    cy.get(this.elements.resendCode).click();
  }

  clickUseAnotherMethod() {
    cy.get(this.elements.useAnotheMethod).should('be.visible');
    cy.get(this.elements.useAnotheMethod).click();
  }

  clickReturnToLogin() {
    cy.get(this.elements.returnToLogin).should('be.visible');
    cy.get(this.elements.returnToLogin).click();
  }

  clickVerifyButton() {
    cy.get(this.elements.verifyButton).should('be.visible');
    cy.get(this.elements.verifyButton).click();
  }

  checkErrorMessage(error: string) {
    cy.get(this.elements.errorMessage).should('have.text', error);
  }

  checkPageTitle(title: string) {
    cy.get(this.elements.mfaTitle).should('have.text', title);
  }
}

export const mfaPage: MfaPage = new MfaPage();