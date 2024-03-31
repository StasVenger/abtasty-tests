interface SSOPageElements {
  email: string;
  signInButton: string;
  returnButton: string;
  ssoTitle: string;
}

class SSOPage {
  elements: SSOPageElements;

  constructor() {
    this.elements = {
      email: 'input#email',
      signInButton: 'button',
      returnButton: 'a[href="/login"]',
      ssoTitle: 'h1'
    };
  }

  enterEmail(email: string) {
    cy.get(this.elements.email).click();
    cy.get(this.elements.email).type(email, { delay: 200 });
    cy.get(this.elements.email).blur();
  }

  clickSignInButton() {
    cy.get(this.elements.signInButton).click();
  }

  clickReturnButton() {
    cy.get(this.elements.returnButton).click();
  }

  checkSSOTitle(title: string) {
    cy.get(this.elements.ssoTitle).should('have.text', title);
  }
}

export const ssoPage: SSOPage = new SSOPage();