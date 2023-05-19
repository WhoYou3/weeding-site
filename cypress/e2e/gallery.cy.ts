/// <reference types="Cypress"/>

describe("Gallery", () => {
  it("Check correct gallery img length", () => {
    // Intercept gallery request
    cy.intercept(
      "GET",
      "https://kuznia-marzen.pl/page-data/sq/d/1236569229.json"
    ).as("gallery")
    cy.visit("/galeria")

    // Compare gallery request with gallery length on the page
    cy.wait("@gallery").then((interception) => {
      let galleryLength =
        interception.response?.body.data.allDatoCmsGallery.nodes.length
      cy.get(".parts__ImageContainer-sc-1443ufv-1")
        .children()
        .should("have.length", galleryLength)
    })
  })
  it("Correct view img detail", () => {
    cy.visit("galeria")
    // Wait for loading page
    cy.wait(1000)

    // click first image

    cy.get(".parts__Image-sc-1443ufv-2").eq(0).click()
    cy.get(".parts__SpecificImage-sc-1443ufv-4").within(() => {
      cy.get("img").should("exist")
      cy.get("input").should("exist")
    })
  })
})
