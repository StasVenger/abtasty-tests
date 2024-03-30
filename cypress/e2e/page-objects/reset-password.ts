interface ResetPasswordElements {
  email: string;
  sendButton: string;
  returnLink: string;
  resendTitle: string;
}

class ResetPassword {
  elements: ResetPasswordElements;

  constructor() {
    this.elements = {
      email: '[data-testid=email] input#email',
      sendButton: 'button',
      returnLink: 'a[href="/login"]',
      resendTitle: 'h1',
    };
  }

  enterEmail(email: string) {
    cy.get(this.elements.email).click();
    cy.get(this.elements.email).type(email);
    cy.get(this.elements.email).blur();
  }

  clickSendButton() {
    cy.get(this.elements.sendButton).click();
  }

  clickReturnLink() {
    cy.get(this.elements.returnLink).click();
  }

  checkResendTitle(title: string) {
    cy.get(this.elements.resendTitle).should('have.text', title);
  }
}

export const resendPassword: ResetPassword = new ResetPassword();