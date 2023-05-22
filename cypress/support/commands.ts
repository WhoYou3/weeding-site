/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("checkUrl", (expectedUrl) => {
  cy.location("pathname").should("eq", expectedUrl)
})

Cypress.Commands.add("checkReference", (lengthReference) => {
  cy.get(".parts__ReferenceWrapper-sc-a8t11i-1")
    .as("referenceContainer")
    .then((element) => {
      expect(element.length).be.eq(lengthReference)
    })
  cy.get("@referenceContainer").within(() => {
    cy.get("h3").should("exist")
    cy.get("p").should("exist")
    cy.get("svg").should("exist")
  })
})
