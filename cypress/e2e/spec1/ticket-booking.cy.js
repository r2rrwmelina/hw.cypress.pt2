import {LoginPage} from "../../support/pages/LoginPage";
import {HomePage} from "../../support/pages/HomePage";
const movieInfo = require("../../fixtures/movies.json");
const user = require("../../fixtures/user.json");
const seats = require("../../fixtures/seats.json");

const homePage = new HomePage();
const loginPage = new LoginPage();

let movie;

it("Should book ticket", () => {
  cy.visit("/admin");
  loginPage.validLogin(user.email, user.password);
  cy.get(`[data-film-id=${movieInfo.movie2.id}] > .conf-step__movie-title`)
    .then($el => {
      movie = $el.text();
    })
    .then(() => {
      cy.visit("http://qamid.tmweb.ru");
      homePage.chooseHallByTitle(movie);
      homePage.bookSeats(seats.seat1.row, seats.seat1.seat);
    });
});
