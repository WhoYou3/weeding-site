/// <reference types="Cypress"/>

describe("Contact form", () => {
  it("Check right form", () => {
    cy.visit("/")
    cy.visit("/kontakt")
    cy.get("input").eq(1).click({ force: true }).type("jan irzyk")
    cy.get("input").eq(2).click({ force: true }).type("janirzyk@gmail.com")
    cy.get("input").eq(3).click({ force: true }).type("323232")
    cy.get("textarea").click({ force: true }).type("test test")
    cy.contains("button", /Wyślij/i).click({ force: true })
    cy.url().should("not.include", "kuźnia-marzeń")
  })
})
