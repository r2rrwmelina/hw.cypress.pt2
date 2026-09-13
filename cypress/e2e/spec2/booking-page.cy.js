import {HomePage} from "../../support/pages/HomePage";
const seats = require("../../fixtures/seats.json");

const homePage = new HomePage();

it("The state of the booking button when the checkboxes are clicked", () => {
  cy.visit("/");
  homePage.chooseHallByTitle("Need for Speed: Жажда скорости (2014)");
  homePage.chooseSeats(seats.seat1.row, seats.seat1.seat);
  homePage.chooseSeats(seats.seat1.row, seats.seat1.seat);
  cy.get(".acceptin-button").should("have.attr", "disabled");
});
