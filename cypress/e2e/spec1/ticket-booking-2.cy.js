import {HomePage} from "../../support/pages/HomePage";
const seats = require("../../fixtures/seats.json");

const homePage = new HomePage();

it("Should book ticket for another day", () => {
  cy.visit("/");
  homePage.chooseDay();
  homePage.chooseHallByTitle("Need for Speed: Жажда скорости (2014)");
  homePage.bookSeats(seats.seat1.row, seats.seat1.seat);
});
