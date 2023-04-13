/// <reference types="Cypress"/>

describe("Navbar navigation ", { defaultCommandTimeout: 10000 }, () => {
  it(
    "Check navbar navigation for more than 820px devices",
    { defaultCommandTimeout: 10000 },
    () => {
      cy.visit("/")

      cy.getById("navbar-link-omnie").click()
      cy.url().should("include", "omnie")
      cy.getById("navbar-link-oferta").click()
      cy.url().should("include", "oferta")
      cy.getById("navbar-link-galeria").click()
      cy.url().should("include", "galeria")
      cy.getById("navbar-link-kontakt").click()
      cy.url().should("include", "kontakt")
      cy.getById("navbar-link-home").click()
      cy.url().should("eq", "http://localhost:8000/")
    }
  )
  it("Check navbar navigation for less than 820px devices", () => {
    cy.viewport(819, 768)
    cy.visit("/")
    cy.getById("hamburger-icon").click()
    cy.getById("hamburger-link-omnie").click()
    cy.url().should("include", "omnie")
    cy.getById("hamburger-icon").click()
    cy.getById("hamburger-link-oferta").click()
    cy.url().should("include", "oferta")
    cy.getById("hamburger-icon").click()
    cy.getById("hamburger-link-galeria").click()
    cy.url().should("include", "galeria")
    cy.getById("hamburger-icon").click()
    cy.getById("hamburger-link-kontakt").click()
    cy.url().should("include", "kontakt")
    cy.getById("hamburger-icon").click()
    cy.getById("hamburger-link-home").click()
    cy.url().should("eq", "http://localhost:8000/")
  })
})
