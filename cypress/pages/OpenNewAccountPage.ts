export class OpenNewAccountPage {
  verifyNewAccountPage() {
    cy.contains('Open New Account');
    return this;
  }

  selectSavingsAccountType() {
    cy.get('#type').should('be.visible');
    cy.get('#type').select('SAVINGS');
    return this;
  }

  verifyAccountOpenedAndGetAccountNumber() {
    cy.contains('Account Opened!').should('be.visible');
    return cy.get("[id='newAccountId']").invoke('text');
  }

  async clickSubmitButton() {
    cy.get('input[type="submit"]').should('be.visible');
    cy.get('input[type="submit"]').click();
    return this;
  }
}
