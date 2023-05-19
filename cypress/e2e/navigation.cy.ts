/// <reference types="Cypress"/>

describe("navigation", () => {
  it("navigation buttons and links", () => {
    cy.visit("/")

    // Test all navigate links in navbar

    cy.contains("a", /O mnie/i).click()
    cy.checkUrl("/omnie/")
    cy.contains("a", /Oferta/i).click()
    cy.checkUrl("/oferta/")
    cy.contains("a", /Blog/i).click()
    cy.checkUrl("/blog/")
    cy.contains("a", /Galeria/i).click()
    cy.checkUrl("/galeria/")
    cy.contains("a", /Kontakt/i).click()
    cy.checkUrl("/kontakt/")

    // Back
    cy.visit("/")

    // Check all navigate buttons
    cy.contains("button", /Sprawdź ofertę/i).click({ force: true })
    cy.checkUrl("/oferta/")
    cy.go("back")
    cy.contains("button", /Oferta/i).click({ force: true })
    cy.checkUrl("/oferta/")
    cy.go("back")
    cy.contains("button", /Zobacz galerie/i).click({ force: true })
    cy.checkUrl("/galeria/")
    cy.visit("/omnie")
    cy.contains("button", /Skontaktuj się ze mną/i).click({ force: true })
    cy.checkUrl("/kontakt/")

    // Check footer

    cy.get("footer")
      .find("ul")
      .within(() => {
        cy.get("a").eq(0).click({ force: true })
        cy.checkUrl("/")
        cy.get("a").eq(1).click({ force: true })
        cy.checkUrl("/omnie/")
        cy.get("a").eq(2).click({ force: true })
        cy.checkUrl("/oferta/")
        cy.get("a").eq(3).click({ force: true })
        cy.checkUrl("/blog/")
        cy.get("a").eq(4).click({ force: true })
        cy.checkUrl("/galeria/")
        cy.get("a").eq(5).click({ force: true })
        cy.checkUrl("/kontakt/")
      })
  })
})
