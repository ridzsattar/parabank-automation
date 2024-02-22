import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { MainPage } from '../pages/MainPage';
import { HomePage } from '../pages/HomePage';
import { OpenNewAccountPage } from '../pages/OpenNewAccountPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';
import { PayBillPage } from '../pages/PayBillPage';

let username: string;
let password = 'KucgVgd2024*';

describe('New User navigate to Para bank, perform funds transfer and pay bill end to end', () => {
  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();
  const homePage = new HomePage();
  const openNewAccountPage = new OpenNewAccountPage();
  const transferFundsPage = new TransferFundsPage();
  const mainPage = new MainPage();
  const payBillPage = new PayBillPage();

  before(() => {
    cy.visit('https://parabank.parasoft.com');
    cy.contains('ParaBank');
    username = registrationPage.fillCompleteRegistrationForm();
    cy.log(username);
    cy.contains('Welcome');
    mainPage.logOutFromApplication();
  });

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com');
    cy.contains('ParaBank');
    cy.log(username);
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickSubmit();
  });

  it('Test #01: Create saving account using Open New Account page', () => {
    homePage.clickOpenNewAccount();

    cy.request('https://parabank.parasoft.com/parabank/openaccount.htm').then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
    openNewAccountPage.verifyNewAccountPage();
    openNewAccountPage.selectSavingsAccountType();
    openNewAccountPage.clickSubmitButton();
    openNewAccountPage
      .verifyAccountOpenedAndGetAccountNumber()
      .then((accountNumber1) => {
        cy.log(accountNumber1);
        Cypress.env('account', accountNumber1);
      });
  });

  it('Test #02: Transfer funds from above newly created acount to another account', () => {
    homePage.clickTransferFunds();

    cy.request('https://parabank.parasoft.com/parabank/transfer.htm').then(
      (response) => {
        expect(response.status).to.eq(200);

        transferFundsPage.verifyTransferFundsPage();
        transferFundsPage.enterAmount('100');
        transferFundsPage.selectNewlyCreatedAccount(Cypress.env('account'));
        transferFundsPage.clickSubmitbutton();
      }
    );
  });

  it('Test #03: Pay the bill from the new account', () => {
    homePage.clickBillPay();
    payBillPage
      .enterPayeeDetailsAndPay(Cypress.env('account'))
      .should('have.text', 'Bill Payment Complete');
  });

  it('Test #04: API Test: Find transaction for newly created account by amount', () => {
    cy.request(
      'https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/' +
        Cypress.env('account') +
        '/transactions/amount/100'
    ).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
