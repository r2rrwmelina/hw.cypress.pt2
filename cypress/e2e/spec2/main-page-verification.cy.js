const movieInfo = require("../../fixtures/movies.json");
import {HomePage} from "../../support/pages/HomePage";
beforeEach(() => {
  cy.visit("/client/index.php");
});

const homePage = new HomePage();

describe("Home page cases", () => {
  it("Should to check number of dates in navbar", () => {
    homePage.checkNavbar();
  });
  it("Should to check number of movies", () => {
    homePage.checkMovies();
  });
  it("Should to check description by movie title", () => {
    homePage.checkMovieDescription(
      movieInfo.movie1.title,
      movieInfo.movie1.description,
    );
  });
});
