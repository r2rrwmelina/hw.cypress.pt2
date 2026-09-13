const selector = require("../../fixtures/selectors.json");

export class HomePage {
  checkNavbar() {
    cy.get(selector.homePage.navbar).should("have.length", 7);
  }

  chooseDay() {
    cy.get(selector.homePage.day).click();
  }

  checkMovies() {
    cy.get(selector.homePage.movieCards).should("have.length", 6);
  }

  checkMovieDescription(title, description) {
    cy.contains(title)
      .closest(selector.homePage.movieCards)
      .should("contain.text", description);
  }

  chooseHallByTitle(movie) {
    cy.contains(movie, {timeout: 10000})
      .closest(".movie")
      .find(selector.homePage.seanceTime)
      .click()
      .get(selector.homePage.byingTitle)
      .should("be.visible")
      .and("contain.text", movie);
  }

  bookSeats(row, seat) {
    this.chooseSeats(row, seat);
    cy.contains("Забронировать").click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
  }

  chooseSeats(row, seat) {
    cy.get(
      `.buying-scheme__row:nth-of-type(${row}) > .buying-scheme__chair:nth-of-type(${seat})`,
    ).click();
  }
}
