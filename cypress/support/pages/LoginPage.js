const selector = require("../../fixtures/selectors.json");

export class LoginPage {
  login(email, password) {
    cy.get(selector.loginPage.titleAuth).should("be.visible");
    cy.get(selector.loginPage.emailField).type(email);
    cy.get(selector.loginPage.passwordField).type(password);
    cy.contains("Авторизоваться").click();
  }

  validLogin(email, password) {
    this.login(email, password);
    cy.contains("Управление залами").should("be.visible");
  }

  invalidLogin(email, password) {
    this.login(email, password);
    cy.contains("Ошибка авторизации!").should("be.visible");
  }
}
