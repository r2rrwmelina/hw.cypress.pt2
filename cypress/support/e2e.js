Cypress.on("exception", err => {
  if (err.message.includes("startSales")) {
    return false;
  }
});
import "./commands";
