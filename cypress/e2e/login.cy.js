const user = require("../fixtures/user.json");
import {LoginPage} from "../support/pages/LoginPage";
beforeEach(() => {
  cy.visit("/admin");
  cy.clearAllCookies();
});

const loginPage = new LoginPage();

describe("Authorization cases", () => {
  it("Successful auth", () => {
    loginPage.validLogin(user.email, user.password);
  });
  it("Auth with wrong email", () => {
    loginPage.invalidLogin(user.wrongEmail, user.password);
  });
  it("Auth with wrong password", () => {
    loginPage.invalidLogin(user.email, user.wrongPass);
  });
});
