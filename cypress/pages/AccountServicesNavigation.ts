export class AccountServicesNavigation {
  clickOpenNewAccount() {
    cy.get('#leftPanel > ul > :nth-child(1) > a').click();
    return this;
  }

  clickAccountsOverview() {
    cy.get('#leftPanel > ul > :nth-child(2) > a').click();
    return this;
  }

  clickTransferFunds() {
    cy.get('a[href*="parabank/transfer.htm"]').click();
    return this;
  }

  clickBillPay() {
    cy.get('a[href*="parabank/billpay.htm"]').click();
    return this;
  }

  logout() {
    cy.get('a[href*="/parabank/logout.htm"]').click();
    return this;
  }
}
