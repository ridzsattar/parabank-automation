export class TransferFundsPage {
  verifyTransferFundsPage() {
    cy.get('[ng-if="showForm"] > .title').should('be.visible');
    cy.get('[ng-if="showForm"] > .title').as('Transfer Funds');
    return this;
  }

  enterAmount(value: string) {
    cy.get('#amount').clear();
    cy.get('#amount').type(value);
    return this;
  }

  selectNewlyCreatedAccount(accountNumber: any) {
    cy.log(accountNumber);
    cy.get('#fromAccountId').select(accountNumber);
    return this;
  }

  clickSubmitbutton() {
    cy.get('input[type="submit"]').click();
    return this;
  }
}
