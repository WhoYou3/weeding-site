declare namespace Cypress {
  interface Chainable {
    getById(id: string): Chainable<JQuery<HTMLElement>> // Dodanie deklaracji typu dla komendy 'getById'
  }
}
