export class LoginPage {
  enterUsername(username: string) {
    cy.get('input[name="username"]').type(username);
    return this;
  }

  enterPassword(password: string) {
    cy.get('input[name="password"]').type(password);
    return this;
  }

  clickSubmit() {
    cy.get('input[type="submit"]').click();
    return this;
  }
}
