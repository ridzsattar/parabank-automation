export class PayBillPage {
  enterPayeeDetailsAndPay(account: any) {
    cy.get(':nth-child(1) > [width="20%"] > .input').as('firstName');
    cy.get(':nth-child(2) > [width="20%"] > .input').as('address');
    cy.get(':nth-child(3) > [width="20%"] > .input').as('city');
    cy.get(':nth-child(4) > [width="20%"] > .input').as('state');
    cy.get(':nth-child(5) > [width="20%"] > .input').as('zipcode');
    cy.get(':nth-child(6) > [width="20%"] > .input').as('phoneNumber');
    cy.get(':nth-child(8) > :nth-child(2) > .input').as('accountNumber');
    cy.get(':nth-child(9) > [width="20%"] > .input').as('verifyAccountNumber');
    cy.get(':nth-child(11) > [width="20%"] > .input').as('amount');
    cy.get(':nth-child(13) > :nth-child(2) > .input').as('fromAccountNumber');
    cy.get('[ng-show="showResult"] > .title').as('result');

    cy.get('@firstName').type('Name');
    cy.get('@address').type('23 test address');
    cy.get('@city').type('melbourne');
    cy.get('@state').type('VIC');
    cy.get('@zipcode').type('3336');
    cy.get('@phoneNumber').type('011111111');
    cy.get('@accountNumber').type('12345');
    cy.get('@verifyAccountNumber').type('12345');
    cy.get('@fromAccountNumber').select(account);
    cy.get('@amount').type('100 {enter}');
    return cy.get('@result');
  }
}
