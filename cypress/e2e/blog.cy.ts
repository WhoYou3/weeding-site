/// <reference types="Cypress"/>

import { expect } from "chai"

let blogTitle = ""

describe("blog test", () => {
  it("blog appropriate showing", () => {
    cy.intercept(
      "GET",
      "https://kuznia-marzen.pl/page-data/sq/d/342019187.json"
    ).as("blogData")
    cy.visit("/blog")
    cy.wait("@blogData").then((interception) => {
      blogTitle =
        interception.response?.body.data.allDatoCmsBlogpost.nodes[0].title
    })
    cy.get("ul")
      .get("li")
      .eq(0)
      .as("firstArticle")
      .find("h3")
      .invoke("text")
      .then((text) => expect(text).to.equal(blogTitle))
    cy.get("@firstArticle").find("button").click({ force: true })
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        expect(text).to.equal(blogTitle)
      })
    cy.get("section").eq(0).find("img").should("exist")
  })
})
