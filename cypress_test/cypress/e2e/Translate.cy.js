describe("Translate", () => {
  it("Check that the language has successfully switched on the page.", () => {
    cy.visit("/");
    cy.get("h1 > span").invoke("text").should("contains", "Testeuse Logiciel");
    cy.get(".menu-btn").click();
    cy.get(".dropdown-content > :nth-child(2)").click();
    cy.get("h1 > span").invoke("text").should("contains", "Software Tester");
  });
});
