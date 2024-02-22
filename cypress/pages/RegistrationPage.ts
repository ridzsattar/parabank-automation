export class RegistrationPage {
  fillFirstName(input: string) {
    cy.get("[id='customer.firstName']").type(input);
    return this;
  }
  fillLastName(input: string) {
    cy.get("[id='customer.lastName']").type(input);
    return this;
  }
  fillAdress(input: string) {
    cy.get("[id='customer.address.street']").type(input);
    return this;
  }
  fillCity(input: string) {
    cy.get("[id='customer.address.city']").type(input);
    return this;
  }
  fillState(input: string) {
    cy.get("[id='customer.address.state']").type(input);
    return this;
  }
  fillzipCode(input: string) {
    cy.get("[id='customer.address.zipCode']").type(input);
    return this;
  }
  fillphoneNumber(input: string) {
    cy.get("[id='customer.phoneNumber']").type(input);
    return this;
  }
  fillssn(input: string) {
    cy.get("[id='customer.ssn']").type(input);
    return this;
  }
  fillusername(input: string) {
    cy.get("[id='customer.username']").type(input);
    return this;
  }
  fillpassword(input: string) {
    cy.get("[id='customer.password']").type(input);
    return this;
  }
  fillrepeatedPassword(input: string) {
    cy.get("[id='repeatedPassword']").type(input);
    return this;
  }
  registerButton() {
    cy.get(
      '#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input'
    ).click();
    return this;
  }
  loggedInControl(input: string) {
    cy.get('#rightPanel > h1').should('have.text', input);
    return this;
  }
  usernameErrorControl(input: string) {
    cy.get("[id='customer.username.errors']").should('have.text', input);
    return this;
  }
  firstnameErrorControl(input: string) {
    cy.get("[id='customer.firstName.errors']").should('have.text', input);
    return this;
  }

  fillCompleteRegistrationForm() {
    cy.contains('Register').click();
    this.fillFirstName('Emily');
    this.fillLastName('Atkin');
    this.fillAdress('28 Jd drive CS');
    this.fillCity('Melbourne');
    this.fillState('VIC');
    this.fillzipCode('2333');
    this.fillphoneNumber('032425');
    this.fillssn('123');
    let username = unique_Username_Generator();
    this.fillusername(username);
    this.fillpassword('Click123*');
    this.fillrepeatedPassword('Click123*');
    this.registerButton();
    console.log(username);
    return username;
  }
}

function unique_Username_Generator() {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
