declare namespace Cypress {
  interface Chainable {
    checkUrl(expectedUrl: string): Chainable<Element>
  }
}
