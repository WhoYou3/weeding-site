/// <reference types="Cypress"/>

let lengthReference = 0

describe("reference", () => {
  it("check if correct show refference", () => {
    // Intercept request and store length of reference
    cy.intercept(
      "GET",
      "https://kuznia-marzen.pl/page-data/sq/d/4114136998.json"
    ).as("reference")
    cy.visit("/")
    cy.wait("@reference").then((interception) => {
      lengthReference =
        interception.response?.body.data.allDatoCmsReferencje.nodes.length
      cy.checkReference(lengthReference).as("checkReferenceWithAssertion")
    })
    cy.visit("/omnie/")
    cy.get("@checkReferenceWithAssertion")
    cy.visit("/oferta/")
    cy.get("@checkReferenceWithAssertion")
  })
})
