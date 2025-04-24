describe("Forms", () => {
  it("Check the error messages on the form.", () => {
    cy.visit("/");
    cy.get("#name").click();
    cy.get('[for="name"]').click();
    cy.get(":nth-child(3) > small")
      .should("be.visible")
      .contains("Le nom est requis.");
    cy.get("#email").click();
    cy.get('[for="name"]').click();
    cy.get(":nth-child(6) > small")
      .should("be.visible")
      .contains("L'email est requis.");
    cy.get("#message").click();
    cy.get('[for="name"]').click();
    cy.get(":nth-child(9) > small")
      .should("be.visible")
      .contains("Le message est requis.");
    cy.get("form > button").should("have.attr", "disabled");
  });
  it("Verify form submission", () => {
    cy.visit("/");
    cy.intercept("POST", "https://formspree.io/f/xblglrpz").as("formSubmit");
    cy.get("#name").type("Test");

    cy.get("#email").type("Test@test.fr");

    cy.get("#message").type("Test Test Test Test Test");

    cy.get("form > button").should("not.have.attr", "disabled");
    cy.get("form > button").click();
    cy.get(".success-message")
      .should("be.visible")
      .contains("Message envoyé avec succès !");
    cy.wait("@formSubmit").its("response.statusCode").should("eq", 200);
  });
});
