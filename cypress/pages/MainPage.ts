export class MainPage {
  launchApplication() {
    cy.visit('https://parabank.parasoft.com/parabank');
  }

  logOutFromApplication() {
    cy.contains('Log Out').click();
    return this;
  }
}
