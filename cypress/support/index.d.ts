declare namespace Cypress {
  interface Chainable {
    checkUrl(expectedUrl: string): Chainable<Element>
    checkReference(lengthReference: number): Chainable<Element>
  }
}
